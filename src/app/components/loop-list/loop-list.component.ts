import { Component, Input, OnInit } from '@angular/core';
import { Loop } from '../../models/loop.model';

@Component({
  selector: 'loop-list',
  templateUrl: './loop-list.component.html',
  styleUrls: ['./loop-list.component.less']
})
export class LoopListComponent implements OnInit {
  @Input() loops!: Loop[];
  playLoops: Loop[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addLoop(loop: Loop) {
    const loopIndex = this.loops.findIndex(item => item.name === loop.name);

    if(this.playLoops.length > 0) {
     
      if( this.playLoops[this.playLoops.length - 1].startTime > 0) {
         // In case the previous loop is also in a pending state
        this.loops[loopIndex].startTime = this.playLoops[0].endTime;
      } else {
        this.loops[loopIndex].startTime = this.playLoops[this.playLoops.length - 1].endTime;
      }
    }

    this.playLoops.push(loop);
  }

  removeLoop(loop: Loop) {
    const loopIndex = this.playLoops.findIndex(item => item.name === loop.name);
    this.playLoops.splice(loopIndex, 1);
  }

}
