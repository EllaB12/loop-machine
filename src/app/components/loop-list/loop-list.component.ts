import { Component, Input, OnInit } from '@angular/core';
import { Loop } from '../../models/loop.model';

@Component({
  selector: 'loop-list',
  templateUrl: './loop-list.component.html',
  styleUrls: ['./loop-list.component.less']
})
export class LoopListComponent implements OnInit {
  @Input()
  loops!: Loop[];
  playLoops: Loop[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addLoop(loop: any) {
    const loopIndex = this.loops.findIndex((item) => item.name === loop.name);
    if(this.playLoops.length > 0) {
      if( this.playLoops[this.playLoops.length - 1].startTime > 0) {
        this.loops[loopIndex].startTime = this.playLoops[0].endTime;
      } else {
        this.loops[loopIndex].startTime = this.playLoops[this.playLoops.length - 1].endTime;
      }
    }
    this.playLoops.push(loop);
    console.log(this.playLoops)
  }

  removeLoop(loop:any) {
    const loopIndex = this.playLoops.findIndex(item => item.name === loop.name);
    this.playLoops.splice(loopIndex, 1);
    console.log(this.playLoops)
  }

}
