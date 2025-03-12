function checkSpeed(){
    //this converts the input(speed) to a number and prompts the user to enter the speed.
    let speed=parseFloat(prompt( 'Enter the speed'))

    //Checks to see if marks is not a number,number is not negative and is not greater than 100.
    if(isNaN(speed) || speed <0){
         alert('Invalid input! Enter correct speed')
         return;
    }
        //this is our maximum speed allowed.
        let speedLimit=70;
        let kmPerPoint=5;



        if (speed <= speedLimit){
            return "Ok"
        }else {
            //We are calculating the demerit points and the Math.floor function ensures driver only gets full points.
            let points = Math.floor((speed-speedLimit) /kmPerPoint);
           //brings an alert of the points one has of the exceeded speed limit.
            alert(points)

            //output for the points above 12.
            if (points > 12){
                alert( "License suspended")
            }
        
        }checkSpeed()
    
}