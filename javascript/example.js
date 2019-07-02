var count = 0
function validate() {
  if( document.myForm.lable.value == "" ) {
     alert( "Please provide your lable!" );
     document.myForm.lable.focus() ;
     return false;
  }
  if( document.myForm.color.value == "" ) {
     alert( "Please provide your color!" );
     document.myForm.color.focus() ;
     return false;
  }
  return( true );

  getLable();
  myFunction();
}

	function getLable(){
	var lable =document.getElementById("lable").value;
    document.getElementById("countername").innerHTML = "lable";
  var color =document.getElementById("color").value;
    document.getElementById("countername").value = color;
}
function increment(){
	count = count + 1
	document.getElementById("countervalue").innerHTML = count
}

function decrement(){
	count = count -1
	document.getElementById("countervalue").innerHTML = count

}
