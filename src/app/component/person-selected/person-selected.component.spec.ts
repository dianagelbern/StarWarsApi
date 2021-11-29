import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSelectedComponent } from './person-selected.component';

describe('PersonSelectedComponent', () => {
  let component: PersonSelectedComponent;
  let fixture: ComponentFixture<PersonSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
