import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/dataTransfer/data-transfer.service';
@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.css']
})
export class SurveyPageComponent implements OnInit {
  bandValueSelectedForVerticalInt: any;
  bandValueSelectedForHorizontalInt: any;
  bandValueSelectedForProductLifecycle: any;
  rate: any;

  constructor(private service:DataTransferService) { }


  organizationName: string = "";
  organizationSector: string = "";
  bandScores: { [dimension: string] : number} = {};
  i: any;


  bandValue: any = ['0','1','2','3','4','5'];
  dim:any;
  model:any;
  ratingArray:any;
  ngOnInit(): void {


    this.model= this.service.selectedModel;

    this.service.getDimensions(this.model).subscribe((data:any)=>{
      this.dim = data[0].Dim
      this.ratingArray=data[0].Dim[0].Rating;

      console.log(this.ratingArray)
      console.log(data[0].Dim)


      console.log(this.service.selectedModel)

      this.service.postSurveyedModel().subscribe((data:any)=>{
        console.log(data)
      })

    })
  }

  rating: any[] = [0, 1, 2, 3, 4, 5];



  surveyResults:any={}

  getRate(i: string,j:any, index: any) {
    this.i = this.dim[index].name;
    this.rate = j;
    console.log(i,j);
    var p = i.toString()
    this.surveyResults[p]=j;
    var k = [];
    k.push(this.surveyResults)
    console.log(k)
    console.log(this.surveyResults)



  }

  showDescriptionBox(dimensionNumber: any, dimensionName: any){

      if(this.i==dimensionName){
        return true
      }else{
        return false
      }
  }

  post(){
    for (let key in this.surveyResults) {
      let value = this.surveyResults[key];
      console.log(key , value)

      var data:any={}
      data["name"] = key;
      data["value"] = value;

      this.service.postValue(this.service.Organisation,this.model,data).subscribe((data:any)=>{
        console.log(data);
      })


  }


  }


}
