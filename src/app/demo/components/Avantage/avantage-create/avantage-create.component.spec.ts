import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantageCreateComponent } from './avantage-create.component';

describe('AvantageCreateComponent', () => {
  let component: AvantageCreateComponent;
  let fixture: ComponentFixture<AvantageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvantageCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvantageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
