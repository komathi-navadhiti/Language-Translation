import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardAppComponent } from './data-card-app.component';

describe('DataCardAppComponent', () => {
  let component: DataCardAppComponent;
  let fixture: ComponentFixture<DataCardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
