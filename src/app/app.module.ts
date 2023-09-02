import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetSectionComponent } from './greet-section/greet-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetSectionComponent,
    SkillsSectionComponent,
    WorkSectionComponent,
    AboutMeSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
