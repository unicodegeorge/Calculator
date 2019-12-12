import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  
  private stringNum = "";
  private tempStringNum = "";
  private numbers = [];
  private operation = "";
  private operationArray = [];  
  private result = 0;  

  private addOne(x) {
  this.stringNum += ""+x

  
  
  }

  private makeOp(operation) {
    this.operation = operation;
    this.numbers.push(parseInt(this.stringNum));
    switch(operation){
      case '+':
         
         this.operationArray.push('+');
         this.stringNum = "";
         
         

      break;

      case '-':
          // this.numbers.push(parseInt(this.stringNum));
          this.operationArray.push('-');
          this.stringNum = "";
      break;

      case '/':
        //  this.numbers.push(parseInt(this.stringNum));
         this.operationArray.push('/');
         this.stringNum = "";
      break;

      case '*':
          // this.numbers.push(parseInt(this.stringNum));
          this.operationArray.push('*');
          this.stringNum = "";
      break;
    }
  }
  private reset() {

    this.numbers = [];
    this.stringNum = "";
    this.operationArray = [];

  }
  private showResult() {
   if(this.numbers.length>=1) {
    this.numbers.push(parseInt(this.stringNum));
  }
    for(let x = 0; x < this.numbers.length; x++) {
      console.log(this.result);
      switch(this.operationArray[x]) {
        case '+':
          
            this.result = this.numbers[x];
            this.result = this.result + this.numbers[x+1]; 
            this.numbers = [];
            this.operationArray = [];
      
            

        break;

        case '-':
          this.result = this.numbers[x];
          this.result = this.result - this.numbers[x+1]; 
          this.operationArray = [];
          this.numbers = [];
         
        break;

        case '/':
            if(this.numbers[x+1]!=0) {
            this.result = this.numbers[x];
            this.result = this.result / this.numbers[x+1];
            this.operationArray = [];
            this.numbers = [];
            
          } else {
            alert("Neda se delit 0");
          }
        break;

        case '*':
            this.result = this.numbers[x];
            this.result = this.result * this.numbers[x+1];
            this.numbers = [];
            this.operationArray = [];
            

        
      }
    }
    this.stringNum = ""+this.result;
  }




}
