
// main home screen pages button functions.

function fn_1_project(params) {
    document.getElementById("Project-1").removeAttribute("hidden");
    document.getElementById("Project-2").setAttribute("hidden", "true");
    document.getElementById("Project-3").setAttribute("hidden", "true");
}
function fn_2_project(params) {
    document.getElementById("Project-2").removeAttribute("hidden");
    document.getElementById("Project-1").setAttribute("hidden", "true");
    document.getElementById("Project-3").setAttribute("hidden", "true");
}
function fn_3_project(params) {
    document.getElementById("Project-3").removeAttribute("hidden");
    document.getElementById("Project-1").setAttribute("hidden", "true");
    document.getElementById("Project-2").setAttribute("hidden", "true");
}

// function Exit() {
//    location.reload(true); 
// }

// project 1 mail buttons funtions. 

function input() {
    document.querySelector("#inputSection").removeAttribute("hidden");

}

let Subjects = [];

document.getElementById("addSubjectBtn").addEventListener("click", function () {
    const inputField = document.getElementById("subjectInput");
    const value = inputField.value.trim();

    if (!isNaN(value) && value !== "") {
        alert("Please enter a subject name, not a number.");
        inputField.value = "";
        return;
    }
    if (value !== "") {
        Subjects.push(value);
        inputField.value = "";
    }

    if (Subjects.length === 5) {
        document.querySelector("#subjectInput").setAttribute("disabled", "true");
        document.querySelector("#addSubjectBtn").setAttribute("hidden", "true");
        document.querySelector("#subjectInput").setAttribute("placeholder", "You have entered 5 subjects, Now enter marks of subjects");
      
        // get the input feild and button display. 

        document.querySelector("#markInput").removeAttribute("hidden");
        document.querySelector("#mark_label").removeAttribute("hidden");

        document.getElementById("sub_label").setAttribute("hidden", "true");

        document.querySelector("#markInput").removeAttribute("disabled", "true");
        document.querySelector("#addMarkBtn").removeAttribute("hidden");
    }


});

document.getElementById("subjectInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addSubjectBtn").click();
    }
});

// Marks calculation and display table section.
// This section will be used to get the marks of subjects and display them in a table.
let marks = [];

document.getElementById("addMarkBtn").addEventListener("click", function () {
    const inputField = document.getElementById("markInput");
    const value = inputField.value;

    if (isNaN(value) || value.trim() === "" || value < 0 || value > 100) {
        alert("Please enter a valid number for marks.");
        inputField.value = "";
        return;
    }
    if (value !== "") {
        marks.push(value);
        inputField.value = "";
    }

    if (marks.length === 5) {
        document.querySelector("#markInput").setAttribute("disabled", "true");
        document.querySelector("#addMarkBtn").setAttribute("hidden", "true");
        document.querySelector("#markInput").setAttribute("placeholder", "You have entered 5 marks");
        document.querySelector("#inputForm").setAttribute("hidden", "true");
    }


});


document.getElementById("markInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addMarkBtn").click();
    }
});
 
// DIsplay marks in a table.

function displayTable() {
    const tableSection = document.getElementById("tableSection");
    tableSection.removeAttribute("hidden");

    // Clear previous table if exists
    tableSection.innerHTML = "";

    const table = document.createElement("table");
    table.border = "1";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const subjectHeader = document.createElement("th");
    subjectHeader.textContent = "Subject";
    const markHeader = document.createElement("th");
    markHeader.textContent = "Mark";

    headerRow.appendChild(subjectHeader);
    headerRow.appendChild(markHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let i = 0; i < Subjects.length; i++) {
        const row = document.createElement("tr");
        const subjectCell = document.createElement("td");
        subjectCell.textContent = Subjects[i];
        const markCell = document.createElement("td");
        markCell.textContent = marks[i] || "";
        row.appendChild(subjectCell);
        row.appendChild(markCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    tableSection.appendChild(table);
}


function checkAndDisplayTable() {
    if (Subjects.length === 5 && marks.length === 5) {
        
        displayTable();
        CalculateTotal();
        CalculateAverage();
        checkGrade();
    }
}

document.getElementById("markInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAndDisplayTable();
    }
});


// Calculate total marks

function CalculateTotal() {
    document.getElementById("calculateTotalBtn").addEventListener("click", () => {
        document.getElementById("calculateResult").removeAttribute("hidden");
        const totalMarks = marks.reduce((acc, mark) => acc + parseFloat(mark), 0);
        document.getElementById("totalMarks").textContent = totalMarks;
    })
};

// Calculate average marks

function CalculateAverage(){
    document.getElementById("calculateAverageBtn").addEventListener("click", () => {
        document.getElementById("averageSection").removeAttribute("hidden");
        const totalMarks = marks.reduce((acc, mark) => acc + parseFloat(mark), 0);
        const averageMarks = totalMarks / marks.length;
        document.getElementById("averageMarks").textContent = averageMarks;
    })

};

// Check grade based on average marks

function checkGrade() {
    document.getElementById("checkGradeBtn").addEventListener("click", () => {
        document.getElementById("gradeSection").removeAttribute("hidden");
        const totalMarks = marks.reduce((acc, mark) => acc + parseFloat(mark), 0);
        if(totalMarks >= 450 && totalMarks <= 500){
            document.getElementById("assignedGrade").textContent = "A+";
        }else if(totalMarks >= 400 && totalMarks <= 450){
            document.getElementById("assignedGrade").textContent = "A";
        }else if(totalMarks >= 350 && totalMarks <= 400){
            document.getElementById("assignedGrade").textContent = "B"; 
        }else if(totalMarks >= 300 && totalMarks <= 350){
            document.getElementById("assignedGrade").textContent = "C";
        }else if(totalMarks >= 250 && totalMarks <= 300){
            document.getElementById("assignedGrade").textContent = "D";
        }
        else if(totalMarks < 250){
            document.getElementById("assignedGrade").textContent = "F";
        }
    })

};






