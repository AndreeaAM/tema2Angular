import { Component , OnInit} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  listOfData: Item[] = [];
  isVisible = false;
  currentItem: Item | null = null;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.listOfData = [
      // Load your initial data here
    ];
  }

  openModal(): void {
    this.currentItem = null;
    this.isVisible = true;
  }

  editRow(item: Item): void {
    this.currentItem = item;
    this.isVisible = true;
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
