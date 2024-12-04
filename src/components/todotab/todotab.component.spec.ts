import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotabComponent } from './todotab.component';

describe('TodotabComponent', () => {
  let component: TodotabComponent;
  let fixture: ComponentFixture<TodotabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodotabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
