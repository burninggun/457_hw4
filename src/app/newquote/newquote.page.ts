import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.page.html',
  styleUrls: ['./newquote.page.scss'],
})
export class NewquotePage implements OnInit {

  constructor(private QuoteService: QuoteService, private router: Router) { }
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      person: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      text: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(200)]
      })
    })
  }

  onSubmit(){
    this.QuoteService.newQuote(
      this.form.value.person,
      this.form.value.text
    );
    this.form.reset();
    this.router.navigate(['/home'])
  }

}
