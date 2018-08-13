import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitChannelComponent } from './submit-channel.component';

describe('SubmitChannelComponent', () => {
  let component: SubmitChannelComponent;
  let fixture: ComponentFixture<SubmitChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
