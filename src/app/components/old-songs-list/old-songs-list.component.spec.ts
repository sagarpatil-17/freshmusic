import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSongsListComponent } from './old-songs-list.component';

describe('OldSongsListComponent', () => {
  let component: OldSongsListComponent;
  let fixture: ComponentFixture<OldSongsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldSongsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldSongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
