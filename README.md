# Angular Translate with ngx-translate


## Passos
#### baixar o ngx-translate/core e ngx-translate/http-loader
```bash
npm install --save ngx-translate/core ngx-translate/http-loader
```

#### step 2. Criar um classe com as configurações
```typescript
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: "en-us",
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactorys,
                deps: [HttpClient]
            }
        })
    ]
})
export class TranslatesModule {}
```

#### step 3. Adicone esse module no modulo principal
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      TranslatesModule // importando o a configuracao da traducao
    ]),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
```

#### Step 4. Agora basta importar o **TranslateModule** no module da sua pagina e adicionar no constructor o service TranslateService

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_translate';

  // private readonly availableLanguages = ['en-us', 'pt-br'];

  constructor(private translateService: TranslateService) {}

  changeLanguage(name: string): void {
    this.translateService.use(name)
    // this.translateService.get("pt-br").subscribe(res => console.log(res))
    // this.translateService.setTranslation("pt-br", )
  }
}

```





