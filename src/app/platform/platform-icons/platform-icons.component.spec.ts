import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformIconsComponent } from './platform-icons.component';

describe('PlatformIconsComponent', () => {
  let component: PlatformIconsComponent;
  let fixture: ComponentFixture<PlatformIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
