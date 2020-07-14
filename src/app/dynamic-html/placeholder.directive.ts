import { Directive, ViewContainerRef, Input, TemplateRef } from "@angular/core";

@Directive({
    selector:'[view]'
})
export class PlaceholderDirective{

    constructor(public viewContainerRef: ViewContainerRef){}
}