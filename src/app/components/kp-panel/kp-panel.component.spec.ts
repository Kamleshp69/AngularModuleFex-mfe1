import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpPanelComponent } from './kp-panel.component';

describe('KpPanelComponent', () => {
  let component: KpPanelComponent;
  let fixture: ComponentFixture<KpPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
