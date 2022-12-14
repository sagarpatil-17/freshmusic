import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesListComponent } from './new-releases-list.component';

describe('NewReleasesListComponent', () => {
  let component: NewReleasesListComponent;
  let fixture: ComponentFixture<NewReleasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleasesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReleasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
