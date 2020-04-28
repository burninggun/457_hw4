import { Component } from '@angular/core';
import { QuoteService } from '../quote.service'
import { Quotes } from '../quotes.model'
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadedQuotes: Quotes[]
  constructor( private QuoteService: QuoteService, private router: Router ) {}

  ngOnInit(){
    this.loadedQuotes = this.QuoteService.quotes
  }

  ionViewWillEnter(){
    this.loadedQuotes = this.QuoteService.quotes
  }

  deleteQuote(quote: Quotes){
    this.QuoteService.deleteQuote(quote)
    this.loadedQuotes = this.QuoteService.quotes
  }

  navigateToDetail(quote: Quotes){
    let id = quote.id;
    this.router.navigate([`home/quotedetail/${id}`])
  }
}
