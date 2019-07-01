flag = false
function Calculator(){

  this.store =function(obj){
     this.store_key = Object.keys(obj)
     this.store_val = Object.values(obj)
  }

  this.evaluate = function(str,object1,object2)
  {
    this.key1
    this.value1
    this.key2
    this.value2

    var arr = str.split(" ");

    if(object1){
    this.key1 = Object.keys(object1)
    this.value1 = Object.values(object1)
    console.log('value of '+ this.key1+' is :'+this.value1)
    }

    if(object2){
    this.key2 = Object.keys(object2)
    this.value2 = Object.values(object2)
    console.log('value of '+ this.key2+' is :'+this.value2)
    }

    if(arr[0] == this.store_key){
      arr[0] = this.store_val
      console.log('-------------------------------')
    }else if(arr[0] == this.key1){
      arr[0] = this.value1
    }else if(arr[0] == this.key2){
      arr[0] = this.value2
    }

    var compare_arr = str.split('');
    console.log("String is :"+str)
    max_arr = compare_arr[0]+compare_arr[1]+compare_arr[2]
    min_arr = compare_arr[0]+compare_arr[1]+compare_arr[2]
    round_arr = compare_arr[0]+compare_arr[1]+compare_arr[2]+compare_arr[3]+compare_arr[4]

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

    this.compare = function(a,b){
      if(a <= b){
        flag = true
        console.log(flag)
        console.log('-----------------------------')
      }
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
      else if( round_arr == 'round'){
        result = Math.round(compare_arr[6]+compare_arr[7]+compare_arr[8])
        console.log("round function answer : "+result)
        console.log('---------------------------------------')
      }
      else if(arr[1] == '<='){
        this.compare(arr[0],arr[2])
      }
  }
}

calculator = new Calculator();
calculator.evaluate('100 + 1');
calculator.evaluate('100 + 1 * 2');
calculator.evaluate('5 - 1');
calculator.evaluate('1 * 1');
calculator.evaluate('5 / 2');
calculator.evaluate('max(2,8)');
calculator.evaluate('min(8,0)');
calculator.store({peaches:20});
calculator.evaluate('peaches + 20');
calculator.evaluate('round(2.8)');
calculator.evaluate('kiwi + 2',{kiwi:2});
calculator.evaluate('peaches <= 30');
calculator.evaluate('kiwi + 2',{kiwi:2},{Kiwi:3});

