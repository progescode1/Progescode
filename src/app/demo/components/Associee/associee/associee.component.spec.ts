import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocieeComponent } from './associee.component';

describe('AssocieeComponent', () => {
  let component: AssocieeComponent;
  let fixture: ComponentFixture<AssocieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssocieeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssocieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
