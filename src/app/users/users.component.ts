
import { Component ,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
  'Matricule',
  'FirstName',
  'LastName',
  'Email',
  'Address',
  'Phone',
  'Roles',
  'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog: MatDialog, private _userservice : UsersService ) {}
ngOnInit():void {
  this.getUserList();
}
deleteUser(Matricule : string){
  this._userservice.deleteUser(Matricule).subscribe({
    next : (res) => {   
      alert ('User deleted');
      this.getUserList();
    },
   error:console.log,
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
openEditUserForm(data : any) {
  const dialogRef =this._dialog.open(AddEditUserComponent,{
  data ,
});
dialogRef.afterClosed().subscribe({

  next: (val)=>{
    if (val){
      this.getUserList();
    }
  }

})
}
  openAddUserForm() {
  const dialogRef = this._dialog.open(AddEditUserComponent);
  dialogRef.afterClosed().subscribe({

    next: (val)=>{
      if (val){
        this.getUserList();
      }
    }

  })
}

getUserList(){
 this._userservice.getUserList().subscribe({
  next:(res)=>{ 
    console.log(res);
      
    this.dataSource  = new MatTableDataSource (res);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  },
 error:console.log,
 
});
} 
}
