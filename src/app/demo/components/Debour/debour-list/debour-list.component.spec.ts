import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebourListComponent } from './debour-list.component';

describe('DebourListComponent', () => {
  let component: DebourListComponent;
  let fixture: ComponentFixture<DebourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebourListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
