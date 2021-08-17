import { Component } from '@angular/core';
import { LoopService } from './services/loop.service';
import { Loop } from './models/loop.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  loops: Loop[] = [];
  title = 'Loop Machine';

  constructor(private loopService: LoopService) { 
    this.loopService.loadLoops();

    this.loopService.loops$.subscribe((loops) => {
      this.loops = [...loops];
    })
  }

}
