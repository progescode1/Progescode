import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebourCreateComponent } from './debour-create.component';

describe('DebourCreateComponent', () => {
  let component: DebourCreateComponent;
  let fixture: ComponentFixture<DebourCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebourCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebourCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
