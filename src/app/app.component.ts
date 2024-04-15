import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

// import * as PTBR from "../assets/i18n/pt-br.json";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, TranslateModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_translate';

  // private readonly availableLanguages = ['en-us', 'pt-br'];

  constructor(private translateService: TranslateService) {
    // this.translateService.addLangs(this.availableLanguages);
    // this.translateService.defaultLang('en-us')
    // this.translateService.

  }

  changeLanguage(name: string): void {
    this.translateService.use(name)
    // this.translateService.get("pt-br").subscribe(res => console.log(res))
    // this.translateService.setTranslation("pt-br", )
  }
}
