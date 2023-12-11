export let python_template: any = {
    testCases: [
        { t: [77, 99] },
        // { t: [70, 100] }
    ],
    program: `
    output = add(8,9);
    print(output)
    `
}


export function setProgramPython(values: any,answer:any,arr:any) {
    console.log("Values in prohram", values);

    return `
${answer}
arr = ${arr};
print(${arr})
output = add(`+ values[0] + `,` + values[1] + `);
print(output);

 `
}


