import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { SortService } from './sort.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
flag: number;
defaultKey: string;
originalData: Student[];
studentData: Student[];
  constructor(private sortService: SortService) { }
  
  ngOnInit(): void {
    this.flag=1;
    this.sortService.getStudents().subscribe(students=>{
      this.studentData = students;
      this.originalData = [...this.studentData];
    })
  }
  sortData(key: string, flag: number){
    this.flag=flag;

    if(this.defaultKey!==key){
        this.defaultKey=key;
        this.flag=1;
    }
    if(this.flag===1){
      this.flag++;
      this.studentData = this.sortService.ascendingOrder(this.defaultKey,this.flag, this.studentData);
    }
    else if(this.flag===2){
      this.flag++;
      this.studentData = this.sortService.descendingOrder(this.defaultKey, this.flag, this.studentData);
    }
    else{
      this.flag=1;
      this.studentData = [...this.originalData];
    }
  }
}
