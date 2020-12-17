import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';



@Component({
  selector: 'app-crearproveedores',
  templateUrl: './crearproveedores.component.html',
  styleUrls: ['./crearproveedores.component.less']
})
export class CrearproveedoresComponent implements OnInit {


  legalPerson: FormGroup;
  naturalPerson: FormGroup;
  numeroPolizaReadonly = false;

  form_fsfb = true;
  legalPersonform = false;

  defaultElevation = 2;
  raisedElevation = 8;
  selected = 'Persona Natural';
  document = 'Seleccione';
  documento = true;
  somePlaceholder = 'Documento';


  constructor(private fb: FormBuilder) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.filterCambioCitas();
    this.naturalPersonFilter();

  }

   filterCambioCitas(): void {

    this.legalPerson = this.fb.group({
      tipoTercero: [''],
      nombres: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(3)]],
      correoAprobador: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      tipoDocumento: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9), Validators.pattern(/^([0-9])*$/)]],
      tipoProveedor: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    });

  }

  naturalPersonFilter(): void{

    this.naturalPerson = this.fb.group({
      razonSocial: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(4)]],
      correoAprobador: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      tipoDocumento: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(9), Validators.pattern(/^([0-9])*$/)]],
      tipoProveedor: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    });

  }


  onSubmit(): void{

    if (!this.legalPerson.invalid){

      swal({
        title: '',
        text: 'Registro realizado correctamente.',
        icon: 'success',
      });

    } else {

      swal({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
      });

    }

  }

  onSubmitNaturalPerson(): void{

    if ( !this.naturalPerson.valid  ) {

      swal({
        title: '',
        text: 'Verifique los datos ingresados',
        icon: 'error',
      });

    } else {

      swal({
        title: '',
        text: 'Registro realizado correctamente',
        icon: 'success',
      });
    }

  }


  close(): void{

  }


  select(tipoTercero: string): void{

    if (tipoTercero === 'Persona Natural') {
      this.legalPersonform = false;
      this.form_fsfb = true;
      this.naturalPerson.reset();
      this.legalPerson.reset();
      this.somePlaceholder = 'Documento';
    } else {
      this.form_fsfb = false;
      this.legalPersonform = true;
      this.naturalPerson.reset();
      this.legalPerson.reset();
      this.somePlaceholder = 'Documento';
    }

  }

  selectDocument(document: string): void {

    if (document === 'Otro') {

      this.somePlaceholder = 'Otro';
      this.legalPerson.controls.documento.setValidators(null);
      this.naturalPerson.controls.documento.setValidators(null);

    } else {

      this.legalPerson.controls.documento.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(9), Validators.pattern(/^([0-9])*$/)]);
      this.naturalPerson.controls.documento.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(9), Validators.pattern(/^([0-9])*$/)]);

    }

  }

}
