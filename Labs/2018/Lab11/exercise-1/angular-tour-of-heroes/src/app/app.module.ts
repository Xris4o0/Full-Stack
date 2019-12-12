import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RemoveSpacesPipe,
    HeroDetailComponent,
    MessagesComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
