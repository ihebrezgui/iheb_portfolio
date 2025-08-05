import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeroComponent } from './Components/hero/hero.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { BackgroundComponent } from './Components/background/background.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { EducationComponent } from './Components/education/education.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { WelcomeScreenComponent } from './Components/welcome-screen/welcome-screen.component';
import { ExperienceEducationComponent } from './Components/experience-education/experience-education.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    NavbarComponent,
    ProjectsComponent,
    SkillsComponent,
    BackgroundComponent,
    ExperienceComponent,
    EducationComponent,
    WelcomeComponent,
    WelcomeScreenComponent,
    ExperienceEducationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule // ✅ Add this here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
