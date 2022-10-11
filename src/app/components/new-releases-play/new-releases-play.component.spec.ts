import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesPlayComponent } from './new-releases-play.component';

describe('NewReleasesPlayComponent', () => {
  let component: NewReleasesPlayComponent;
  let fixture: ComponentFixture<NewReleasesPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleasesPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleasesPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
