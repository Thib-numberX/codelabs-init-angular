import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housting-list',
  templateUrl: './housting-list.component.html',
  styleUrls: ['./housting-list.component.css']
})
export class HoustingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHoustingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
      .toLowerCase()
      .includes(
        searchText.toLowerCase()
      )
    );
  }
  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
    console.log(location);

  }

}
