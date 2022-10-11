import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSongsPlayComponent } from './old-songs-play.component';

describe('OldSongsPlayComponent', () => {
  let component: OldSongsPlayComponent;
  let fixture: ComponentFixture<OldSongsPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldSongsPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldSongsPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
