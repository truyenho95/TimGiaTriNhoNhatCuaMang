var x = prompt('Mời nhập mảng');
if (x=='') 
  var arr = [];
else 
  var arr = x.split(',');

function minArray(arr) {

  document.write('Mảng bạn nhập vào là: <br>');
  for (var i=0; i<arr.length; i++)
    document.write((i===arr.length-1) ? (arr[i]+'<br>') : (arr[i]+', '));

  if(arr.length == 0)
      return -1;

  var min = parseInt(arr[0]);


  for(var i = 1; i < arr.length; i++){
    if(parseInt(arr[i]) < min){
      min = parseInt(arr[i]);
    }
  }
  return min;
}

window.onload = () => {
  var min = minArray(arr);
  document.write("min: " + min);
}
