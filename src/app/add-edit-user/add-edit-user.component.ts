
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})

export class AddEditUserComponent implements OnInit {
  roles: string[] = [
    'ROLE_ADMIN',
    'ROLE_USER',
    'ROLE_MODERATOR'
]
userForm :FormGroup;
constructor (private _fb: FormBuilder, private _userservice : UsersService,private _dialogRef:MatDialogRef <AddEditUserComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){
this.userForm=this._fb.group({
 firstName:'',
 lastName:'',
 email:'',
 address:'',
 phone:'',
 matricule:'',
 password :'' ,
 role : ''
})
}
ngOnInit(): void {
  this.userForm.patchValue(this.data);

}
onFormSubmit(){
  if (this.userForm.valid){
  if (this.data){
    this._userservice.EditUser(this.data.id,this.userForm.value).subscribe({
      next:(val:any)=>{
    alert('User detail update successfully');
    this._dialogRef.close(true);
      },
      error :(err:any)=>{
        console.error(err);
      },
    })
  }
  else {
    this._userservice.AddUser(this.userForm.value).subscribe({
      next:(val:any)=>{
    alert('User added successfully');
    this._dialogRef.close(true);
      },
      error :(err:any)=>{
        console.error(err);
      },
    })
  }
}
}
cl(){
  this._dialogRef.close();

}

}

