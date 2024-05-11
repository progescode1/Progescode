import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetUpdateComponent } from './cabinet-update.component';

describe('CabinetUpdateComponent', () => {
  let component: CabinetUpdateComponent;
  let fixture: ComponentFixture<CabinetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabinetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
