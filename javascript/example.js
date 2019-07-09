var count = 0 ;
var counter_array = [];

function validate() {
  console.log("in validate")
  if( document.getElementById("label").value == "" ) {
     alert( "Please provide your label!" );
     return false;
  }
  if( document.getElementById("color").value == "" ) {
     alert( "Please provide your color!" );
     return false;
  }
  return( true );
}

function showform(){
  document.getElementById("myForm").style.display="block";
}

function counter_array_fun(label,color){
  counter = {initial_count:0,label,color}
  counter_array.push(counter);
  console.log(counter_array)
}

function submitForm(){
  if(validate()){
    console.log('in get label');
    var label =document.getElementById("label").value;
    var color =document.getElementById("color").value;
    counter_array_fun(label,color);
    document.getElementById("myForm").style.display="none"
    display_button();
    refreshForm();
  }
}

function display_button(){
  var length = counter_array.length
  var btn = document.createElement("BUTTON");
  var br = document.createElement("br");
  for(var i=0;i<length;i++){
     btn.innerHTML = '<div class="button_group"> '+
     '<button id=counter_minus onclick="return(decrement('+i+'));" style="background-color:'+counter_array[i].color+'">'+
     '<span class = "minus"> - </span></button>'+
     '<button id="countername" style="background-color:'+counter_array[i].color+'">Label'+i+ ':' +counter_array[i].label +'</button>'+
     '<button id="'+i+'" style="background-color:'+counter_array[i].color+'">'+counter_array[i].initial_count +'</button>'+
     '<button style="background-color:'+counter_array[i].color+'" onclick="return(increment('+i+'));">'+
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

