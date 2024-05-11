import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantageUpdateComponent } from './avantage-update.component';

describe('AvantageUpdateComponent', () => {
  let component: AvantageUpdateComponent;
  let fixture: ComponentFixture<AvantageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvantageUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvantageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
