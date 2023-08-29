import { Component, Input } from '@angular/core';
import { CustomGeocoderResult } from '../entity/CustomGeocoderResult';

@Component({
  selector: 'app-geocode-item',
  templateUrl: './geocode-item.component.html',
  styleUrls: ['./geocode-item.component.scss']
})
export class GeocodeItemComponent {

  @Input() customGeocodeData! : CustomGeocoderResult;

}
