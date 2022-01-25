import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/dataTransfer/data-transfer.service';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(private dataService: DataTransferService ) { }

  ngOnInit(): void {
    this.dataService.getModels().subscribe((data: any) => {
      this.models = data[0].Models;
      console.log(data[0].Models);
    })
  }

  models:any;

  selectedModel:any;
  selectModel(model:any){
    this.selectedModel=model;
    this.dataService.model(model);
  }

}
