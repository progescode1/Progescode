import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocieeCreateComponent } from './associee-create.component';

describe('AssocieeCreateComponent', () => {
  let component: AssocieeCreateComponent;
  let fixture: ComponentFixture<AssocieeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssocieeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssocieeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
