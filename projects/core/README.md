# CoderPioneers Core Library

<p align="center">
  <img src="path-to-your-logo.png" alt="CoderPioneers Core Library" width="200"/>
  <br>
  <i>A powerful Angular utility library for modern web applications</i>
  <br>
</p>

<p align="center">
  <a href="#english">English</a> |
  <a href="#arabic">العربية</a> |
  <a href="#turkish">Türkçe</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@coder-pioneers/core"><img src="https://img.shields.io/npm/v/@coder-pioneers/core.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@coder-pioneers/core"><img src="https://img.shields.io/npm/dm/@coder-pioneers/core.svg" alt="npm downloads"></a>
  <a href="https://github.com/your-repo/LICENSE"><img src="https://img.shields.io/github/license/your-repo.svg" alt="license"></a>
</p>

---

<h1 id="english">English</h1>

## 📋 Overview

CoderPioneers Core is a comprehensive Angular utility library providing essential services and components for modern web applications. Built with Angular 18.0.6, it offers a robust foundation for rapid application development.

## ⭐ Key Features

- **🔔 Alert Service**: Advanced notification system with multiple types and customization options
- **🎨 UI Components**: Ready-to-use, customizable UI components
- **🧪 Testing Utilities**: Comprehensive testing setup with Karma
- **🔧 Development Tools**: Enhanced development workflow tools

## 🚀 Installation

```bash
npm install @coder-pioneers/core
```

## 📖 Usage

### Alert Service

```typescript
import { AlertService } from '@coder-pioneers/core';

@Component({
  // ...
})
export class YourComponent {
  constructor(private alertService: AlertService) {}
  
  showNotification() {
    this.alertService.success('Operation completed successfully!');
    // Other methods: error(), warning(), info()
  }
}
```

## 🛠️ Development

### Generate Components

```bash
ng generate component my-component --project core
```

### Generate Services

```bash
ng generate service my-service --project core
```

## 🏗️ Building

```bash
ng build core
```

## 📦 Publishing

```bash
cd dist/core
npm publish
```

---

<h1 id="arabic">العربية</h1>

## 📋 نظرة عامة

مكتبة CoderPioneers Core هي مكتبة أدوات Angular شاملة توفر خدمات ومكونات أساسية لتطبيقات الويب الحديثة. تم بناؤها باستخدام Angular 18.0.6، وتوفر أساسًا قويًا للتطوير السريع للتطبيقات.

## ⭐ المميزات الرئيسية

- **🔔 خدمة التنبيهات**: نظام إشعارات متقدم مع أنواع متعددة وخيارات تخصيص
- **🎨 مكونات واجهة المستخدم**: مكونات جاهزة للاستخدام وقابلة للتخصيص
- **🧪 أدوات الاختبار**: إعداد اختبار شامل مع Karma
- **🔧 أدوات التطوير**: أدوات محسنة لسير عمل التطوير

## 🚀 التثبيت

```bash
npm install @coder-pioneers/core
```

## 📖 الاستخدام

### خدمة التنبيهات

```typescript
import { AlertService } from '@coder-pioneers/core';

@Component({
  // ...
})
export class YourComponent {
  constructor(private alertService: AlertService) {}
  
  showNotification() {
    this.alertService.success('تمت العملية بنجاح!');
    // الدوال الأخرى: error(), warning(), info()
  }
}
```

## 🛠️ التطوير

### إنشاء المكونات

```bash
ng generate component my-component --project core
```

### إنشاء الخدمات

```bash
ng generate service my-service --project core
```

---

<h1 id="turkish">Türkçe</h1>

## 📋 Genel Bakış

CoderPioneers Core, modern web uygulamaları için temel hizmetler ve bileşenler sağlayan kapsamlı bir Angular yardımcı program kütüphanesidir. Angular 18.0.6 ile oluşturulmuş olup, hızlı uygulama geliştirme için sağlam bir temel sunar.

## ⭐ Temel Özellikler

- **🔔 Uyarı Servisi**: Çoklu tip ve özelleştirme seçenekleriyle gelişmiş bildirim sistemi
- **🎨 UI Bileşenleri**: Kullanıma hazır, özelleştirilebilir UI bileşenleri
- **🧪 Test Araçları**: Karma ile kapsamlı test kurulumu
- **🔧 Geliştirme Araçları**: Geliştirilmiş geliştirme iş akışı araçları

## 🚀 Kurulum

```bash
npm install @coder-pioneers/core
```

## 📖 Kullanım

### Uyarı Servisi

```typescript
import { AlertService } from '@coder-pioneers/core';

@Component({
  // ...
})
export class YourComponent {
  constructor(private alertService: AlertService) {}
  
  showNotification() {
    this.alertService.success('İşlem başarıyla tamamlandı!');
    // Diğer metodlar: error(), warning(), info()
  }
}
```

## 🛠️ Geliştirme

### Bileşen Oluşturma

```bash
ng generate component my-component --project core
```

### Servis Oluşturma

```bash
ng generate service my-service --project core
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ by CoderPioneers Team</p>
