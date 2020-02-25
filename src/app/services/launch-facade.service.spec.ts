import { TestBed } from '@angular/core/testing';

import { provideMockStore } from "@ngrx/store/testing";

import { Apollo } from "apollo-angular";
import { ApolloTestingModule } from "apollo-angular/testing";

import { LaunchFacadeService } from './launch-facade.service';
import {PastLaunchesListGQL} from "./spacexGraphql.service";

describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ApolloTestingModule],
    providers: [
      provideMockStore({}),
      Apollo,
      LaunchFacadeService,
      PastLaunchesListGQL
    ]
  }));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
