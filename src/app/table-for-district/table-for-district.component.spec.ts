import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForDistrictComponent } from './table-for-district.component';

describe('TableForDistrictComponent', () => {
  let component: TableForDistrictComponent;
  let fixture: ComponentFixture<TableForDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
