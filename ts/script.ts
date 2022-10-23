var row:any=document.querySelector<HTMLDivElement>('.row');

var countStart:number=0;
var countEnd:number=4;


var fakeData=()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res:any)=>res.json())
    .then ((data:any)=>{  
        let div:string="";
        for (let x:number= countStart; x<countEnd; x++ ){
            div += `<div class="card ms-2 mt-2 col-md-3" style="width: 18rem;">
            <img class="w-20" src="${data[x].image}" class="card-img-top" alt="...">
            <div class="card-body d-flex justify-content-evenly flex-column ">
              <h5 class="card-title">${data[x].title}</h5>
              <p>${data[x].price}$</p>
              <a href="#" class="btn ">Add cart</a>
            </div>
          </div>`
        }
        row.innerHTML = div
});
}
document.querySelectorAll("button")[4].onclick = () => {
    countStart = 0;
    countEnd = 4;
    fakeData();
  };
  document.querySelectorAll("button")[5].onclick = () => {
      countStart = 4;
      countEnd = 8;
      fakeData();  
    };
  
    document.querySelectorAll("button")[6].onclick = () => {
      countStart = 8;
      countEnd = 12;
      fakeData();
    };
    document.querySelectorAll("button")[7].onclick = () => {
      countStart = 12;
      countEnd = 16;
      fakeData();
    };
    document.querySelectorAll("button")[8].onclick = () => {
      countStart = 34;
      countEnd = 45;
      fakeData();
    };

fakeData(); 