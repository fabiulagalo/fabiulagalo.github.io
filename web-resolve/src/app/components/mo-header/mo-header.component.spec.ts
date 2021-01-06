import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoHeaderComponent } from './mo-header.component';

describe('MoHeaderComponent', () => {
  let component: MoHeaderComponent;
  let fixture: ComponentFixture<MoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
