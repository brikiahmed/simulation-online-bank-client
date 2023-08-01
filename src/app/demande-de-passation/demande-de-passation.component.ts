import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassationService } from '../passation.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demande-de-passation',
  templateUrl: './demande-de-passation.component.html',
  styleUrls: ['./demande-de-passation.component.css']
})
export class DemandeDePassationComponent {
  passation = { ref: '', designation: '', fonction: '', dimension: '' };
  passations: any[] = [];
  demandeForm: FormGroup;

  constructor(private router: Router,private demandeService: PassationService,     private _fb: FormBuilder,
    ) {
    this.demandeForm = this._fb.group({
      designation: '',
      dimension: '',
      fonction: '',
      reference: '',
    });
  }

  onFormSubmit() {    
    this.demandeService.Addpassation(this.demandeForm.value).subscribe({
      next: (val: any) => {
        alert('User added successfully');
      },
      error: (err: any) => {
        console.error(err);
      }
    });
    this.router.navigate(['/gerer-demandes'], { state: { passations: this.passations } });
  }
}
