import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTagComponent } from './submit-tag.component';

describe('SubmitTagComponent', () => {
  let component: SubmitTagComponent;
  let fixture: ComponentFixture<SubmitTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
