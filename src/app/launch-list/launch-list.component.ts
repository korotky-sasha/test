import { LaunchFacadeService } from "./../services/launch-facade.service";
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";

const IMAGE_PLACEHOLDER = 'assets/img/image-placeholder.jpg';

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
  constructor(private readonly launchFacade: LaunchFacadeService) {}
  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();
  listLoading$ = this.launchFacade.getLaunchListLoading();
  launchesLoaded = [];

  ngOnInit() {
    this.pastLaunches$.subscribe(value => {
      this.launchesLoaded = value.map(() => false);
    });
  }

  invalidImage(event) {
    event.target.src = IMAGE_PLACEHOLDER;
  }

  imgLoaded(index: number) {
    this.launchesLoaded[index] = true;
  }
}
