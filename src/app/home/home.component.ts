import { Component } from '@angular/core';

import { Vessel } from '../entity/vessel';
import { VesselService } from '../service/vessel/vessel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private vesselService: VesselService) {
  }

  getAllVessel() {
    this.vesselService.getAllVessel().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getVesselById() {
    this.vesselService.getVessel(52).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateVessel() {
    this.vesselService.getVessel(52).subscribe({
      next: (data) => {
        data.name = "Xavi";
        this.vesselService.updateVessel(data).subscribe({
          next: (data) => {
            console.log(data);
          }
        })
      }
    });
  }

  createVessel() {
    this.vesselService.createRandomVessel().subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }

}
