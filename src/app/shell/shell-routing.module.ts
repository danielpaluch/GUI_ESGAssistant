import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'emission-factor',
    loadChildren: () =>
      import('../emission-factor/emission-factor.module').then(
        (m) => m.EmissionFactorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
