import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

import { of } from "rxjs";
import { provideMockStore } from "@ngrx/store/testing";
import { MatCardModule } from "@angular/material/card";

import { Apollo } from "apollo-angular";
import { LaunchDetailsComponent } from './launch-details.component';
import { LaunchFacadeService } from "../services/launch-facade.service";

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;
  const initialState = { launchDetails: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent],
      imports: [
        RouterModule.forRoot([]),
        MatCardModule
      ],
      providers: [
        provideMockStore({ initialState }),
        Apollo,
        {
          provide: LaunchFacadeService,
          useValue: {}
        },
        {
          provide: Router,
          useValue: {}
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of()
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
