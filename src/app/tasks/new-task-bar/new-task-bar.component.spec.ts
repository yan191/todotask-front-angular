import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskBarComponent } from './new-task-bar.component';

describe('NewTaskBarComponent', () => {
  let component: NewTaskBarComponent;
  let fixture: ComponentFixture<NewTaskBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
