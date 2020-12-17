import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-persona-juridica',
  templateUrl: './persona-juridica.component.html',
  styleUrls: ['./persona-juridica.component.less']
})
export class PersonaJuridicaComponent implements OnInit {


  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  somePlaceholder = 'Documento';
  document = 'Seleccione';
  residencia = 'Seleccione';
  picker;

  public selection: string;
  valor1 = 'Seleccione';

  favoriteSeason: string;
  seasons: string[] = ['Si', 'No'];


  // tslint:disable-next-line: variable-name
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.firstFormGroupPerson();
    this.secondFormGroupPerson();
    this.thirdFormGroupPerson();
  }

  firstFormGroupPerson(){

    this.firstFormGroup = this._formBuilder.group({
      fecha: ['', Validators.required],
      razonSocialCertificado: ['', [Validators.required, Validators.minLength(3)]],
      tipoDocumento: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      residencia: ['', Validators.required],
      pais: ['', [Validators.required, Validators.pattern(/(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/), Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.pattern(/(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/), Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      telefono:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      correoElectronico: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      nombreReprelegal: [null, [Validators.required, Validators.pattern(/(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/), Validators.minLength(3)]],
      identificacionReprelegal: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      operacionesInternacionales: ['', Validators.required],
      manejoRecursospublicos: ['', Validators.required],
      operacionInternacional: ['', Validators.required],
      tipoOperacionInternacional: ['', Validators.required],
    });

  }

  secondFormGroupPerson() {

    this.secondFormGroup = this._formBuilder.group({
      regimenSimpletributacion: ['', Validators.required],
      actividadDian: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^([0-9])*$/)]],
      actividadIca: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^([0-9])*$/)]],
      actividadIcatarifa: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^([0-9])*$/)]],
      responsabilidadIva: ['', Validators.required],
      banco: [null, [Validators.required, Validators.pattern(/(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/), Validators.minLength(3)]],
      numeroCuenta: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^([0-9])*$/)]],
      modalidad: ['', Validators.required],
      paisBanco: [null, [Validators.required, Validators.pattern(/(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/), Validators.minLength(3)]],
      codigoSwift: ['', Validators.required],
    });
  }

  thirdFormGroupPerson() {

    this.thirdFormGroup = this._formBuilder.group({
      cod: ['', Validators.required],
    });
  }



  selectDocument(document: string): void {

    if (document === 'Otro') {
      alert('entro');

      this.somePlaceholder = 'Otro';
      this.firstFormGroup.controls.documento.setValidators(null);

    } else if (document === 'Nit') {

      alert('entro Nit');

      this.somePlaceholder = 'Documento';
      this.firstFormGroup.controls.documento.setValidators(null);

    } else {

      this.firstFormGroup.controls.documento.setValidators([Validators.required]);
      this.firstFormGroup.controls.documento.setValidators([Validators.required]);


    }

  }

  selectHome(document): void {

  }

  clickEventHandler(): void {

    alert('Test');

  }

  onSubmitTratamientoDatos(): void {

    console.log();

    if (this.favoriteSeason === 'Si'  || this.favoriteSeason === 'No' ) {

      swal({
          title: '',
          text: 'Registro realizado correctamente',
          icon: 'success',
        });

    } else {
      swal({
        title: '',
        text: 'Debe seleccionar si es una Persona Expuesta Públicamente (PEP)',
        icon: 'error',
      });
    }


  }



}


