import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../quote.service'
import { Quotes } from '../../quotes.model'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.page.html',
  styleUrls: ['./quotedetail.page.scss'],
})
export class QuotedetailPage implements OnInit {
  quote: Quotes
  constructor(
    private QuoteService: QuoteService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
   let id = this.route.snapshot.paramMap.get('id')

   this.quote = this.QuoteService.getQuote(id)
  }

}
