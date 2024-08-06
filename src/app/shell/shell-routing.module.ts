import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './const/shell-routes.const';

@NgModule({
  imports: [RouterModule.forRoot(shellRoutes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
