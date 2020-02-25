import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchFacadeService } from "../services/launch-facade.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  selectedImage = 0;

  constructor(
    private readonly route: ActivatedRoute,
    public router: Router,
    private launchDetailsStoreService: LaunchFacadeService
  ) {}

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchDetailsStoreService.pastLaunchDetailsStoreCache(id)),
  );

  selectImage(num: number) {
    this.selectedImage = num;
  }

  selectNextImage(arr) {
    if (arr.length) {
      const length = arr.length;
      if (length === this.selectedImage + 1) {
        this.selectedImage = 0;
      } else {
        this.selectedImage ++;
      }
    }
  }

  selectPrevImage(arr) {
    if (arr.length) {
      const length = arr.length;
      if (this.selectedImage === 0) {
        this.selectedImage = length - 1;
      } else {
        this.selectedImage --;
      }
    }
  }
}
