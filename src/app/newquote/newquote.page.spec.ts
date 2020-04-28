import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewquotePage } from './newquote.page';

describe('NewquotePage', () => {
  let component: NewquotePage;
  let fixture: ComponentFixture<NewquotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewquotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewquotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
