export let c_Template:any = {
    program:
    `
    #include<stdio.h>
    int add(int, int); // function prototype

    int main(){
    int a, b;
    int output = add(77,80);
    printf("Output : %d ",output);
    return 0;
    }
    `,
    testCases: [
        { t: [77, 99] },
        // { t: [70, 100] }
    ],
    output: [176,100]
}

export function setProgram(values: any,arr:any){
     console.log("Values in prohram",values,arr);
     
    return  `
    #include<stdio.h>
    int add(int, int ); // function prototype
    int main(){
    int a, size, arrayToPass[] ={`+arr[0]+`,`+arr[1]+`} ;
    size =`+ arr.length +`;
    
    printf("t %d",`+ arr.length +`);
    printf("The arr",`+ arr +`);
    for(int i =0;i<size;i++){
        printf("%d",arrayToPass[i]);
    }
    int output = add(`+ values[0] + `,` + values[1] +`);
    printf("Output : %d ",output);
    return 0;
    }
    `
}

export function setProgramWhichContainsArray(values: any, arr: any) {
    // console.log("Values in prohram", values, arr, JSON.parse(arr.slice(1, -1)));
    let cArrayString = `[${arr.join(',')}]`; //[7,8,9] ,{7,8,9} '[7,8,9]'

    return `
#include<stdio.h>

int add(int, int); // function prototype

int main() {
    int size, arrayToPass[] = {${cArrayString.slice(1, -1)}};
    int sum= 0;
    size = sizeof(arrayToPass) / sizeof(arrayToPass[0]);

    printf("Size: %d", size);

    for(int i = 0; i < size; i++) {
        printf("%d", arrayToPass[i]);
        sum = sum+arrayToPass[i];
        printf("The sum is %d",sum);
    }

    int output = add(${values[0]}, ${values[1]});
    printf("Output: %d ", output);
    printf("The sum is %d",sum);


    return 0;
}
`
}



