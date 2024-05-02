import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantageListComponent } from './avantage-list.component';

describe('AvantageListComponent', () => {
  let component: AvantageListComponent;
  let fixture: ComponentFixture<AvantageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvantageListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvantageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
