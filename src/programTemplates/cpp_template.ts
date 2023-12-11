export let cpp_Template: any = {

    testCases: [
        { t: [77, 99] },
        // { t: [70, 100] }
    ],
}


export function setProgramCPP(values: any, answer: any) {

    return `
    #include <iostream>
    using namespace std;

    int addTwo(int x, int y);

    int main(){
      int a, b, sum;
      sum = addTwo(${values[0]}, ${values[1]});
      cout <<sum << endl;
      return 0;
    }
    ${answer}
`
}