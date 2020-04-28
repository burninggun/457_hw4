import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacedetailPage } from './placedetail.page';

describe('PlacedetailPage', () => {
  let component: PlacedetailPage;
  let fixture: ComponentFixture<PlacedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
