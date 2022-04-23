import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '../feature/feature.module';
@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    ToolbarComponent,
    NavbarComponent,
    FlexLayoutModule,
    RouterModule,
    FeatureModule
  ]
})
export class CoreModule { }
