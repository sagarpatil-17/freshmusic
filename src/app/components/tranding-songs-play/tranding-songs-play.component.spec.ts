import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingSongsPlayComponent } from './tranding-songs-play.component';

describe('TrandingSongsPlayComponent', () => {
  let component: TrandingSongsPlayComponent;
  let fixture: ComponentFixture<TrandingSongsPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingSongsPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandingSongsPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
