// fetch('https://api.nationalize.io/?name=michael')
// .then(res => res.json())
// .then(data => snowInfo(data))
// .catch(err => console.log(err));

// function snowInfo(data = []){
//   console.log(data.name);
// }

// const API_URL = 'https://api.nationalize.io/?name=michael';
// async function fetchUsers() {
//  try{
//    const response = await fetch(API_URL)
//    const users = await response.json();
//    return users;
//   }catch(err){
//     console.error(err); 
//   }
// }
// fetchUsers().then(users => {
//  console.log(users.name); // fetched users
// });
let url = [];
//console.log(url);
// function myFunction() {
//   //var x = document.getElementById("myText").value;
//   //document.getElementById("demo").innerHTML = x;
//  // console.log(x);
//   fetch(url)
// .then(res => res.json())
// .then(data => snowInfo(data))
// .catch(err => console.log(err));

// function snowInfo(data = []){
//   console.log(data.name);
// }


// }
function coFunction() {
  //var x = document.getElementById("myText").value;
  //document.getElementById("demo").innerHTML = x;
 //console.log(x);
  fetch(url)
.then(res => res.json())
.then(data => snowInfo(data))
.catch(err => console.log(err));

function snowInfo(data = []){
  console.log(data.country[0].country_id);
  console.log(data.country[1].country_id);
 
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 1; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(data.country[i].country_id);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  
}



function teFunction() {
  //let url = " ";

//   var x = document.getElementById("myText").value;
//  // document.getElementById("demo").innerHTML = x;
//  console.log(x);


 //url.push(x);
  fetch(url)
.then(res => res.json())
.then(data => snowInfo(data))
.catch(err => console.log(err));

function snowInfo(data = []){
 let arr = [('country :'+ data.country[0].country_id), 
 ('country :'+data.country[1].country_id),
 ('probability :'+ data.country[0].probability), 
 ('probability :'+data.country[1].probability)
];
 
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 1; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 4; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(arr[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  
}








function myFunction() {
  //var x = document.getElementById("goast").value;
  //document.getElementById("demo").innerHTML = x;
 //console.log(x);
  fetch(url)
.then(res => res.json())
.then(data => snowInfo(data))
.catch(err => console.log(err));

function snowInfo(data = []){
  console.log(data.name);
 
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 1; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 1; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(data.name);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  

}



function prFunction() {
  //var x = document.getElementById("myText").value;
  //document.getElementById("demo").innerHTML = x;
 // console.log(x);
  fetch(url)
.then(res => res.json())
.then(data => snowInfo(data))
.catch(err => console.log(err));

function snowInfo(data = []){
  console.log(data.name);



//function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 2; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(data.country[i].probability);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
}
//}
function subFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
 console.log(x);
url.push(x);
}