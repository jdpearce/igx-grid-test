import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule
} from 'igniteui-angular';
import { IgxSparklineCoreModule } from 'igniteui-angular-charts/ES5/igx-sparkline-core-module';
import { IgxSparklineModule } from 'igniteui-angular-charts/ES5/igx-sparkline-module';
import { AppComponent } from './app.component';
import { GridBostonMarathonComponent } from './grid-boston-marathon/grid-boston-marathon.component';

@NgModule({
  declarations: [AppComponent, GridBostonMarathonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    HttpClientModule,
    IgxSparklineCoreModule,
    IgxSparklineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
