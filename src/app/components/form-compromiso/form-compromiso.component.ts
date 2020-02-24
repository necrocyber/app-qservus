import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from'sweetalert2';

// Services
import { FormCompromisoService } from '../../services/form-compromiso.service';

@Component({
  selector: 'app-form-compromiso',
  templateUrl: './form-compromiso.component.html',
  styleUrls: ['./form-compromiso.component.css']
})
export class FormCompromisoComponent implements OnInit {

  constructor(
    private services: FormCompromisoService,
    private router: Router
    ) { }

  ngOnInit() {}

  onSubmit(registerForm: NgForm) {
    this.services.createCompromiso(registerForm.value).subscribe(
      (data: any) => {
        if(data.status == 'ok') {
          // Levantamos swal para generar la confirmación que se ha creado un nuevo compromiso
          swal.fire({
            title: 'Buen trabajo',
            text: "El compromiso esta creado!",
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.value) {
              registerForm.reset();
              this.router.navigate(['/']);
            }
          })
          
        }
      }
    )
  }

}
