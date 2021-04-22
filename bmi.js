$(document).ready(function(){
    // Validation
    let myValidation = {
        height: {
            required: true,
            min: 59,
            max: 79,
            digits: true
        },

        weight: {
            required: true,
            min: 88,
            max: 353,
            digits: true
        }
    }

    let myMessages = {
        height: {
            required: "This field is required",
            min:  "This value must be higher or equal to 59",
            max:  "This value must be lower or equal than 79",
            digits:  "You must enter numbers only"
        },

        weight: {
            required: "This field is required",
            min:  "This value must be higher or equal to 88",
            max: "This value must be lower or equal to 353" ,
            digits:  "You must enter numbers only"
        }
    }

    // Events

    $("form").validate({
        submitHandler: calculate,
        rules: myValidation,
        messages: myMessages
    });


function calculate()

{

    let weightInput = $("#weight").val();
    let heightInput = $("#height").val();

    //calculation
    let bmi = (weightInput / heightInput ** 2) * 703;

    $("#result").text(bmi.toFixed(1));
    // $(".output").show();

    if(bmi <= 18.3)
    {
        $("p.output").text("You're underweight ")
    }
    else if(bmi >=18.4 && bmi <27.4)
    {
        $("p.output").text("You're healthy")
    }

   else if(bmi >= 27.4 && bmi <32)
    {
        $("p.output").text("You're overweight")
    }
   else
    {
        $("p.output").text("You're obese")
    }

    }
    // if(bmi < 18.5 && weightInput <=100){
    //     return "Underweight";
    // }else if (bmi < 25){
    //     return "Normal";
    // }else if (bmi < 30){
    //     return "Overweight";
    // }else{
    //     return "Obese";
    // }



});

