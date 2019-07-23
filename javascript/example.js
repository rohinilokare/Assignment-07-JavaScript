var count = 0 ;
var counter_array = [];

function validate() {
  if( document.getElementById("label").value == "" ) {
     alert("Please provide your label!");
     return false;
  }
  if( document.getElementById("color").value == "" ) {
     alert("Please provide your color!");
     return false;
  }
  return true ;
}

function showForm(){
  document.getElementById("my_form").style.display="block";
}

function counterArrayFun(label,color){
  counter = {initial_count:0,label,color}
  counter_array.push(counter);
}

function submitForm(){
  if(validate()){
    var label =document.getElementById("label").value;
    var color =document.getElementById("color").value;
    counterArrayFun(label,color);
    document.getElementById("my_form").style.display="none"
    displayCounter();
    refreshForm();
  }
}

function displayCounter(){
  var length = counter_array.length
  var btn = document.createElement("button");
  var br = document.createElement("br");
  for(var counter_no=0;counter_no<length;counter_no++){
     btn.innerHTML = '<div class="button_group"> '+
     '<button id=counter_minus onclick="return(decrement('+counter_no+'));" style="background-color:'+counter_array[counter_no].color+'">'+
     '<span class = "minus"> - </span></button>'+
     '<button id="countername" style="background-color:'+counter_array[counter_no].color+'">Label '+counter_no+ ':' +counter_array[counter_no].label +'</button>'+
     '<button id="'+counter_no+'" style="background-color:'+counter_array[counter_no].color+'">'+counter_array[counter_no].initial_count +'</button>'+
     '<button style="background-color:'+counter_array[counter_no].color+'" onclick="return(increment('+counter_no+'));">'+
     ' <span class = "plus"> + </span>'+
     '</button>'+
     '</div>';

    document.body.appendChild(btn);
    document.body.appendChild(br);
  }
}

function refreshForm(){
  document.getElementById("label").value = '';
  document.getElementById("color").value = '#000000';
}

function increment(index){
  count = counter_array[index].initial_count ++ ;
  document.getElementById(index).innerHTML = count;
}

function decrement(index){
  count = counter_array[index].initial_count --;
  document.getElementById(index).innerHTML = count;
}

