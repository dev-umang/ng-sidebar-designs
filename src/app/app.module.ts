import { SingleMenuComponent } from './Components/single-menu/single-menu.component';
import { BottomRightSidebarComponent } from './pages/components/bottom-right-sidebar/bottom-right-sidebar.component';
import { BottomLeftSidebarComponent } from './pages/components/bottom-left-sidebar/bottom-left-sidebar.component';
import { TopRightSidebarComponent } from './pages/components/top-right-sidebar/top-right-sidebar.component';
import { TopLeftSidebarComponent } from './pages/components/top-left-sidebar/top-left-sidebar.component';
import { FullpageSidebarComponent } from './pages/components/fullpage-sidebar/fullpage-sidebar.component';
import { BottomSidebarComponent } from './pages/components/bottom-sidebar/bottom-sidebar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftSidebarComponent } from './pages/components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './pages/components/right-sidebar/right-sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonBoxComponent } from './pages/components/button-box/button-box.component';
import { TopSidebarComponent } from './pages/components/top-sidebar/top-sidebar.component';
import { LargeMenuComponent } from './Components/large-menu/large-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ButtonBoxComponent,
    TopSidebarComponent,
    BottomSidebarComponent,
    FullpageSidebarComponent,
    TopLeftSidebarComponent,
    TopRightSidebarComponent,
    BottomLeftSidebarComponent,
    BottomRightSidebarComponent,
    SingleMenuComponent,
    LargeMenuComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
