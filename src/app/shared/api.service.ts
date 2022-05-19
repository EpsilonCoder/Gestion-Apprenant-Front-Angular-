import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postApprenant(data: any) {
    return this.http.post<any>("http://localhost:8080/save", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getApprenant() {
    return this.http.get<any>("http://localhost:8080/users")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateApprenant(data: any, id: number) {
    return this.http.put<any>("http://localhost:8080/update" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteApprenant(id: number) {
    return this.http.delete<any>("http://localhost:8080/delete" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
