import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Loop } from '../../models/loop.model';

@Component({
  selector: 'loop-preview',
  templateUrl: './loop-preview.component.html',
  styleUrls: ['./loop-preview.component.less']
})
export class LoopPreviewComponent implements OnInit {
  @Input() loop!: Loop;
  @Output() onPlayLoop: EventEmitter<Loop> = new EventEmitter();
  @Output() onPauseLoop: EventEmitter<Loop> = new EventEmitter();

  @ViewChild('audioElement', { static: false })
  public audioRef!: ElementRef;
  private audio!: HTMLMediaElement;
  timer: any;
  duration!: any;
  currentTime: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.audio = this.audioRef.nativeElement;
    this.audio.onloadedmetadata = () => {
      this.duration = Math.floor(this.audio.duration)
    }
  }

  get paused(): boolean {
    return this.audio ? this.audio.paused : true;
  }

  getLoopSrc(loopName: string): string {
    return `assets/audios/${loopName}.mp3`
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.loop.isPlay = false;
      this.onPauseLoop.emit(this.loop);
    }
  }

  play(): void {
    if (this.audio) {
      if (!this.loop.isPlay) {
        if(this.loop.startTime > 0) {
          this.loop.startTime = 0;
          this.onPauseLoop.emit(this.loop);
          clearTimeout(this.timer)
        } else {
          this.onPlayLoop.emit(this.loop);

           this.timer = setTimeout(()=> {
            this.audio.play();
            this.loop.isPlay = true;
            this.loop.startTime = 0;
          }, this.loop.startTime * 1000);
        }
      } 

      this.audio.ontimeupdate = () => {
       this.loop.endTime = Math.floor(this.audio.duration - this.audio.currentTime);
       this.currentTime = Math.floor(this.audio.currentTime);
      }

      this.audio.onended = () => {
        this.audio.play()
      }
    }
  }
}
