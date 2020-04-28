import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuotedetailPage } from './quotedetail.page';

describe('QuotedetailPage', () => {
  let component: QuotedetailPage;
  let fixture: ComponentFixture<QuotedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
