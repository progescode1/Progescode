import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueCreateComponent } from './banque-create.component';

describe('BanqueCreateComponent', () => {
  let component: BanqueCreateComponent;
  let fixture: ComponentFixture<BanqueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanqueCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanqueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
