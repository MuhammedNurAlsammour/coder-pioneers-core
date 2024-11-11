# Core Library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Features

- **Alert Service**: Built-in alert service for handling application notifications
- **Component Generation**: Quick scaffolding for new components
- **Comprehensive Testing**: Unit testing setup with Karma

## Code Scaffolding

### Generate Basic Components
```bash
ng generate component component-name --project core
```

### Generate Alert Service
```bash
ng generate service alert --project core
```

Example usage of Alert Service:
```typescript
import { AlertService } from './services/alert.service';

export class YourComponent {
  constructor(private alertService: AlertService) {}
  
  showAlert() {
    this.alertService.show('Operation successful!', 'success');
  }
}
```

You can also generate other elements:
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module --project core
```

> Note: Don't forget to add `--project core` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build core` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

1. Build your library:
   ```bash
   ng build core
   ```
2. Navigate to dist folder:
   ```bash
   cd dist/core
   ```
3. Publish to npm:
   ```bash
   npm publish
   ```

## Running Unit Tests

Run `ng test core` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# المكتبة الأساسية

تم إنشاء هذه المكتبة باستخدام [Angular CLI](https://github.com/angular/angular-cli) الإصدار 17.3.0.

## المميزات

- **خدمة التنبيهات**: خدمة تنبيهات مدمجة للتعامل مع إشعارات التطبيق
- **إنشاء المكونات**: إنشاء سريع لهياكل المكونات الجديدة
- **اختبار شامل**: إعداد اختبارات الوحدة مع Karma

## هيكلة الكود

### إنشاء المكونات الأساسية
```bash
ng generate component component-name --project core
```

### إنشاء خدمة التنبيهات
```bash
ng generate service alert --project core
```

مثال على استخدام خدمة التنبيهات:
```typescript
import { AlertService } from './services/alert.service';

export class YourComponent {
  constructor(private alertService: AlertService) {}
  
  showAlert() {
    this.alertService.show('تمت العملية بنجاح!', 'success');
  }
}
```

يمكنك أيضًا إنشاء عناصر أخرى:
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module --project core
```

> ملاحظة: لا تنس إضافة `--project core` وإلا سيتم إضافته إلى المشروع الافتراضي في ملف `angular.json` الخاص بك.

## البناء

قم بتشغيل `ng build core` لبناء المشروع. سيتم تخزين ملفات البناء في مجلد `dist/`.

## النشر

1. قم ببناء المكتبة:
   ```bash
   ng build core
   ```
2. انتقل إلى مجلد dist:
   ```bash
   cd dist/core
   ```
3. النشر على npm:
   ```bash
   npm publish
   ```

## تشغيل اختبارات الوحدة

قم بتشغيل `ng test core` لتنفيذ اختبارات الوحدة عبر [Karma](https://karma-runner.github.io).

## المزيد من المساعدة

للحصول على مزيد من المساعدة حول Angular CLI، استخدم `ng help` أو قم بزيارة صفحة [نظرة عامة ومرجع أوامر Angular CLI](https://angular.io/cli).

---

# Çekirdek Kütüphane

Bu kütüphane, [Angular CLI](https://github.com/angular/angular-cli) sürüm 17.3.0 ile oluşturulmuştur.

## Özellikler

- **Uyarı Servisi**: Uygulama bildirimlerini yönetmek için yerleşik uyarı servisi
- **Bileşen Oluşturma**: Yeni bileşenler için hızlı iskelet yapı oluşturma
- **Kapsamlı Test**: Karma ile birim testi kurulumu

## Kod İskeleti Oluşturma

### Temel Bileşenleri Oluşturma
```bash
ng generate component component-name --project core
```

### Uyarı Servisini Oluşturma
```bash
ng generate service alert --project core
```

Uyarı Servisi kullanım örneği:
```typescript
import { AlertService } from './services/alert.service';

export class YourComponent {
  constructor(private alertService: AlertService) {}
  
  showAlert() {
    this.alertService.show('İşlem başarılı!', 'success');
  }
}
```

Diğer öğeleri de oluşturabilirsiniz:
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module --project core
```

> Not: `--project core` eklemesini unutmayın, aksi takdirde `angular.json` dosyanızdaki varsayılan projeye eklenecektir.

## Derleme

Projeyi derlemek için `ng build core` komutunu çalıştırın. Derleme çıktıları `dist/` dizininde saklanacaktır.

## Yayınlama

1. Kütüphanenizi derleyin:
   ```bash
   ng build core
   ```
2. Dist klasörüne gidin:
   ```bash
   cd dist/core
   ```
3. npm'de yayınlayın:
   ```bash
   npm publish
   ```

## Birim Testlerini Çalıştırma

[Karma](https://karma-runner.github.io) aracılığıyla birim testlerini çalıştırmak için `ng test core` komutunu kullanın.

## Daha Fazla Yardım

Angular CLI hakkında daha fazla yardım almak için `ng help` komutunu kullanın veya [Angular CLI Genel Bakış ve Komut Referansı](https://angular.io/cli) sayfasını ziyaret edin.
