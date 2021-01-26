StudentArray1 = [];

function Submit() {
    for (var j = 1; j <= 5; j++) {
        var name_of_the_student = document.getElementById("Nameofstudent" + j).value;
        console.log(name_of_the_student);
        StudentArray1.push(name_of_the_student);
    }
    document.getElementById("display_name").innerHTML = StudentArray1;
    document.getElementById("submitbtn").style.display = "none";
    document.getElementById("sortbtn").style.display = "inline-block";
}

function Sorting() {
    StudentArray1.sort();
    document.getElementById("display_name").innerHTML = StudentArray1;
}