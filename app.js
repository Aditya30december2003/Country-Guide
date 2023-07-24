const url = 'https://restcountries.com/v3.1/name/';

let country=document.getElementById('country');
const search=document.querySelector('.search');
let flag=document.querySelector('.flag')

function Info(){
    fetch(`${url}${country.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        if(data.length==1){
            flag.src=Object.values(data[0].flags)[0];
            document.querySelector('.name').innerHTML=data[0].name.common
            document.querySelector('.capital').innerHTML=data[0].capital[0];
            document.querySelector('.continent').innerHTML=data[0].continents[0];
            document.querySelector('.population').innerHTML=data[0].population;
            document.querySelector('.currency').innerHTML= data[0].currencies[Object.keys(data[0].currencies)].name
            document.querySelector('.language').innerHTML=Object.values(data[0].languages);
        }
        else{
            flag.src=Object.values(data[1].flags)[0];
            document.querySelector('.name').innerHTML=data[1].name.common
            document.querySelector('.capital').innerHTML=data[1].capital[0];
            document.querySelector('.continent').innerHTML=data[1].continents[0];
            document.querySelector('.population').innerHTML=data[1].population;
            document.querySelector('.currency').innerHTML= data[1].currencies[Object.keys(data[1].currencies)].name
            document.querySelector('.language').innerHTML=Object.values(data[1].languages);
        }
    })
}

search.addEventListener('click',()=>{
   Info();
   document.querySelector('.country-info').style.display='block'
})




