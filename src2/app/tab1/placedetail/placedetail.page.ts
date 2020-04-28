import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-placedetail',
  templateUrl: './placedetail.page.html',
  styleUrls: ['./placedetail.page.scss'],
})
export class PlacedetailPage implements OnInit {
  place: Place;
  id: string;
  constructor(private route: ActivatedRoute,
    private placeService: PlaceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('placeId');
    this.place = this.placeService.getPlace(this.id);
  }

}
