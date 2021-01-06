import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoIntroComponent } from './mo-intro.component';

describe('MoIntroComponent', () => {
  let component: MoIntroComponent;
  let fixture: ComponentFixture<MoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
