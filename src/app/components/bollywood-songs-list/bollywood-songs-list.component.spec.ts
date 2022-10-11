import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodSongsListComponent } from './bollywood-songs-list.component';

describe('BollywoodSongsListComponent', () => {
  let component: BollywoodSongsListComponent;
  let fixture: ComponentFixture<BollywoodSongsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollywoodSongsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollywoodSongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
