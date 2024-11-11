# @coder-pioneers/auth

Bu kütüphane [Angular CLI](https://github.com/angular/angular-cli) sürüm 17.3.0 ile oluşturulmuştur.

[![npm version](https://badge.fury.io/js/%40coder-pioneers%2Fauth.svg)](https://www.npmjs.com/package/@coder-pioneers/auth)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
<lib-login></lib-login>
```

## Geliştirme

### Bileşen Oluşturma

Yeni bir bileşen oluşturmak için şu komutu çalıştırın:
```bash
ng generate component component-name --project auth
```

Ayrıca şunları da oluşturabilirsiniz:
- Directive: `ng generate directive`
- Pipe: `ng generate pipe`
- Service: `ng generate service`
- Class: `ng generate class`
- Guard: `ng generate guard`
- Interface: `ng generate interface`
- Enum: `ng generate enum`

> Not: `--project auth` parametresini eklemeyi unutmayın, aksi takdirde `angular.json` dosyasındaki varsayılan projeye eklenecektir.

### Derleme

Projeyi derlemek için:
```bash
ng build auth
```
Derleme çıktıları `dist/` dizininde saklanacaktır.

### Yayınlama

Kütüphaneyi derledikten sonra:
```bash
cd dist/auth
npm publish
```

### Unit Testleri Çalıştırma

[Karma](https://karma-runner.github.io) ile unit testleri çalıştırmak için:
```bash
ng test auth
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

## Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch'inizi oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'e push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

## Daha Fazla Yardım

Angular CLI hakkında daha fazla yardım için `ng help` komutunu kullanın veya [Angular CLI Genel Bakış ve Komut Referansı](https://angular.io/cli) sayfasını ziyaret edin.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## Yazar

MuhammedNurAlsammour
- GitHub: [@MuhammedNurAlsammour](https://github.com/MuhammedNurAlsammour)

## Teşekkürler

- Harika framework'leri için Angular ekibine
- Bu kütüphaneyi geliştirmeye yardımcı olan tüm katkıda bulunanlara
