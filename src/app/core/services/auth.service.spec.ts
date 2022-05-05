import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { Usuario } from '../models/usuario';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(
    'el login funciona',
    inject([HttpTestingController, AuthService],
      (httpMock: HttpTestingController, service: AuthService) => {
        const mockUsiario:Usuario[]= [{
          id: "1",
          nombre: 'Janice',
          apellido: 'Nolan',
          email:'Vince41@hotmail.com',
          password: 'password 1',
          rol: 'rol 1'
        }] ;
        service.login('Vince41@hotmail.com', 'password 1').subscribe((usuarioLogueado)=>{
          console.log(usuarioLogueado);
          expect(usuarioLogueado).toEqual(mockUsiario);         
        })
        const req = httpMock.expectOne({
          method: 'GET',
          url: 'https://625eedb1873d6798e2b063f8.mockapi.io/usuario'
        });
        req.flush(mockUsiario);
      }
    )
  )
});
