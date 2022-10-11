import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodSongsPlayComponent } from './bollywood-songs-play.component';

describe('BollywoodSongsPlayComponent', () => {
  let component: BollywoodSongsPlayComponent;
  let fixture: ComponentFixture<BollywoodSongsPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollywoodSongsPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollywoodSongsPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
