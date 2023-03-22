var container = document.createElement('div');
container.className='container';
var row = document.createElement('div');
row.classList.add('row','m-3');
container.append(row);

var res = fetch('https://restcountries.com/v2/all');
res.then((data)=>data.json()).then((data1)=>foo(data1)).catch((error)=>console.log(error));
console.log(res)

function foo(data1){
  console.log(data1)
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=`<div class='col-md-4'><div class="card border-primary-mb-3 bg-dark" style="width: 18rem;">
        <div class="card-header bg-dark">
        <p class="card-text text-center text-light">${data1[i].name}</p>

      </div>
        <img class="card-img-top" src="${data1[i].flag}" alt="Card image cap">
        <div class="card-body text-primary">
        <p class="card-text text-white">Capital : ${data1[i].capital}</p>
          <p class="card-text text-white">Region : ${data1[i].region}</p>
          <p class="card-text text-white">Country Code : ${data1[i].alpha3Code}</p>
          <button type="button" class="btn btn-light text-center">Click for weather</button>

        </div>
      </div>
      </div>`
    }
    document.body.append(container)
}