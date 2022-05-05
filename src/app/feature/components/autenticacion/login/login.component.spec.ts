import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import {RouterTestingModule} from "@angular/router/testing";
describe("LoginComponent", () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach( async() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientModule, RouterTestingModule],
        })
        .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("componente creado", () => {
        expect(component).toBeTruthy();
    })
    it('formulario valido',() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();

        let email = component.formulario.controls['email'];
        let password = component.formulario.controls['password'];
        email.setValue('Vince41@hotmail.com');
        password.setValue('password 1');
        expect(component.formulario.valid).toBeTrue();
    });

})