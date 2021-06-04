import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincarComponent } from './admincar.component';

describe('AdmincarComponent', () => {
  let component: AdmincarComponent;
  let fixture: ComponentFixture<AdmincarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
