export let java_Template: any = {
    testCases: [
        { t: [77, 99] },
        // { t: [26, 100] },
        // { t: [64, 100] }

    ],
}


export function setProgramJava(values: any, answer: any) {
    let arr = [7, 8, 9];
    let cArrayString = `[${arr.join(',')}]`; //[7,8,9] ,{7,8,9} '[7,8,9]'
    console.log(`
    import java.util.*;
    public class Main{

    ${answer}

    public static void main(String[] args){
        int size, arrayToPass[] = {${arr}};

        int sum = sum(${values[0]},${values[1]});
        System.out.println("The sum is "+sum);


    }


}`);
    

    return `
    import java.util.*;
    public class Main{

    ${answer}

    public static void main(String[] args){
        int size, arrayToPass[] = {${cArrayString.slice(1, -1)}};

        int sum = sum(${values[0]},${values[1]});
        System.out.println("The sum is "+sum);


    }


}
`
}