import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodSongsPlay2Component } from './bollywood-songs-play2.component';

describe('BollywoodSongsPlay2Component', () => {
  let component: BollywoodSongsPlay2Component;
  let fixture: ComponentFixture<BollywoodSongsPlay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BollywoodSongsPlay2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollywoodSongsPlay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
