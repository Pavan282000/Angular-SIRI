import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataTransferService } from 'src/app/services/dataTransfer/data-transfer.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  showCoverPage: boolean = true;
  showCoverImage: boolean = true;
  showAssessmentPage: boolean = false;
  showDimensionConfirmation: boolean = false;
  showOrganizationConfirmation: boolean = false;


  organizationName: string = '';
  organizationSector: string = 'Select';
  newDimension: any;
  newDimensionDetail: any;
  newDimensionWeight: any;
  newDimensionCutoff: any;

  numberOfDimensions: number = 0;
  numberOfOrganizations: number = 0;

  dimensionsArray =  new Array;
  dimensionsWeightArray =  new Array;
  dimensionsDescriptionArray =  new Array;
  dimensionsCutoffArray =  new Array;
  organizationsArray: any = [];
  organizationsSectorArray: any = [];

  dimensionsList: { [dimension: string] : string} = {};
  organizationsList: { [organization: string] : string} = {};

  i: any = 0;


  constructor(private dataService: DataTransferService,private fb: FormBuilder) {

   }
   orgGroup:FormGroup
  ngOnInit(): void {
    this.orgGroup = new FormGroup({

      'orgName' : new FormControl('',[Validators.required]),
      'orgSector' : new FormControl('',
    [Validators.required,Validators.minLength(5),])
    })
  }

  // goToCoverPage(event: any){
  //   this.showCoverPage = true;
  //   this.showCoverImage = true;
  //   this.showAssessmentPage = false;
  // }



  onSubmit(){

  }



  enterOrganizationName(event: any){
    this.showOrganizationConfirmation=false;

    this.organizationName = event.target.value;
    console.log("org name: ", this.organizationName);
  }

  enterOrganizationSector(event: any){
    this.showOrganizationConfirmation=false;

    this.organizationSector = event.target.value;
    console.log("org sector: ", this.organizationSector);
  }

  closeOrgDetailsModal(){
    this.showAssessmentPage = true;
  }

  organisation:any={}
  addOrganizationButton(){

    this.showOrganizationConfirmation=true;
    this.organisation['name'] = this.orgGroup.get('orgName')?.value;
    this.organisation['sector'] = this.orgGroup.get('orgSector')?.value;

    console.log(this.organisation);
    console.log(this.organisation.name);


    this.organizationName='';
    this.organizationSector='Select';

  }

  // dimension:any={}
  // addDimensionButton(){
  //   // this.numberOfDimensions.push(1);
  //   // console.log(this.numberOfDimensions);

  //   // this.dimensionsList['dimension'] = this.newDimension;
  //   this.dimension['Title'] = this.newDimension;
  //   this.dimension['description'] = this.newDimensionDetail;
  //   this.dimension['weight'] = this.newDimensionWeight;
  //   this.dimension['cut_off'] = this.newDimensionCutoff;



  //   console.log(this.dimensionsArray);
  //   console.log(this.dimension)


  //   this.dataService.postDimensionDetails(this.dimension.Title,this.dimension.weight,this.dimension.cut_off,this.dimension.description).subscribe(response=>{
  //     console.log(response);

  //   });

  //   this.newDimension=null;
  //   this.newDimensionDetail=null;
  //   this.newDimensionWeight=null;
  //   this.newDimensionCutoff=null;
  //   this.showDimensionConfirmation=true;
  //   this.numberOfDimensions++;

  //   // this.dataService.transferdimensionDetails(this.dimensionsList);
  // }

  // newDimensionMethod(event: any){
  //   this.newDimension = event.target.value;
  //   console.log("new dimension: ", this.newDimension);
  // }

  // newDimensionClick(){
  //   this.showDimensionConfirmation=false;
  // }

  // newDimensionDetailMethod(event: any){
  //   this.newDimensionDetail = event.target.value;
  //   console.log("new dimension details: ", this.newDimensionDetail);
  // }

  // newDimensionWeightMethod(event: any){
  //   this.newDimensionWeight = event.target.value;
  //   console.log("new dimension weight: ", this.newDimensionWeight);
  // }

  // newDimensionCutoffMethod(event: any){
  //   this.newDimensionCutoff = event.target.value;
  //   console.log("new dimension cutoff: ", this.newDimensionCutoff);
  // }

  // newDimensionDetailClick(){
  //   this.showDimensionConfirmation=false;
  // }

  // newDimensionWeightClick(){
  //   this.showDimensionConfirmation=false;
  // }

  // newDimensionCutoffClick(){
  //   this.showDimensionConfirmation=false;
  // }

  // saveDimensionDetails(){
  //   // console.log("number of dimensions:", this.numberOfDimensions);
  //   // console.log("dimension array: ", this.dimensionsArray)
  //   // console.log("dimension weight array: ", this.dimensionsWeightArray)
  //   // console.log("dimension desc array: ", this.dimensionsDescriptionArray)

  //   this.dataService.transferdimensionDetails(this.dimensionsArray);
  //   this.dataService.transferdimensionWeightDetails(this.dimensionsWeightArray);
  //   this.dataService.transferdimensionDescriptionDetails(this.dimensionsDescriptionArray);
  //   this.dataService.transferdimensionCutoffDetails(this.dimensionsCutoffArray);


  //   this.dataService.postDimensionsCompaniesCount(this.numberOfDimensions, this.numberOfOrganizations).subscribe(response=>{
  //     console.log(response);
  //   });

  // }


  saveCompanyDetails(){
    this.showOrganizationConfirmation=true;
    this.organisation['name'] = this.orgGroup.get('orgName')?.value;
    this.organisation['sector'] = this.orgGroup.get('orgSector')?.value;

    console.log(this.organisation);
    console.log(this.organisation.name);


    // this.organizationName='';
    // this.organizationSector='Select';
    this.dataService.postOrganizationDetails(this.organisation).subscribe(response=>{
      console.log(response);
    });

    this.dataService.org(this.organisation.name);

  }



}
