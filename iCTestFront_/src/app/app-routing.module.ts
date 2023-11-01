import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateScreenComponent } from './component/template-screen/template-screen.component';
import { TemplatizationComponent } from './component/templatization/templatization.component';

const routes: Routes = [
  { path: '', redirectTo: '/templatization', pathMatch: 'full' },
  { path: 'templatization', component: TemplatizationComponent },
  { path: 'templatescreen', component: TemplateScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
