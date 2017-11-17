import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContentTableComponent } from './user-content-table.component';

describe('UserContentTableComponent', () => {
  let component: UserContentTableComponent;
  let fixture: ComponentFixture<UserContentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
