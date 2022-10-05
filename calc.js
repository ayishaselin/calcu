const sumBy = () => {
	const num1 = document.getElementById("firstNumber");
	const num2 = document.getElementById("secondNumber");
	const number1 = Number(num1.value);
     const number2 = Number(num2.value);    
     result.innerHTML = number1 + number2;
	};

     const differenceBy = () => {
	const num1 = document.getElementById("firstNumber").value;
	const num2 = document.getElementById("secondNumber").value;
	result.innerHTML = num1 - num2;
	};

     const multiplyBy = () => {
	const num1 = document.getElementById("firstNumber").value;
	const num2 = document.getElementById("secondNumber").value;
	result.innerHTML = num1 * num2;
	};

     const divisionBy = () => {
	const num1 = document.getElementById("firstNumber").value;
	const num2 = document.getElementById("secondNumber").value;
	result.innerHTML = num1 / num2;
	};