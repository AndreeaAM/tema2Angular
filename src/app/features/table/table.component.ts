import { Component , OnInit} from '@angular/core';
import { Item } from '../item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private router: Router) {}
  listOfData: Item[] = [];
  isVisible = false;
  currentItem: Item | null = null;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.listOfData = [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "address": "1234 Main St"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "age": 28,
        "email": "jane.smith@example.com",
        "phone": "0987654321",
        "address": "5678 Elm St"
      },
      {
        "id": 3,
        "name": "Michael Johnson",
        "age": 45,
        "email": "michael.johnson@example.com",
        "phone": "5551234567",
        "address": "9101 Maple Ave"
      },
      {
        "id": 4,
        "name": "Emily Brown",
        "age": 29,
        "email": "emily.brown@example.com",
        "phone": "9876543210",
        "address": "2468 Oak Blvd"
      },
      {
        "id": 5,
        "name": "David Wilson",
        "age": 37,
        "email": "david.wilson@example.com",
        "phone": "1230987654",
        "address": "1357 Pine St"
      },
      {
        "id": 6,
        "name": "Sarah Taylor",
        "age": 31,
        "email": "sarah.taylor@example.com",
        "phone": "3216549870",
        "address": "3698 Cedar Ln"
      },
      {
        "id": 7,
        "name": "Christopher Martinez",
        "age": 40,
        "email": "chris.martinez@example.com",
        "phone": "7894561230",
        "address": "7410 Birch Rd"
      },
      {
        "id": 8,
        "name": "Amanda Johnson",
        "age": 27,
        "email": "amanda.johnson@example.com",
        "phone": "4567890123",
        "address": "8523 Willow Ln"
      },
      {
        "id": 9,
        "name": "Daniel Davis",
        "age": 34,
        "email": "daniel.davis@example.com",
        "phone": "6543210987",
        "address": "9753 Spruce St"
      },
      {
        "id": 10,
        "name": "Jessica White",
        "age": 25,
        "email": "jessica.white@example.com",
        "phone": "9870123456",
        "address": "6321 Birch Ave"
      }                                                      
    ];
  }

  openModal(): void {
    this.currentItem = null;
    this.isVisible = true;
    console.log('openModal');
    this.router.navigateByUrl('/features/modal')
  }

  editRow(item: Item): void {
    this.currentItem = item;
    this.isVisible = true;
    this.router.navigateByUrl('/features/modal')
  }

  handleSave(item: Item): void {
    if (this.currentItem) {
      // Edit logic
      const index = this.listOfData.findIndex(i => i.id === (this.currentItem?.id));
      if (index !== -1) {
        this.listOfData[index] = item;
      }
    } else {
      // Add logic
      item.id = this.listOfData.length + 1;
      this.listOfData.push(item);
    }
    this.isVisible = false;
  }

  deleteRow(id: number): void {
    this.listOfData = this.listOfData.filter(item => item.id !== id);
  }
}
