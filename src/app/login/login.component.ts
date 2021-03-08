import { Component } from "@angular/core";

@Component({
    selector:  'app-login',
    template:  '<h3>Logowanie</h3><p>{{ descripttion }}</p>'
})
export class  LoginComponent {
    public description = 'Podaj dane autorzacyjne'
}