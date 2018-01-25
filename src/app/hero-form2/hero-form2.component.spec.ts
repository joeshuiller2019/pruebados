import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroForm2Component } from './hero-form2.component';

describe('HeroForm2Component', () => {
  let component: HeroForm2Component;
  let fixture: ComponentFixture<HeroForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
