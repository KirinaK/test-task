import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRxjsComponent } from './app-rxjs.component';

describe('AppRxjsComponent', () => {
  let component: AppRxjsComponent;
  let fixture: ComponentFixture<AppRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
