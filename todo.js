
function statusCheck(){
  let counter = 0;
  status = this.checked;
  var element = document.getElementById('id');
  element.onclick = statusCheck() 
  //  alert(hlo);
   
//   var element = document.getElementById('id');
//   function statusCheck() {
//     alert(hlo);
// }

//  element.onclick = statusCheck();
  

var promise = new Promise(function(resolve,reject){
  if(status == true){
  counter++;ffgc
  }
  // else{
  //   counter--;
  // }
  if(counter == 5){
    resolve("Congrats 5 Tasks have been successfully completed!");
  }
  // else{
  //   reject("Your task is incomplete!!");
  // }
});
promise
.then(function(s){
  console.log(s);
})
}
// .catch(function(e){
//   console.log(e);
// })

var xhttp = new XMLHttpRequest;

// eventlistener
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4) {
    if (xhttp.status == 200) {
      // alert("successful");
      //  alert(xhttp.responseText);
      let result_data = JSON.parse(xhttp.responseText);
      let output = result_data;
      //  console.log(output);

      let html_content = "<tr><th>UserId</th><th>Id</th><th>Title</th><th>Completed</th></tr>";
      // console.log(html_content);
      for (let i = 0; i < output.length; ++i) {
        let current_record = output[i];
        html_content = html_content + 
                       "<tr><td>" + current_record.userId + "</td><td>" + current_record.id + "</td><td>" + current_record.title + "</td><td><input type='checkbox' class='chkbox'" + ((output[i].completed == true) ? 'checked' : '') + " ></td></tr>";
        // html_content = html_content +"<td><input type='checkbox' class='chkbox'" + ((item[i].completed == true) ? 'checked' : '') + " ></td>";
      }
      document.getElementById("result_area").innerHTML = html_content;
    }

  }
  // else{
  //     alert("error loading");
  // }
}
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  document.getElementById("populate").addEventListener("click", function () {
    xhttp.send();
  })
