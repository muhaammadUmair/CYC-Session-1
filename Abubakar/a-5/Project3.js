const checkBalanceBtn = document.getElementById("checkBalanceBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const depositBtn = document.getElementById("depositBtn");
const exitBtn = document.getElementById("exitBtn");

const inputField = document.getElementById("Input_field");
const inputLabel = document.getElementById("inputLabel");


const totalBalanceSpan = document.querySelector("#totalBalance");
const totalWithdrawSpan = document.querySelector("#totalWithdraw");
const totalDepositSpan = document.querySelector("#totalDeposit");

const balanceSection = document.getElementById("balanceSection");
const withdrawSection = document.getElementById("withdrawSection");
const depositSection = document.getElementById("depositSection");

// variables to keep track of total balance, withdraw, and deposit
let totalBalance = 0;
let totalWithdraw = 0;
let totalDeposit = 0;

// Event listeners for buttons
checkBalanceBtn.addEventListener("click", checkBalance);
withdrawBtn.addEventListener("click", withdraw);
depositBtn.addEventListener("click", deposit);
exitBtn.addEventListener("click", exit);

// Functions to handle button clicks
function checkBalance() {
    balanceSection.hidden = false;
    totalBalanceSpan.textContent = totalBalance;
}

function withdraw() {
    withdrawSection.hidden = false;
    inputField.value = "";
    inputField.setAttribute("placeholder", "Enter Amount to Withdraw");
    inputLabel.textContent = "Enter Amount to Withdraw:";
    depositSection.hidden = true;
}

function deposit() {
    depositSection.hidden = false;
    withdrawSection.hidden = true;
    inputField.value = "";
    inputField.setAttribute("placeholder", "Enter the deposit amount");
    inputLabel.textContent = "Enter Amount to deposit:";
};


function exit() {
    totalBalance = 0;
    totalWithdraw = 0;
    totalDeposit = 0;
    totalBalanceSpan.textContent = totalBalance;
    totalWithdrawSpan.textContent = totalWithdraw;
    totalDepositSpan.textContent = totalDeposit;
    inputField.value = "";
    balanceSection.hidden = true;
    withdrawSection.hidden = true;
    depositSection.hidden = true;
    inputLabel.textContent = "";
};

// Funtion that work on logic.


inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (withdrawSection.hidden === false) {
            const amount = parseFloat(inputField.value);
            if (!isNaN(amount) && amount > 0 && amount <= totalBalance) {
                totalWithdraw += amount;
                totalBalance -= amount;
                totalWithdrawSpan.textContent = totalWithdraw;
                totalBalanceSpan.textContent = totalBalance;
                inputField.value = "";
                alert("Withdraw successful!");
            } else {
                alert("Invalid withdraw amount.You do not have enough balance");
            }
        } else if (depositSection.hidden === false) {
            const amount = parseFloat(inputField.value);
            if (!isNaN(amount) && amount > 0 || amount <= totalBalance) {
                totalDeposit += amount;
                totalBalance += amount;
                totalDepositSpan.textContent = totalDeposit;
                totalBalanceSpan.textContent = totalBalance;
                inputField.value = "";
                alert("Deposit successful!");

            } else {
                alert("Invalid Deposit amount.");
            }
        }
    }
});

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

    }
});

