import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  
  selectedOption: string ="Celsius";
  converted:number = 0;
  convertedOutput:string = "";
  options = ['Celsius','Fahrenheit'];

  tempInput = new FormControl('',[
    Validators.required,
    Validators.pattern("^[0-9]*$")
  ]);

  SelectHandler(event:any)
  {
    this.selectedOption = event.target.value;
  }

  onSubmit()
  {
    let degrees = this.tempInput.value;
    switch (this.selectedOption) 
    {
      case 'Celsius':
          this.converted = ((degrees * 9/5) + 32); 
          this.convertedOutput = parseFloat(this.converted.toString()).toFixed(2) + " F";     
        break;
      case 'Fahrenheit':
          this.converted = ((degrees - 32) * 5/9);
          this.convertedOutput = parseFloat(this.converted.toString()).toFixed(2) + " C";
        break;
    }
  }
}
