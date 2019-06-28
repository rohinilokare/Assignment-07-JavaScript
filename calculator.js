function Calculator(){
  this.evaluate = function(str,obj){
		var arr = str.split("");
		console.log("String is :"+str)
		if(arr[1] == '+'){
				this.addition(arr[0],arr[2])
		}
		else if(arr[1] == '-'){
				this.substraction(arr[0],arr[2])
		}
		else if (arr[1] == '*'){
				this.multiplication(arr[0],arr[2])
		}
		else if (arr[1] == '/'){
				this.division(arr[0],arr[2])
		}
	}

	this.addition = function(a,b){
		add1 = `${Number(a) +  Number(b)}`
		console.log("addition ",add1)
	}

	this.substraction = function(a,b){
		minus = `${Number(a) -  Number(b)}`
		console.log("substraction : ",minus)
	}

	this.multiplication = function(a,b){
		mul = `${Number(a) *  Number(b)}`
		console.log("multiplication : ",mul)
	}

	this.division = function(a,b){
		div = `${Number(a) /  Number(b)}`
		console.log("Division : ",div)
	}

}

calculator = new Calculator();
calculator.evaluate("1+1");
calculator.evaluate("5-1");
calculator.evaluate("1*1");
calculator.evaluate("5/2");

