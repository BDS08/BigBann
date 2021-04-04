function getmarks()
{
    var maths = Number(document.getElementById("Math").value);
    var phy = Number(document.getElementById("Physics").value);
    var chem = Number(document.getElementById("Chemistry").value);

    var total = 300;
    var markobtain = (maths + phy + chem);
    var per = (markobtain/total) * 100;
    
    document.getElementById("percentage").innerHTML = per + "%";

    if(per > 90){
        grade ="A+";
    }
    else if(per<90 && per > 80){
        grade="A";
    }
    else if(per<80 && per > 60){
        grade="B";
    }
    else if(per<60 && per > 45){
        grade="c";
    }
    else {
        grade="D";
    }

    document.getElementById("grade").innerHTML = grade;
    if(per < 45)
    {
        document.getElementById("pass").innerHTML = " Failed!! , Better Luck NextTime"
        document.getElementById("red").style.backgroundColor = "red";
    }
    else if(per >=45 && per < 80){
        document.getElementById("pass").innerHTML = "Congratulations !! , You Passed ";
        document.getElementById("red").style.backgroundColor = "rgb(15, 179, 10)";
    }
    else{
        document.getElementById("pass").innerHTML = "Congratulations !! , You Killed it ";
        document.getElementById("red").style.backgroundColor = "rgb(15, 179, 10)";
    }
    
   
}