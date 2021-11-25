import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataTableAppComponent } from './data-table-app/data-table-app.component';
import { TableForDistrictComponent } from './table-for-district/table-for-district.component';
import { RouterModule } from '@angular/router';
import { DataCardAppComponent } from './data-card-app/data-card-app.component';
import { ExampleAppComponent } from './example-app/example-app.component';
import { CockpitAppComponent } from './cockpit-app/cockpit-app.component';
import { ServerAppComponent } from './server-app/server-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavComponent } from './nav/nav.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DataTableAppComponent,
    TableForDistrictComponent,
    DataCardAppComponent,
    ExampleAppComponent,
    CockpitAppComponent,
    ServerAppComponent,
    NavComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'india', component: TableForDistrictComponent }
    ]),
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }
    )


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
