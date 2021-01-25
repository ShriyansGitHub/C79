StudentArray1 = [];

function Submit(){
    var name1 = document.getElementById("Nameofstudent1").value;
    var name2 = document.getElementById("Nameofstudent2").value;
    var name3 = document.getElementById("Nameofstudent3").value;
    var name4 = document.getElementById("Nameofstudent4").value;
    var name5 = document.getElementById("Nameofstudent5").value;
    StudentArray1.push(name1);
    StudentArray1.push(name2);
    StudentArray1.push(name3);
    StudentArray1.push(name4);
    StudentArray1.push(name5);
    console.log(StudentArray1);
    document.getElementById("display_name").innerHTML = StudentArray1;
    document.getElementById("submitbtn").style.display = "none";
    document.getElementById("sortbtn").style.display = "inline-block";
}
function Sorting(){
    StudentArray1.sort();
    document.getElementById("display_name").innerHTML = StudentArray1;
}