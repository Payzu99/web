let news = document.querySelector("#news");

function sport(){
    let newsport = {"h":"Messi scored 5 goals","text":"Messi scored 5 goals in last match and became top-scorer of the league"};

    news.innerHTML = "<h1>" + newsport.h + "</h1>" + newsport.text;
}
document.querySelector("#sport").addEventListener("click",sport);

function politics(){
    let politica = {"h":"Trump visited UK","text":"Trump started his foreign tour by visiting UK"}
    news.innerHTML = "<h1>" + politica.h + "</h1>" + politica.text;
}
document.querySelector("#politics").addEventListener("click",politics);

function bussiness(){
    let bussinessnews = {"h":"Dow Jones index has fallen","text":"Dow Jones index has fallen, because of prices for petrol"}
    news.innerHTML = "<h1>" + bussinessnews.h + "</h1>" + bussinessnews.text;
}
document.querySelector("#bussiness").addEventListener("click",bussiness);