import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddTaskPage } from './add-task.page';

describe('AddTaskPage', () => {
  let component: AddTaskPage;
  let fixture: ComponentFixture<AddTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
