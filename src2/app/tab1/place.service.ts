import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _place: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      '../assets/imgs/nyc.jpg',
      149.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p2',
      'L\' Amour Toujours',
      'A romatic place in Paris!',
      '../assets/imgs/paris.jpg',
      189.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      '../assets/imgs/sanf.jpg',
      99.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    )
  ];
  get places() {
    return [...this._place];
  }
  getPlace(id: string) {
    return {...this._place.find(p => p.id === id)};
  }
  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      '../assets/imgs/nyc.jpg',
      price,
      dateFrom,
      dateTo,
    );
    this._place.push(newPlace);
  }
  updateOffer(placeId: string, title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const updatedPlaceIndex = this._place.findIndex(p1 => p1.id === placeId);
    const updatedPlace = [...this._place];
    const oldPlace = updatedPlace[updatedPlaceIndex];
    updatedPlace[updatedPlaceIndex] = new Place(
      oldPlace.id,
      title,
      description,
      oldPlace.image,
      price,
      dateFrom,
      dateTo
    );
    this._place.splice(updatedPlaceIndex, 1);
    this._place.push(updatedPlace[updatedPlaceIndex]);
  }
  constructor() { }
}
