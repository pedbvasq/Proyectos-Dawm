import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetallesComponent } from './player-detalles.component';

describe('PlayerDetallesComponent', () => {
  let component: PlayerDetallesComponent;
  let fixture: ComponentFixture<PlayerDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
