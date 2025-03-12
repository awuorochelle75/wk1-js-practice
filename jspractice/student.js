function inputStudentMarks(){
    //this converts the input(marks) to a number and prompts the user to enter the marks.
    let marks=parseFloat(prompt( 'Enter the marks'))

    //Checks to see if marks is not a number,number is not negative and is not greater than 100.
    if(isNaN(marks) || marks <0 || marks > 100){
         alert('Invalid input! Enter a numerical value')
         return;
    }
    
    
    if (marks >79){
        return ' A'
    }else if (marks >=60 && marks <=79){
        return 'B'
    }else if (marks >=49 && marks <=59){
        return 'C'
    }else if (marks >=40 && marks <=49){
        return 'D'
    }else {
        return 'E'
    }
    
}inputStudentMarks()