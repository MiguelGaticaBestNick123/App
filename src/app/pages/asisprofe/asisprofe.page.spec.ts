import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisprofePage } from './asisprofe.page';

describe('AsisprofePage', () => {
  let component: AsisprofePage;
  let fixture: ComponentFixture<AsisprofePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsisprofePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
