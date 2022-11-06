import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//First, the app-routing.module.ts file imports RouterModule and Routes so the application can have routing capability.
//The next import, HeroesComponent, gives the Router somewhere to go once you configure the routes.

//ROUTES
// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.

//The @NgModule metadata initializes the router and starts it listening for browser location changes.

//RouterModule.forRoot()
//The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

//Next, AppRoutingModule exports RouterModule to be available throughout the application.

//The colon : character in the path indicates that :id is a placeholder for a specific hero id.

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
