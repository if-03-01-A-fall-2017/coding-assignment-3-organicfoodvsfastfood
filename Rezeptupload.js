let titleArr   = [];
let titleInput;
function insert() {
 titleInput  = document.getElementById("title");
 titleArr.push( titleInput.value );
 titleInput.value = "";
 show();
}

function show() {
  let string="<b>All Elements of the Array :</b><br>";
  for(i = 0; i < titleArr.length; i++) {
    console.log(titleArr[i]);
  }
}
