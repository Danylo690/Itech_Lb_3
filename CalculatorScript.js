var number1;
var number2;
var DisableButton;
function AddToText (id)
{
    var number = document.getElementById(id).value;
    if(document.getElementById("InputText2").value == 0 || DisableButton)
    {
        document.getElementById("InputText2").value = number;
        DisableButton = false;
    }
    else
    {
        document.getElementById("InputText2").value += number;
    }
}
function AddToTextComa(id)
{
    var number = document.getElementById(id).value;
    var Text = document.getElementById("InputText2").value;
    for(var i = 0; i < Text.length; i++)
    {
        console.log(Text[i]);
        if(Text[i] == '.')
        {
            return;
        }
    }
    document.getElementById("InputText2").value += number;
    
}
function Operation(operator)
{
    var Element1 = parseFloat(document.getElementById("InputText1").value);
    var Element2 = parseFloat(document.getElementById("InputText2").value);
    if(!isNaN(Element1) && !isNaN(Element2))
    {
        Calculate();
        Element2 = parseFloat(document.getElementById("InputText2").value)
    }
    if(!isNaN(Element2) && operator != "=")
    {
        number1 = Element2;
        DisableButton = false;
        document.getElementById("InputText1").value = number1;
        document.getElementById("InputText1").value  += operator;
        document.getElementById("InputText2").value = 0;
        console.log(number1);
    }
    else
    {
        document.getElementById("InputText1").value = "";
        DisableButton = true;
        console.log(number1);
    }
}
function Calculate()
{
    number2 = parseFloat(document.getElementById("InputText2").value);
    var result;
    var Element = document.getElementById("InputText1").value;
    switch(Element[Element.length - 1])
    {
        case "+":
        result = number1 + number2;
        break;
        case "-":
        result = number1 - number2;
        break;
        case "*":
        result = number1 * number2;
        break;
        case "/":
        result = number1 / number2;
        break;
    }
    document.getElementById("InputText2").value = result;
}
function Clear()
{
    document.getElementById("InputText1").value = "";
    document.getElementById("InputText2").value = 0;
    DisableButton = false;
}
function DeleteSymbol()
{
    if(!isNaN(document.getElementById("InputText1")).value && !DisableButton)
    {
        var Text = document.getElementById("InputText2").value;
        document.getElementById("InputText2").value = "";
        if(Text.length == 1)
        {
            document.getElementById("InputText2").value = 0;
            return;
        }
        for(var i = 0; i < Text.length - 1; i++)
        {
            document.getElementById("InputText2").value += Text[i];
        }
    }
}