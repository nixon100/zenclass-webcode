async function fetchData() {
  try {
    const url = "https://api.nationalize.io/"; // replace with your API URL
    const name = document.getElementById("myText").value;
    const apiUrl = `${url}?name=${name}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    // console.log(data);
    // const demoElement = document.getElementById("demo");
    const h3Element = document.getElementById("h3");
    const h4Element = document.getElementById("h4");
    const h2Element = document.getElementById("h2");
    // var span = document.querySelector("#h3 span")
    if (h2Element) {
      // h2Element.innerHTML = `Name : <span class="name">${data.name} </span> `;
      h2Element.innerHTML = data.name

    }
    if (h3Element) {
      h3Element.innerHTML = `Nationality : <span>${data.country[0].country_id}</span> 
                            Probability :<span>${data.country[0].probability} </span>`;
    }
    if (h4Element) {
      h4Element.innerHTML = `Nationality : <span>${data.country[1].country_id}</span>
                            Probability :<span> , ${data.country[1].probability}</span>`; 
        
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

