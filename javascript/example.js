var count = 0 ;
var label_array = [];
// function validate() {
// 	console.log("in validate")
//   if( document.myForm.label.value == "" ) {
//      alert( "Please provide your label!" );
//      document.myForm.label.focus() ;
//      return false;
//   }
//   if( document.myForm.color.value == "" ) {
//      alert( "Please provide your color!" );
//      document.myForm.color.focus() ;
//      return false;
//   }
//   getlabel();
//   // return( true );
// }

function showform(){
document.getElementById("myForm").style.display="block";
}

function submitForm(){
    //document.getElementById("f1").submit();
    console.log('in get label');
    var label =document.getElementById("label").value ;
    var color =document.getElementById("color").value;
    label_array_fun(label,color);
    //document.getElementById("countername").innerHTML = label ;
    //document.getElementById("myForm").style.display="none"
      display_button();
    refreshForm();
}

function label_array_fun(label,color){
  var counter = {label,color}
  label_array.push(counter);
  console.log(label_array)

}

function display_button(){
var length = label_array.length
    for(var i=0;i<length;i++){
     var btn = document.createElement("BUTTON");
     btn.innerHTML = '    <div class="button_group"><button id=counter_minus onclick="return(decrement());"><span class = "minus"> - </span></button><button id="countername">' +label_array[i].label +'</button><button id="countervalue">0</button><button onclick="return(increment());"> <span class = "plus"> + </span></button></div>'
      document.body.appendChild(btn);
  }
}

function refreshForm(){
    document.getElementById("label").value = '';
    document.getElementById("color").value = '';
}

function increment(){
	count = count + 1;
	document.getElementById("countervalue").innerHTML = count;
  //document.getElementById("countername").innerHTML = "label"
}

function decrement(){
	count = count -1;
	document.getElementById("countervalue").innerHTML = count;
}

