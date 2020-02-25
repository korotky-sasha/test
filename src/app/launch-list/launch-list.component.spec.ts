import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from "@angular/router";

import { of } from "rxjs";
import { provideMockStore } from "@ngrx/store/testing";
import { MatCardModule } from "@angular/material/card";

import { Apollo } from "apollo-angular";
import { ApolloTestingModule } from "apollo-angular/testing";

import { LaunchListComponent } from './launch-list.component';
import { RelativeTimePipe } from "../core/helpers/pipes/relative-time/relative-time.pipe";
import { LaunchFacadeService } from "../services/launch-facade.service";

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;
  const initialState = { launchList: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchListComponent,
        RelativeTimePipe
      ],
      imports: [
        RouterModule.forRoot([]),
        MatCardModule,
        ApolloTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        Apollo,
        {
          provide: LaunchFacadeService,
          useValue: {
            pastLaunchListStoreCache() {
              return of();
            },
            getLaunchListLoading() {}
          }
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
