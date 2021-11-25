import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  lang: any;
  constructor(public translateService:TranslateService) { 
    this.lang =this.translateService.addLangs(['en','ta'])
     this.translateService.setDefaultLang('en')
     const browerLang=translateService.getBrowserLang()
     translateService.use(browerLang.match(/en|ta/)?browerLang:'en')

  }

  ngOnInit(): void {
    // this.lang=localStorage.getItem("lang")||'en';
  }

  // changeLanguage(lang: any){
  //   console.log(lang.target.value);
  //   localStorage.setItem('lang',lang.target.value)
  //   window.location.reload(); 
  // }

}
