function akanNames(){
    var year =document.getElementById("year").value;
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("date").value);
    var CC = parseInt( year.slice(0,2));
    var YY = parseInt(year.slice(2,4));
    
    var male  =[ "kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female = [ "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var gender =document.getElementById("gender").value;
    var day = ["sunday", "monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
    
    var CalculateDate = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
    CalculateDate= Math.floor(CalculateDate)
    
    if( MM <1||MM>12){
        alert("please fill in the correct month");
    };
    if(DD>31 || DD <1){
        alert("please fill in the correct date")
    };
    if (gender ==="male"){
        sex = male;
    }
     else{
        sex = female;
    };
    var output = sex[CalculateDate]
    var day= day[CalculateDate]
    document.getElementById("answer").innerHTML = "congratulations your Akan name is " + output+", and you were born on " + day+"." ;
    
};



