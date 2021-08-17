import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopListComponent } from './loop-list.component';

describe('LooperListComponent', () => {
  let component: LoopListComponent;
  let fixture: ComponentFixture<LoopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
