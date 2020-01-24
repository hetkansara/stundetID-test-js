//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.

function test__checkHumbrId(valueIn, expected){
    "use strict";

    let result = checkHumbrId(valueIn);

    let testresult = "";

    if(result === expected){
        testresult = "<span class='success'>==PASSED==</span>";

    } else {
        testresult = "<span class='failed'>xxFAILEDxx</span>";
    }
    
    let msg = "Value tested: <b>" + valueIn + "</b> Expected result: <b>" + expected + "</b> Result: <b>" + result + "</b> " + testresult + "<br>";

    let msgBox = document.getElementById("msgBox");
    msgBox.innerHTML += msg;

}

test__checkHumbrId("n12345678", false);
test__checkHumbrId("N12345678", true);
test__checkHumbrId("a12345678", false);
test__checkHumbrId("1234", false);
test__checkHumbrId(undefined, false);
test__checkHumbrId(1.2, false);
test__checkHumbrId(true, false);
test__checkHumbrId("Hello", false);
test__checkHumbrId("N013300091", false);
test__checkHumbrId("N0133000", false);
test__checkHumbrId("N01330009", true);
test__checkHumbrId(function(){}, false);
test__checkHumbrId(0, false);