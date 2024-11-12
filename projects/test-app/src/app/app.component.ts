import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '@coder-pioneers/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginComponent
  ],
  template: `
    <div>
      <h1>Test Application</h1>
      <lib-login></lib-login>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'test-app';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('We are in the browser, can access document');
      // Browser-specific code here
    }
  }
}
