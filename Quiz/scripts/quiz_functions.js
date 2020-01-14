var score= 0;
var counter = 0;


function buildQuiz() {   // this bit displays qs or results
    document.querySelector(".question").innerHTML = Questions[counter];
    document.getElementById('a').innerHTML = Questions[counter+1];
    document.getElementById('b').innerHTML = Questions[counter+2];
    document.getElementById('c').innerHTML = Questions[counter+3];
    document.getElementById('d').innerHTML = Questions[counter+4];
    correctvalue=Questions[counter+5];
    console.log("counter =" + counter);
    console.log("the correct answer is " + correctvalue);
    

    if (counter < Questions.length-5) {
        TakeAns()
    } else {
        showresults()
        
    }
}



function TakeAns(){ // this bit registers when an answer is clicked. You only get one shot, a back button or something might be useful

    var buttons = document.getElementsByTagName("button");
    
        for ( let i = 0; i < buttons.length; i++){
            let button=buttons[i];

            button.removeEventListener("click", clickbutton);
            button.addEventListener("click", clickbutton);

            if(button.innerHTML==correctvalue) {//if the right answer is pressed then the score gets increased 
                
                button.removeEventListener("click", takescore);
                button.addEventListener("click", takescore);
        }
            
    }
    console.log( "score =" + score);    
}

function clickbutton(){ //when a button is pressed
    counter += 6; //the next q is found
    buildQuiz(); //the q is refreshed
    console.log( "counter increased by 6");
}

function takescore(){ 
    if(counter < Questions.length){
    score += 1; 
    console.log( "score increased by 1");
}
}

//this displays the score after the test - Could definitely be improved with a popup or something

function showresults(){
    
    document.querySelector(".question").innerHTML = "You Scored " + score + " Out Of "+ Questions.length/6+ "!"; 
    document.getElementById('a').innerHTML = "";
    document.getElementById('b').innerHTML = "";
    document.getElementById('c').innerHTML ="";
    document.getElementById('d').innerHTML = "";


}
