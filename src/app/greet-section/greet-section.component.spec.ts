import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetSectionComponent } from './greet-section.component';

describe('GreetSectionComponent', () => {
  let component: GreetSectionComponent;
  let fixture: ComponentFixture<GreetSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetSectionComponent]
    });
    fixture = TestBed.createComponent(GreetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
