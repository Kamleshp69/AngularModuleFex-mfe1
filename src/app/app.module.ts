import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { SplitPanelComponent } from './components/split-panel/split-panel.component';
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { FormsModule } from '@angular/forms';
import { KpPanelComponent } from './components/kp-panel/kp-panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    SplitPanelComponent,
    PanelContainerComponent,
    KpPanelComponent
  ],
  providers: [FormsModule, BrowserModule],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
