import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopPreviewComponent } from './loop-preview.component';

describe('LooperPreviewComponent', () => {
  let component: LoopPreviewComponent;
  let fixture: ComponentFixture<LoopPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
