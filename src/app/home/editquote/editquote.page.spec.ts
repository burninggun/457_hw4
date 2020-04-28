import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditquotePage } from './editquote.page';

describe('EditquotePage', () => {
  let component: EditquotePage;
  let fixture: ComponentFixture<EditquotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditquotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditquotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
