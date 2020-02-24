import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompromisoComponent } from './form-compromiso.component';

describe('FormCompromisoComponent', () => {
  let component: FormCompromisoComponent;
  let fixture: ComponentFixture<FormCompromisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompromisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
