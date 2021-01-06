import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoServicoComponent } from './mo-servico.component';

describe('MoServicoComponent', () => {
  let component: MoServicoComponent;
  let fixture: ComponentFixture<MoServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
