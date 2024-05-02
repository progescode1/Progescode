import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetListComponent } from './cabinet-list.component';

describe('CabinetListComponent', () => {
  let component: CabinetListComponent;
  let fixture: ComponentFixture<CabinetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabinetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
