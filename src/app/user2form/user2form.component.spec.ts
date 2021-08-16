import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User2formComponent } from './user2form.component';

describe('User2formComponent', () => {
  let component: User2formComponent;
  let fixture: ComponentFixture<User2formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User2formComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User2formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
