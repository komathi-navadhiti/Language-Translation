import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAppComponent } from './example-app.component';

describe('ExampleAppComponent', () => {
  let component: ExampleAppComponent;
  let fixture: ComponentFixture<ExampleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
