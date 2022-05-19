import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashbord.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashbord',
  templateUrl: './employee-dashbord.component.html',
  styleUrls: ['./employee-dashbord.component.css']
})
export class EmployeeDashbordComponent implements OnInit {
  formValue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData !: any;
  constructor(private formbilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbilder.group({
      firstname: [''],
      lastname: [''],
      age: [''],
      occupation: ['']
    })
    this.getApprenant();
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.age = this.formValue.value.age;
    this.employeeModelObj.occupation = this.formValue.value.occupation;

    this.api.postApprenant(this.employeeModelObj)
      .subscribe(res => {
        console.log(res);
        alert("");

      },
        error => {
          alert("Apprenant ajouté avec Succes");
          this.formValue.reset();
        })

  }

  getApprenant() {
    this.api.getApprenant()
      .subscribe(res => {
        this.employeeData = res;
      })

  }
}
