import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loop } from '../models/loop.model';

const LOOPS = [
  {
    name: 'SilentStar_120_Em_OrganSynth', 
    isPlay: false,
    startTime: 0,
    endTime: 0
  }
  ,
  {
    name: 'PAS3GROOVE1.03B', 
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  {
    name: 'MazePolitics_120_Perc', 
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  { 
    name: 'GrooveB_120bpm_Tanggu',
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  {
    name: 'FUD_120_StompySlosh',
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  {
    name: 'electric guitar coutry slide 120bpm - B',
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  {
    name: 'Bass Warwick heavy funk groove on E 120 BPM', 
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  {
    name: '120_stutter_breakbeats_16',
    isPlay: false,
    startTime: 0,
    endTime: 0
  },
  {
    name: '120_future_funk_beats_25',
    isPlay: false,
    startTime: 0,
    endTime: 0
  }
];

@Injectable({
  providedIn: 'root'
})
export class LoopService {
  private _loops: Loop[] = LOOPS;
  private _loops$ = new BehaviorSubject<Array<Loop>>([])
  public loops$ = this._loops$.asObservable()

  constructor() { }

  public loadLoops(): void {
    this._loops$.next(this._loops);
  }
}
