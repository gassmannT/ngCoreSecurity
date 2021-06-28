import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizationGuard } from './shared/services/authorization.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'weather',
    component: WeatherComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
