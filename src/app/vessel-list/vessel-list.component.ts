import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { VesselService } from '../service/vessel.service';
import { Vessel } from '../entity/vessel';

@Component({
  selector: 'app-vessel-list',
  templateUrl: './vessel-list.component.html',
  styleUrls: ['./vessel-list.component.scss']
})
export class VesselListComponent {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  public rowData$!: Observable<Vessel[]>;

  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'code' },
    { field: 'name' }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private vesselService: VesselService) {

  }


  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.vesselService.getAllVessel();
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

}
