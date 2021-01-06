import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaServicoComponent } from './cobertura-servico.component';

describe('CoberturaServicoComponent', () => {
  let component: CoberturaServicoComponent;
  let fixture: ComponentFixture<CoberturaServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoberturaServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoberturaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
