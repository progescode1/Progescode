import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimeCreateComponent } from './regime-create.component';

describe('RegimeCreateComponent', () => {
  let component: RegimeCreateComponent;
  let fixture: ComponentFixture<RegimeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegimeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegimeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
