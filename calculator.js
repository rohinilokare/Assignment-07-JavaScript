function Calculator(){

  this.store =function(key,value){
      this.key = key
      this.value = value
      console.log(value)
  }

  this.evaluate = function(str,obj)
  {
    var arr = str.split(" ");
    var compare_arr = str.split('');
    console.log("String is :"+str)
    max_arr = compare_arr[0]+compare_arr[1]+compare_arr[2]
    min_arr = compare_arr[0]+compare_arr[1]+compare_arr[2]


  this.addition = function(a,b){
    add = `${Number(a) +  Number(b)}`
    console.log("Answer ",add)
    console.log('-----------------------------')
  }

  this.substraction = function(a,b){
    minus = `${Number(a) -  Number(b)}`
    console.log("Answer : ",minus)
    console.log('-----------------------------')

  }

  this.multiplication = function(a,b){
    mul = `${Number(a) *  Number(b)}`
    console.log("Answer : ",mul)
    console.log('-----------------------------')
  }

  this.division = function(a,b){
    div = `${Number(a) /  Number(b)}`
    console.log("Answer : ",div)
    console.log('-----------------------------')
  }
  this.max = function(compare_arr){
    if(compare_arr[4] > compare_arr[6]){
      console.log("max number is :"+compare_arr[4])
    }
    else{
      console.log("max number is :"+compare_arr[6])
    }
    console.log('-----------------------------')
  }

  this.min = function(compare_arr){
  if(compare_arr[4] < compare_arr[6]){
    console.log("min number is :"+compare_arr[4])
  }
  else{
    console.log("min number is :"+compare_arr[6])
  }
  console.log('-----------------------------')
  }

    if(arr[1] == '+'){
       this.addition(arr[0],arr[2])
       if(arr[3] == '+'){
        this.addition(add,arr[4])
       }else if(arr[3] == '-'){
        this.substraction(add,arr[4])
       }else if(arr[3] == '*'){
        this.multiplication(add,arr[4])
       } else if(arr[3] == '/'){
        this.division(add,arr[4])
       }
    }

    else if(arr[1] == '-'){
       this.substraction(arr[0],arr[2])
       if(arr[3] == '+'){
        this.addition(minus,arr[4])
       }else if(arr[3] == '-'){
        this.substraction(minus,arr[4])
       }else if(arr[3] == '*'){
        this.multiplication(minus,arr[4])
       } else if(arr[3] == '/'){
        this.division(minus,arr[4])
       }
    }

    else if (arr[1] == '*'){
       this.multiplication(arr[0],arr[2])
       if(arr[3] == '+'){
        this.addition(mul,arr[4])
       }else if(arr[3] == '-'){
        this.substraction(mul,arr[4])
       }else if(arr[3] == '*'){
        this.multiplication(mul,arr[4])
       } else if(arr[3] == '/'){
        this.division(mul,arr[4])
       }
    }

    else if (arr[1] == '/'){
      this.division(arr[0],arr[2])
       if(arr[3] == '+'){
        this.addition(div,arr[4])
       }else if(arr[3] == '-'){
        this.substraction(div,arr[4])
       }else if(arr[3] == '*'){
        this.multiplication(div,arr[4])
       } else if(arr[3] == '/'){
        this.division(div,arr[4])
       }
    }

    else if (max_arr == 'max')
    {
      this.max(compare_arr)
    }

    else if (min_arr == 'min'){
      this.min(compare_arr)
    }
    }

}

calculator = new Calculator();
calculator.evaluate("100 + 1");
calculator.evaluate("100 + 1 * 2");
calculator.evaluate("5 - 1");
calculator.evaluate("1 * 1");
calculator.evaluate("5 / 2");
calculator.evaluate('max(2,8)');
calculator.evaluate('min(8,0)');
calculator.store('person',20);
//calculator.evaluate('kiwi + 2',kiwi:2);
