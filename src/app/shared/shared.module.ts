import { NgModule } from "@angular/core";
import { ColorDirective } from "./color.directive";
import { PageNamePipe } from "./page-name.pipe";

@NgModule({
  declarations: [
   PageNamePipe,
   ColorDirective
  ],
  exports: [
    PageNamePipe,
    ColorDirective
  ]
})
export class ShareModule {

}