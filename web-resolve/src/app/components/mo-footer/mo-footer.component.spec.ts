import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoFooterComponent } from './mo-footer.component';

describe('MoFooterComponent', () => {
  let component: MoFooterComponent;
  let fixture: ComponentFixture<MoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
