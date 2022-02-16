import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusSupportComponent } from './campus-support.component';

describe('CampusSupportComponent', () => {
  let component: CampusSupportComponent;
  let fixture: ComponentFixture<CampusSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
