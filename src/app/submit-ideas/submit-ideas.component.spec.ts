import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIdeasComponent } from './submit-ideas.component';

describe('SubmitIdeasComponent', () => {
  let component: SubmitIdeasComponent;
  let fixture: ComponentFixture<SubmitIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitIdeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
