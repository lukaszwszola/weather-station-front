import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuredValueListComponent } from './measured-value-list.component';

describe('MeasuredValueListComponent', () => {
  let component: MeasuredValueListComponent;
  let fixture: ComponentFixture<MeasuredValueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuredValueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuredValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
