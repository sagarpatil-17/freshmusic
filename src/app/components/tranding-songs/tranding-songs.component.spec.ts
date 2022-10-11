import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingSongsComponent } from './tranding-songs.component';

describe('TrandingSongsComponent', () => {
  let component: TrandingSongsComponent;
  let fixture: ComponentFixture<TrandingSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandingSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
