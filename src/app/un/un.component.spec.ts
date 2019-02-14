import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnComponent } from './un.component';

describe('UnComponent', () => {
  let component: UnComponent;
  let fixture: ComponentFixture<UnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
