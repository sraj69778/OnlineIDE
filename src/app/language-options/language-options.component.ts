import { Component, Input } from '@angular/core';
import { IdeServiceService } from '../services/ide-service.service';
import { c_Template, setProgram, setProgramWhichContainsArray } from 'src/programTemplates/c_template';
import { python_template, setProgramPython } from 'src/programTemplates/python_template';
import { java_Template, setProgramJava } from 'src/programTemplates/java_template';
import { cpp_Template, setProgramCPP } from 'src/programTemplates/cpp_template';
import { CodeModel } from 'src/programTemplates/code_editor.config';

@Component({
  selector: 'app-language-options',
  templateUrl: './language-options.component.html',
  styleUrls: ['./language-options.component.css']
})
export class LanguageOptionsComponent {

  @Input() question!: any;

  constructor(private ideService: IdeServiceService) { 
    
  }
  languageOptions: any = [];
  selectedLanguageID: string = 'c';
  programAnswer: any = `
int add(int x, int y) {
// Write your code here in c (Remove this line)
return 0;
}`;
  theme = 'vs-dark';
  codeModel: CodeModel = {
    language: 'c',
    uri: 'main.json',
    value: this.programAnswer
  };
  templateForDifferentQuestions = [
    {
      id: 0,
      template: [
        {
          id: 'py',
          program: `
def differenceofSum(n. m):
    # write your code here (please remove this line)
    return 0;`,
          language: 'python'
        },
        {
          id: 'c',
          program: `
int differenceOfSum(int n, int m){
  // write your code here (please remove this line)
  return 0;
}`,
          language: 'c'
        },
        {
          id: 'java',
          program: `
public static int differenceOfSum (int m, int n) {  
 // write your code here (please remove this line)
  return 0;
}`,
          language: 'java'
        },
        {
          id: 'cpp',
          program: `
int differenceofSum(int n, int m) {
 // write your code here (please remove this line)
  return 0;
} `,
          language: 'cpp'
        }
      ]
    }
  ]
  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  programOutput: any = [];

  setLanguageOptions() {
    this.languageOptions = [
      {
        id: 'c',
        name: 'C'
      },
      {
        id: 'cpp',
        name: 'C++'
      },
      {
        id: 'python3',
        name: 'Python3'
      },
      {
        id: 'java',
        name: 'Java'
      }
    ]

  }

  onChangeProgrammingLanguage(event: HTMLSelectElement) {
    this.selectedLanguageID = event.value;
    console.log('Event', this.selectedLanguageID);
    this.setProgramAnswer();

  }

  onCodeChanged(value: any) {
    console.log('CODE', value);
    this.programAnswer = value;

  }

  submitProgrammingAnswer() {
    console.log("Program Anser", this.programAnswer);
    this.programAnswer.includes('input()')
    let createArray = new Array();
    createArray.push(9)
    createArray.push(19)
    switch (this.selectedLanguageID) {
      case 'c':
        c_Template.testCases.forEach((element: any) => {
          let answer = setProgramWhichContainsArray(element.t, createArray) + this.programAnswer
          this.postProgram(answer);
        })
        break;
      case 'java':
        java_Template.testCases.forEach((element: any) => {
          let answer = setProgramJava(element.t, this.programAnswer);
          this.postProgram(answer);
        })
        break;
      case 'cpp':
        cpp_Template.testCases.forEach((element: any) => {
          let answer = setProgramCPP(element.t, this.programAnswer);
          this.postProgram(answer);
        })
        break;
      case 'python3':
        cpp_Template.testCases.forEach((element: any) => {
          let answer = setProgramPython(element.t, this.programAnswer, [8, 9, 77]);
          this.postProgram(answer);
        })
        break;
    }

  }

  postProgram(answer: string) {
    this.ideService.postProgram(answer, this.selectedLanguageID).subscribe((data: any) => {
      console.log('Data', data);
      this.programOutput.push(data);
      console.log('this.programOutput', this.programOutput);

    })
  }

  ngOnInit() {
    this.setLanguageOptions();
    console.log("This Question", this.question);
   
  }

  setProgramAnswer() {
    switch (this.selectedLanguageID) {
      case 'c':
        this.programAnswer = `
int add(int x, int y) {
// Write your code here in c (Remove this line)
}`
        this.codeModel = {
          language: 'c',
          uri: 'main.json',
          value: this.programAnswer
        };
        break;
      case 'cpp':
        this.programAnswer = `
int addTwo(int x, int y){
// Write your code here in cpp (Remove this line)

return 0;
}`
        this.codeModel = {
          language: 'cpp',
          uri: 'main.json',
          value: this.programAnswer
        };
        break;
      case 'java':
        this.programAnswer = `
public static int sum(int num1, int num2){
// Write your code here in java (Remove this line)
return 0;
}`
        this.codeModel = {
          language: 'java',
          uri: 'main.json',
          value: this.programAnswer
        };
        break;
      case 'python3':
        this.programAnswer = `
def add(x,y) :
# Write your code here in python (Remove this line)
    return 0;
`
        this.codeModel.language = 'python';
        this.codeModel = {
          language: 'python',
          uri: 'main.json',
          value: this.programAnswer
        };
        break;
    }
    console.log("Code model", this.codeModel);

  }



}



