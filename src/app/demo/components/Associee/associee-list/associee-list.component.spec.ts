import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocieeListComponent } from './associee-list.component';

describe('AssocieeListComponent', () => {
  let component: AssocieeListComponent;
  let fixture: ComponentFixture<AssocieeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssocieeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssocieeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
