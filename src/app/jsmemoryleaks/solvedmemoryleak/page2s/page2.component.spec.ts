import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Components } from './page2.component';

describe('Page2Component', () => {
  let component: Page2Components;
  let fixture: ComponentFixture<Page2Components>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
