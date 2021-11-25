import { AfterViewInit, Component, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // serverElements: [{ type: 'server'; name: 'test server'; content: 'testa server'; }] | undefined;

  constructor(private elementRef:ElementRef,private translateService:TranslateService){
    // this.translateService.setDefaultLang('en')
    // this.translateService.use(localStorage.getItem('lang')||'en')
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='skyblue';
  }
}
