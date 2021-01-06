import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoPassosComponent } from './mo-passos.component';

describe('MoPassosComponent', () => {
  let component: MoPassosComponent;
  let fixture: ComponentFixture<MoPassosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoPassosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoPassosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
