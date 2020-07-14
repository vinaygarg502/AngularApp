import { Injectable } from "@angular/core";
import { Students } from './mock-students';
import { Student } from './student.model';
import { Observable, of } from 'rxjs';

@Injectable({providedIn:'root'})
export class SortService{
    getStudents(): Observable<Student[]> {
        return of(Students);
      }

    ascendingOrder(key: string, flag: number, studentData: Student[]): Student[]{
        return studentData.sort((a,b)=>{
            if(a[key]>b[key]){
                return 1;
            }
            if(b[key]>a[key]){
                return -1;
            }
            return 0;
        })
    }
    descendingOrder(key: string, flag: number, studentData: Student[]): Student[]{
        return studentData.sort((a,b)=>{
            if(a[key]>b[key]){
                return -1;
            }
            if(b[key]>a[key]){
                return 1;
            }
            return 0;
        })
    }
}