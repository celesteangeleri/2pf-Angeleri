import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FeatureModule } from './feature/feature.module';
import { CursosRoutingModule } from './feature/components/cursos/cursos-routing.module';
import { StudentAbmModule } from './feature/components/student-abm/student-abm.module';
import { StudentFormRoutingModule } from './feature/components/student-form/student-form-routing.module';
import { StudentAbmRoutingModule } from './feature/components/student-abm/student-abm-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosRoutingModule,
   StudentAbmRoutingModule,
   StudentFormRoutingModule,
    CoreModule,
    FeatureModule,
    SharedModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
