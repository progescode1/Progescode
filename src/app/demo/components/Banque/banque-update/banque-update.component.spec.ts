import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueUpdateComponent } from './banque-update.component';

describe('BanqueUpdateComponent', () => {
  let component: BanqueUpdateComponent;
  let fixture: ComponentFixture<BanqueUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanqueUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanqueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
