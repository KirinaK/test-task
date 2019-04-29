import { Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';

import { AppTabeComponent } from '../app-tabe/app-tabe.component';

@Component({
  selector: 'app-app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.scss']
})
export class AppStartPageComponent {
  private overlayPosition: PositionStrategy;
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  public openTable(): void {
    const tableComponentPortal = new ComponentPortal(AppTabeComponent);
    this.addOverlayRef();
    this.overlayRef.attach(tableComponentPortal);
    this.overlayRef.backdropClick().subscribe(_ => this.close());
  }

  private addOverlayRef(): OverlayRef {
    this.overlayRef = this.overlay.create({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.getOverlayPosition(),
      hasBackdrop: true,
      backdropClass: 'dark-background',
      panelClass: 'tabe-preview'
    });

    return this.overlayRef;
  }

  private getOverlayPosition(): PositionStrategy {
    this.overlayPosition = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return this.overlayPosition;
  }

  private close(): void {
    this.overlayRef.dispose();
  }

}
