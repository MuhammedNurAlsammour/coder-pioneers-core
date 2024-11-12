# @coder-pioneers/auth

<p align="center">
  <a href="#english">English</a> |
  <a href="#arabic">العربية</a> |
  <a href="#turkish">Türkçe</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@coder-pioneers/auth"><img src="https://badge.fury.io/js/%40coder-pioneers%2Fauth.svg" alt="npm version"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

---

<h1 id="english">English</h1>

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Features

- 🔐 Secure authentication system
- 🎨 Customizable login/registration components
- 🔄 Token management
- 📱 Responsive design
- 🛡️ Route Guards for protected pages

## Installation

```bash
npm install @coder-pioneers/auth
```

## Quick Start

1. Add AuthModule to your app.module.ts:
```typescript
import { AuthModule } from '@coder-pioneers/auth';

@NgModule({
  imports: [
    AuthModule
  ]
})
export class AppModule { }
```

2. Use the login component in your template:
```html
<cp-auth-login></cp-auth-login>
```

## Services

### AuthService

Manages authentication operations:
```typescript
import { AuthService } from '@coder-pioneers/auth';

constructor(private authService: AuthService) {}

login(credentials: LoginCredentials) {
  this.authService.login(credentials).subscribe(
    response => console.log('Login successful')
  );
}
```

---

<h1 id="arabic">العربية</h1>

تم إنشاء هذه المكتبة باستخدام [Angular CLI](https://github.com/angular/angular-cli) الإصدار 17.3.0.

## المميزات

- 🔐 نظام مصادقة آمن
- 🎨 مكونات تسجيل الدخول/التسجيل قابلة للتخصيص
- 🔄 إدارة الرموز المميزة (Tokens)
- 📱 تصميم متجاوب
- 🛡️ حماية المسارات للصفحات المحمية

## التثبيت

```bash
npm install @coder-pioneers/auth
```

## البدء السريع

1. أضف AuthModule إلى ملف app.module.ts:
```typescript
import { AuthModule } from '@coder-pioneers/auth';

@NgModule({
  imports: [
    AuthModule
  ]
})
export class AppModule { }
```

2. استخدم مكون تسجيل الدخول في القالب:
```html
<cp-auth-login></cp-auth-login>
```

## الخدمات

### AuthService

إدارة عمليات المصادقة:
```typescript
import { AuthService } from '@coder-pioneers/auth';

constructor(private authService: AuthService) {}

login(credentials: LoginCredentials) {
  this.authService.login(credentials).subscribe(
    response => console.log('تم تسجيل الدخول بنجاح')
  );
}
```

---

<h1 id="turkish">Türkçe</h1>

Bu kütüphane [Angular CLI](https://github.com/angular/angular-cli) sürüm 17.3.0 ile oluşturulmuştur.

## Özellikler

- 🔐 Güvenli kimlik doğrulama sistemi
- 🎨 Özelleştirilebilir giriş/kayıt bileşenleri
- 🔄 Token yönetimi
- 📱 Responsive tasarım
- 🛡️ Korumalı sayfalar için Route Guard'lar

## Kurulum

```bash
npm install @coder-pioneers/auth
```

## Hızlı Başlangıç

1. AuthModule'ü app.module.ts dosyanıza ekleyin:
```typescript
import { AuthModule } from '@coder-pioneers/auth';

@NgModule({
  imports: [
    AuthModule
  ]
})
export class AppModule { }
```

2. Login bileşenini şablonunuzda kullanın:
```html
<cp-auth-login></cp-auth-login>
```

## Hizmetler

### AuthService

Kimlik doğrulama işlemlerini yönetir:
```typescript
import { AuthService } from '@coder-pioneers/auth';

constructor(private authService: AuthService) {}

login(credentials: LoginCredentials) {
  this.authService.login(credentials).subscribe(
    response => console.log('Giriş başarılı')
  );
}
```

---

## Development

### Generate Components

```bash
ng generate component component-name --project auth
```

You can also generate:
- Directive: `ng generate directive`
- Pipe: `ng generate pipe`
- Service: `ng generate service`
- Class: `ng generate class`
- Guard: `ng generate guard`
- Interface: `ng generate interface`
- Enum: `ng generate enum`

> Note: Don't forget to add `--project auth` or it will be added to the default project in `angular.json`.

### Build

```bash
ng build auth
```

Build artifacts will be stored in the `dist/` directory.

### Running unit tests

To execute the unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test auth
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

MuhammedNurAlsammour - GitHub: [@MuhammedNurAlsammour](https://github.com/MuhammedNurAlsammour)

## Acknowledgments

- Angular team for their great framework
- All contributors who helped develop this library

---

<p align="center">Made with ❤️ by CoderPioneers Team</p>
