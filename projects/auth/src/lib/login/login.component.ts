import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '@coder-pioneers/core';
@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private alertService: AlertService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  showSuccessAlert() {
    if (isPlatformBrowser(this.platformId)) {
      this.alertService.success('تمت العملية بنجاح');
    }
  }
}
