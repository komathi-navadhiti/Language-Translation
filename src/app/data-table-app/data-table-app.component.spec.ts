import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableAppComponent } from './data-table-app.component';

describe('DataTableAppComponent', () => {
  let component: DataTableAppComponent;
  let fixture: ComponentFixture<DataTableAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
