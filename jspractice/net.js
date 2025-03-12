function calculateNetSalary(basicSalary,benefits){
    //Calculating the gross salary
    let grossSalary = basicSalary + benefits

    //Here we are calculating the P.A.Y.E
    function calculatePAYE(grossSalary){
        
        let paye = 0
        if(grossSalary <=24000){
            paye = grossSalary * 10/100;
        }else if (grossSalary <=32333 ){
            paye = 24000 * 0.10 + (grossSalary - 24000) * 25/100;
        }else if (grossSalary<= 500000){
            paye = 24000 * 10/100 + (32333-24000) * 25/100 + (grossSalary-32333) * 30/100;

        }else if(grossSalary <=800000){
            paye = 24000 * 10/100 + (32333-24000) * 25/100 + (500000-32333) * 30/100 + (grossSalary - 500000) * 32.5/100;
        }else {
            paye = 24000 * 10/100 + (32333-24000) * 25/100 + (500000-32333) * 30/100 + (800000 - 500000) * 32.5/100 + (grossSalary - 800000) * 35.0/100;
        }
        return paye;
    }

    let paye = calculatePAYE(grossSalary);

    //The SHIF Deductions
    let shifDeduction = grossSalary * 2.75/100;

    //the NSSF Deductions
    let nssfTier1= Math.min(grossSalary, 8000) * 6/100;
    let nssfTier2=Math.max(0,Math.min(grossSalary - 8000,64000)) * 6/100;
    let nssfDeduction =nssfTier1 + nssfTier2;

    //Calculating the Net Salary
    let netSalary = grossSalary - paye - shifDeduction - nssfDeduction
    return netSalary;
    
}console.log(calculateNetSalary(60000,15000))