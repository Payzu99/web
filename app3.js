let gif = document.querySelector("#loading");
let button = document.querySelector("button");
let url = "http://demo4296963.mockable.io/listCars";
function onStreamProcessed(cars){
	let outerDiv = document.querySelector("#cards");
    
	cars.forEach((car)=>{
		let div = document.createElement("div");
        let title = document.createElement("p");
        let price = document.createElement("p");
		div.innerHTML = car.maker+ " "+ car.model;
        div.classList.add("card");
        title.classList.add("title");
        price.classList.add("price");
        price.innerHTML = car.price;
        
        div.appendChild(title);
        div.appendChild(price);
        
		outerDiv.appendChild(div);
	});
    gif.style="display:none";  
}

function onSuccess(response){
        
	response.json().then(onStreamProcessed);
    button.textContent = "items are loaded";
    
    
}
function onFail(response){
    button.textContent = "Some error occured";
    gif.style = "display:none";
    
}

function load(){

    button.textContent = "Loading...";
    gif.style = "display:block";
	fetch(url).then(onSuccess,onFail);
    
}
