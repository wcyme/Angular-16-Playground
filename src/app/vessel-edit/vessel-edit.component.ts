import { Component, Input } from '@angular/core';
import { Vessel } from '../entity/vessel';
import { VesselService } from '../service/vessel/vessel.service';

@Component({
  selector: 'app-vessel-edit',
  templateUrl: './vessel-edit.component.html',
  styleUrls: ['./vessel-edit.component.scss']
})
export class VesselEditComponent {
  @Input() vessel: Vessel = new Vessel();

  constructor(private vesselService: VesselService) {

  }

  ngOnInit() {
    this.vesselService.getVessel(52).subscribe({
      next: (data) => {
        this.vessel = data;
      },
      error: () => {
        this.vessel = new Vessel();
      }
    });
  }

  updateVessel() {
    this.vesselService.updateVessel(this.vessel).subscribe({
      next: (data) => {
        console.log(data);
      }
    })

  }

}
