import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shell/shell.module').then((m) => m.ShellModule),
  },
  {
    path: 'emission-factor',
    loadChildren: () =>
      import('./emission-factor/emission-factor.module').then(
        (m) => m.EmissionFactorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
