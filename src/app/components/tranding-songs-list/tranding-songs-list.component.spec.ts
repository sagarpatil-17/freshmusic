import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingSongsListComponent } from './tranding-songs-list.component';

describe('TrandingSongsListComponent', () => {
  let component: TrandingSongsListComponent;
  let fixture: ComponentFixture<TrandingSongsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingSongsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandingSongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
