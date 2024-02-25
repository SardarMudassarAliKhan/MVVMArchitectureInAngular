import { Component, OnInit } from '@angular/core'; // Import OnInit
import { AddToDoTask } from '../../core/Models/addtask';
import { ManagerService } from '../managerservice/manager.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dash-board',
  templateUrl: './manager-dash-board.component.html',
  styleUrls: ['./manager-dash-board.component.css'] // Corrected styleUrl to styleUrls
})
export class ManagerDashBoardComponent implements OnInit { // Implemented OnInit

  dateTime = new Date()
  addTaskForm: AddToDoTask = {
    createdAt: this.dateTime.toString(),
    updatedAt: this.dateTime.toString(),
    userName: '',
    userId: '',
    title: '',
    description: '',
    isCompleted: false
  };

  TaskDetails: any = [];

  constructor(
    private managerService: ManagerService, // Renamed managerservice to managerService to match naming convention
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetTaskList();
  }

  AddTask(): void {
    debugger; // Added return type void
    if (this.addTaskForm.title === '' || this.addTaskForm.description === '') {
      alert('Please fill all the fields');
      return;
    } else {
      this.managerService.Addtask(this.addTaskForm).subscribe(
        response => {
          debugger;
          Swal.fire('Success', 'Task added successfully', 'success').then(() => {
            this.router.navigate(['/manager/ManagerDashBoard']);
          });
          Swal.close();
        },
        error => {
          Swal.fire('Error', 'Task not added', 'error');
          console.log(error);
        }
      );
    }
  }

  GetTaskList(): void {
    debugger;
    this.managerService.GetTaskList().subscribe(
      response => {
        debugger;
        this.TaskDetails = response;
      },
      error => {
        Swal.fire('Error', 'Task not added', 'error');
        console.log(error);
      }
    );
  }
}
