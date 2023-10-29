import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvideclavePage } from './olvideclave.page';

describe('OlvideclavePage', () => {
  let component: OlvideclavePage;
  let fixture: ComponentFixture<OlvideclavePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvideclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
