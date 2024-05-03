import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: "app-login",
    templateUrl: './login.component.html',
    styleUrl :"./login.component.scss"
})
export class LoginComponent {
    rememberMe: boolean = false;

    constructor(private layoutService: LayoutService) {}

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }
}
