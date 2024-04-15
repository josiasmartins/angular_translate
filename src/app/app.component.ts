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
