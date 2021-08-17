import { Component } from '@angular/core';
import { LoopService } from './services/loop.service';

interface Loop {
  name: string;
  isPlay: boolean;
  startTime: number;
  endTime: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  loops: Loop[] = [];

  constructor(private loopService: LoopService) { 
    this.loopService.loadLoops();

    this.loopService.loops$.subscribe((loops) => {
      this.loops = [...loops];
    })
  }

}
