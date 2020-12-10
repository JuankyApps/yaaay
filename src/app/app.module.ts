import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./main/home/home.component";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { ChangelogComponent } from "./main/changelog/changelog.component";
import { AboutComponent } from "./main/about/about.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptLocalizeModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ChangelogComponent,
    AboutComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
