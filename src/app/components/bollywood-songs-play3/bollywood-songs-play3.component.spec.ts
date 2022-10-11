import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodSongsPlay3Component } from './bollywood-songs-play3.component';

describe('BollywoodSongsPlay3Component', () => {
  let component: BollywoodSongsPlay3Component;
  let fixture: ComponentFixture<BollywoodSongsPlay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollywoodSongsPlay3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollywoodSongsPlay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
