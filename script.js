function oblicz(){
    var waga = document.getElementById("waga").value;
    waga = parseInt(waga);
    var wzrost = document.getElementById("wzrost").value;
    wzrost = parseInt(wzrost)/100;
    var BMI = waga / (wzrost * wzrost);
    document.getElementById("wynik").innerHTML = BMI.toFixed(2);
}
if(BMI<16){
    document.getElementById("slownie").innerHTML = "wygłodzenie"
}

else if((BMI>=16) && (BMI<16.99)){
    document.getElementById("slownie").innerHTML = "wychudzenie"
}

else if((BMI>=17) && (BMI<18.5)){
    document.getElementById("slownie").innerHTML = "niedowaga"
}

else if((BMI>=18.5) && (BMI<24.99)){
    document.getElementById("slownie").innerHTML = "wartość prawidłowa"
}

else if((BMI>=24.99) && (BMI<30)){
    document.getElementById("slownie").innerHTML = "nadwaga"
}

else if((BMI>=30) && (BMI<34.99)){
    document.getElementById("slownie").innerHTML = "I stopień otyłości"
}

else if((BMI>=34.99) && (BMI<39.99)){
    document.getElementById("slownie").innerHTML = "II stopień otyłości"
}

else if(BMI>=40) {
    document.getElementById("slownie").innerHTML = "otyłość skrajna"
}
