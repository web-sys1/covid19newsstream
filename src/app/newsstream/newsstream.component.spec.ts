import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsstreamComponent } from './newsstream.component';

describe('NewsstreamComponent', () => {
  let component: NewsstreamComponent;
  let fixture: ComponentFixture<NewsstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
