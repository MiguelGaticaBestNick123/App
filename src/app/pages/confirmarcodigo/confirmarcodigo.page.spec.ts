import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarcodigoPage } from './confirmarcodigo.page';

describe('ConfirmarcodigoPage', () => {
  let component: ConfirmarcodigoPage;
  let fixture: ComponentFixture<ConfirmarcodigoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarcodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
