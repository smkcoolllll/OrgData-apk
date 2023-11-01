import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatizationComponent } from './templatization.component';

describe('TemplatizationComponent', () => {
  let component: TemplatizationComponent;
  let fixture: ComponentFixture<TemplatizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatizationComponent]
    });
    fixture = TestBed.createComponent(TemplatizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
