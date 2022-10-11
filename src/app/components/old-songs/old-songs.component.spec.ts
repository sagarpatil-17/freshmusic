import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSongsComponent } from './old-songs.component';

describe('OldSongsComponent', () => {
  let component: OldSongsComponent;
  let fixture: ComponentFixture<OldSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
