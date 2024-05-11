import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimeUpdateComponent } from './regime-update.component';

describe('RegimeUpdateComponent', () => {
  let component: RegimeUpdateComponent;
  let fixture: ComponentFixture<RegimeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegimeUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegimeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
