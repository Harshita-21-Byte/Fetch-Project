let apiurl = "http://www.mocky.io/v2/5cc008de310000440a035fdf";
let list = document.getElementById('lists');
let books = document.querySelector('.books');

async function getBooks(){
        const response = await fetch(apiurl);
        let data =  await response.json();
        if(response){
            showData(data.book_array);
        }}

        getBooks(); 
function showData(data1) {
for(let i=0;i<data1.length;i++) {
    let row = `<li>${data1[i].book_title}</li>`
    list.innerHTML += row
}

list.onclick = function(e){
    let target = e.target;
    for(let i=0;i<data1.length;i++) {
        if(data1[i].book_title === e.target.innerHTML) {
            let details = `<img src=${data1[i].image} alt = ${data1[i].image}/>
            <p>Book Title:${data1[i].book_title}</p>
            <p>Author:${data1[i].author}</p>
            `
             list.innerHTML = null;
            books.innerHTML = details;
        }
    }
};
}
