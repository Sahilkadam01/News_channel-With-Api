let aside= document.querySelector(".right-partjs")
let cont1= document.querySelector(".cont1")
let cont2= document.querySelector(".cont2")
let cont3= document.querySelector(".cont3")
let cont4= document.querySelector(".cont4")
let marquee= document.querySelector("marquee")
let pop= document.querySelector(".pop")
let crossbtn= document.querySelector(".close-icon")
let closebtn= document.querySelector(".clsbtn")
let popData= document.querySelector(".pop-data")
let search= document.querySelector(".search-items")
let searchbtn= document.querySelector(".icons")
let searchData= document.querySelector(".search-data")
let homebtn= document.querySelector("button")
let newsdata= document.querySelector(".news-search")






// This js is for Aside bar only
let fetchdata=async ()=>
    {
       let data1=await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=25e932adabb7457f8b25ec09854d39e2")
       let data2=await data1.json()
       console.log(data2)
       data2.articles.forEach((ele) => { display(ele)});
    }
fetchdata()   

let display=(ele)=>{
    let card=document.createElement("card")
    card.setAttribute("class","cards")
    card.innerHTML=`<img src="${ele.urlToImage}" class="cardimg">
                     <p class="cardp"> Author Name:- ${ele.author}</p>
                     <p class="cardp"> Description:- ${ele.description.slice(0,50)}</p>`
          aside.append(card) 
          
          aside.addEventListener("click",()=>{
            pop.style.visibility="visible";
          })
}

// Here we start the js for conatiners section
let fetchdata1=async ()=>
    {
       let data1=await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-25&to=2024-06-25&sortBy=popularity&apiKey=25e932adabb7457f8b25ec09854d39e2")
       let data2=await data1.json()
       console.log(data2)
       data2.articles.forEach((ele) => {if (ele.urlToImage !=null) {display1(ele)} });
    }
fetchdata1()   

let display1=(ele)=>{
    let card1=document.createElement("card1")
    card1.setAttribute("class","card1234")
    card1.innerHTML=`<img src="${ele.urlToImage}" class="cardimg1234">
                     <p class="cardp"> Author Name:- ${ele.author}</p>
                     <p class="cardp"> Description:- ${ele.description.slice(0,50)}</p>`
          cont1.append(card1) ; 

          card1.addEventListener("click",()=>{
            pop.style.visibility="visible";
          })

}

// container 2

let fetchdata2=async ()=>
    {
       let data1=await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-25&to=2024-06-25&sortBy=popularity&apiKey=25e932adabb7457f8b25ec09854d39e2")
       let data2=await data1.json()
       console.log(data2)
       data2.articles.forEach((ele) => {if (ele.urlToImage !=null) {display2(ele)} });
    }
fetchdata2()   

let display2=(ele)=>{
    let card2=document.createElement("card2")
    card2.setAttribute("class","card1234")
    card2.innerHTML=`<img src="${ele.urlToImage}" class="cardimg1234">
                     <p class="cardp"> Author Name:- ${ele.author}</p>
                     <p class="cardp"> Description:- ${ele.description.slice(0,50)}</p>`
          cont2.append(card2) 
          
          card2.addEventListener("click",()=>{
            pop.style.visibility="visible";
          })
}

// conatiner 3
let fetchdata3=async ()=>
    {
       let data1=await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-25&to=2024-06-25&sortBy=popularity&apiKey=25e932adabb7457f8b25ec09854d39e2")
       let data2=await data1.json()
       console.log(data2)
       data2.articles.forEach((ele) => {if (ele.urlToImage !=null) {display3(ele)} });
    }
fetchdata3()   

let display3=(ele)=>{
    let card3=document.createElement("card3")
    card3.setAttribute("class","card1234")
    card3.innerHTML=`<img src="${ele.urlToImage}" class="cardimg1234">
                     <p class="cardp"> Author Name:- ${ele.author}</p>
                     <p class="cardp"> Description:- ${ele.description.slice(0,50)}</p>`
          cont3.append(card3) 
          
          card3.addEventListener("click",()=>{
            pop.style.visibility="visible";
          })
}

// container 4
let fetchdata4=async ()=>
    {
       let data1=await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-25&to=2024-06-25&sortBy=popularity&apiKey=25e932adabb7457f8b25ec09854d39e2")
       let data2=await data1.json()
       console.log(data2)
       data2.articles.forEach((ele) => {if (ele.urlToImage !=null) {display4(ele)} 
       marquee.innerHTML+=`<span>${ele.title} &nbsp &nbsp </span>`
       displayPopUpData(ele)
    });
    }
fetchdata4()   

let display4=(ele)=>{
    let card4=document.createElement("card4")
    card4.setAttribute("class","card1234")
    card4.innerHTML=`<img src="${ele.urlToImage}" class="cardimg1234">
                     <p class="cardp"> Author Name:- ${ele.author}</p>
                     <p class="cardp"> Description:- ${ele.description.slice(0,50)}</p>`
          cont4.append(card4)  

          card4.addEventListener("click",()=>{
            pop.style.visibility="visible";
          })
}

// here the js for clossing the popup

closebtn=addEventListener("click",closepopup)
crossbtn=addEventListener("click",closepopup)

function closepopup()
{
    pop.addEventListener("click",()=>{
        pop.style.visibility="hidden"
    })
}

let displayPopUpData=(ele)=> 
{
   let div=document.createElement("div")
   div.setAttribute("class","popUp")
   div.innerHTML=`<h1 class="poph1">${ele.author}</h1>
                   <p class="description"><mark>Description:-</mark>${ele.description}</p>`
                   popData.append(div)

}

// search field js start from here

searchbtn.addEventListener("click",()=>{
  searchData.style.visibility="visible"
})

search.addEventListener("change",()=>{
  console.log(search.value)
  fetchdata5(search.value)
})

homebtn.addEventListener("click",()=>{
  searchData.style.visibility="hidden"
})

let fetchdata5=async (categories)=>
  {
    let data1=await fetch(`https://newsapi.org/v2/everything?q=${categories}&from=2024-06-25&to=2024-06-25&sortBy=popularity&apiKey=25e932adabb7457f8b25ec09854d39e2`)
     let data2=await data1.json()
     console.log(data2)
     data2.articles.forEach((ele) => { if (ele.urlToImage !=null) {display5(ele)}});
  }
fetchdata5() 

let display5=(ele)=>{
  let card5=document.createElement("card5")
  card5.setAttribute("class","card1234")
  card5.innerHTML=`<img src="${ele.urlToImage}" class="cardimg1234">
                   <p class="cardp"> Author Name:- ${ele.author}</p>
                   <p class="cardp"> Description:- ${ele.description.slice(0,50)}</p>`
        newsdata.append(card5) ; 

        // card1.addEventListener("click",()=>{
        //   pop.style.visibility="visible";
        // })

}
