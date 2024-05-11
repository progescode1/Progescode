import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebourUpdateComponent } from './debour-update.component';

describe('DebourUpdateComponent', () => {
  let component: DebourUpdateComponent;
  let fixture: ComponentFixture<DebourUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebourUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebourUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
