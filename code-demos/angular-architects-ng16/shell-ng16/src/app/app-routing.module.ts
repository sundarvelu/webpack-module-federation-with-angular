import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      // For typescript to not flag an unknown module import on this import
      // we need to tell typescript that the module does indeed exist (or rather,
      // it will exist when it's loaded at runtime).
      //
      // We do that by declaring the mfe1/my-feature-module on the
      // /angular-architects-ng16/shell-ng16/src/app/remote-modules.d.ts file
      import('mfe1/my-feature-module')
        .then((m) => m.MyFeatureModule)
        .catch((err) => console.error('Error lazy loading mfe1', err)),
  },
  {
    path:"payment",
    module:import('mfe1/payment')
    .then((m) => m.PaymentComponent).catch((err)=> console.log(`Error lazy loaded`))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
