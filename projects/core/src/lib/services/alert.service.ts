import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Notyf, NotyfEvent, NotyfHorizontalPosition, NotyfVerticalPosition } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private notyf?: Notyf;
  private config?: AlertConfig;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.config = new AlertConfig();
    if (this.isBrowser) {
      this.initialize();
    }
  }

  private initialize() {
    if (!this.isBrowser) return;

    this.notyf = new Notyf({
      duration: this.config?.duration,
      position: {
        x: this.config?.positionX as NotyfHorizontalPosition,
        y: this.config?.positionY as NotyfVerticalPosition,
      },
      dismissible: true,
      types: [
        {
          type: 'warning',
          background: 'orange',
          icon: {
            className: 'bi bi-exclamation-diamond-fill',
            tagName: 'i',
            color: 'white'
          }
        },
        {
          type: 'info',
          background: '#2E9AFE',
          icon: {
            className: 'bi bi-info-circle-fill',
            tagName: 'i',
            color: 'white'
          }
        }
      ]
    });
  }

  success(message: string, callBack?: () => void, duration?: number) {
    if (!this.isBrowser) return;

    this.notyf?.open({
      type: 'success',
      message,
      duration: duration || this.config?.duration,
      position: {
        x: 'right',
        y: 'bottom'
      }
    })?.on(NotyfEvent.Click, ({ target, event }) => {
      callBack?.();
    });
  }

  error(message: string, callBack?: () => void) {
    if (!this.isBrowser) return;

    this.notyf?.open({
      type: 'error',
      message,
      position: {
        x: 'right',
        y: 'top'
      }
    })?.on(NotyfEvent.Click, ({ target, event }) => {
      callBack?.();
    });
  }

  warning(message: string, callBack?: () => void) {
    if (!this.isBrowser) return;

    this.notyf?.open({
      type: 'warning',
      message
    })?.on(NotyfEvent.Click, ({ target, event }) => {
      callBack?.();
    });
  }

  info(message: string, callBack?: () => void, duration?: number) {
    if (!this.isBrowser) return;

    this.notyf?.open({
      type: 'info',
      message,
      duration: duration || this.config?.duration
    })?.on(NotyfEvent.Click, ({ target, event }) => {
      callBack?.();
    });
  }

  dismissAll() {
    if (!this.isBrowser) return;
    this.notyf?.dismissAll();
  }

  setConfig(config: AlertConfig) {
    this.config = config;
    if (this.isBrowser) {
      this.initialize();
    }
  }

  resetConfig() {
    this.config = new AlertConfig();
    if (this.isBrowser) {
      this.initialize();
    }
  }
}

export class AlertConfig {
  duration?: number;
  positionY?: AlertPosition;
  positionX?: AlertPosition;

  constructor(duration?: number, positionY?: AlertPosition, positionX?: AlertPosition) {
    this.duration = duration ?? 2500;
    this.positionY = positionY ?? AlertPosition.Bottom;
    this.positionX = positionX ?? AlertPosition.Right;
  }
}

export enum AlertPosition {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  Center = 'center'
}
