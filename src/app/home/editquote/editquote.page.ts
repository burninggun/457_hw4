import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../quote.service';
import { Quotes } from '../../quotes.model';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-editquote',
  templateUrl: './editquote.page.html',
  styleUrls: ['./editquote.page.scss'],
})
export class EditquotePage implements OnInit {
  quote: Quotes
  form: FormGroup
  constructor(
    private QuoteService: QuoteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.quote = this.QuoteService.getQuote(id);

    this.form = new FormGroup({
      person: new FormControl(this.quote.person, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      text: new FormControl(this.quote.text, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(200)]
      })
    })

  }
  
  onSubmit(){
    this.QuoteService.updateQuote({
      id: this.route.snapshot.paramMap.get('id'),
      person: this.form.value.person,
      text: this.form.value.text,
    })
    this.form.reset();
    this.router.navigate(['/home'])
  }

}
