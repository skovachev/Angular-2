import { ViewContainerRef, TemplateRef } from "@angular/core";

export class View {
  constructor(
      private _viewContainerRef: ViewContainerRef, private _templateRef: TemplateRef<Object>) {}

  create(): void { this._viewContainerRef.createEmbeddedView(this._templateRef); }

  destroy(): void { this._viewContainerRef.clear(); }
}