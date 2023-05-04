import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCompletedPage } from './add-completed.page';

describe('AddCompletedPage', () => {
  let component: AddCompletedPage;
  let fixture: ComponentFixture<AddCompletedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
