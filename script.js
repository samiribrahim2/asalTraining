"use strict";

document.getElementById("menu-icon").addEventListener("click", () => {
  // console.log("clicked");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});
document.querySelector(".mobile-menu").addEventListener("click", () => {
  console.log("clicked");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});
let darkMode = false;
document.getElementById("dark-mode").addEventListener("click", () => {
    // console.log("clicked");
    if(!darkMode){
        document.documentElement.style.setProperty("--secondry-color" , "#302e2e")
        document.documentElement.style.setProperty("--dark-primary-color" , "#f2f2f2")
    }
    else{
          document.documentElement.style.setProperty("--secondry-color" , "#f2f2f2")
          document.documentElement.style.setProperty("--dark-primary-color" , "#302e2e")
    }

    darkMode = !darkMode ;
});
const colorPicker = document.getElementById("inputcolor");
document.getElementById("color").addEventListener("click" , ()=>{

  document.getElementById("inputcolor").classList.toggle("hidden");
})

colorPicker.addEventListener("input" , ()=>{
  document.documentElement.style.setProperty("--primary-color" , colorPicker.value )
})

document.getElementById("sreachbutton").addEventListener("click" , ()=>{
  if( document.getElementById("searchBox").classList.contains("hidden")){
  document.getElementById("searchBox").classList.remove("hidden");
  }
  else{
      document.getElementById("searchBox").classList.add("hidden");
  }
})

const searchBox = document.getElementById("searchBox");
const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
elements.forEach(el => el.dataset.original = el.innerHTML);
searchBox.addEventListener("input", () => {
  const word = searchBox.value.trim().toLowerCase();
  elements.forEach(el => {
    el.innerHTML = el.dataset.original;
    if (word === "") return; 
    const content = el.innerHTML;
    const regex = new RegExp(`(${word})`, "gi");
    el.innerHTML = content.replace(regex, `<span class="highlight">$1</span>`);
  });
});

const container = document.getElementsByClassName("bookcards")[0];

for(let i = 1 ; i<=15 ; i++){
   const card = document.createElement("div");
   card.className="Book_card";
   card.innerHTML=`
    
          <img src="image/book_${i}.jpg" alt="" />
          <div class="bookdetails">
            <h4>Featured Books</h4>
            <p>
              Jhon Deo <br />
              <span class="genres">trailer , Horror , Romance</span><br />
              <span class="price"
                >$25.50 <sub><del class="old-price">28,60</del></sub></span
              >
            </p>
            <button class="FeaturedBtn" id="FeaturedBtn">Learn More</button>
          </div>

   `
container.appendChild(card)
}

const container2 = document.getElementsByClassName("arrival")[0];

for(let i = 1 ; i<=8 ; i++){
   const card = document.createElement("div");
   card.className="arrivalcard";
   card.innerHTML=`
    
        <img src="image/arrival_${i}.jpg" alt="" />
          <div class="arrivaldetails">
            <p>New Arrivals</p>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star checkedclass"></i>
            <i class="fa-solid fa-star-half-stroke checkedclass"></i>
            <br />
            <button id="ArrivalsBtn">Learn more</button>
          </div>

   `
container2.appendChild(card)
}

const container3 = document.getElementsByClassName("Review-cards")[0];

for(let i = 1 ; i<=4 ; i++){
   const card = document.createElement("div");
   card.className="Review-profile cyan-shadow";
   card.innerHTML=`
    
        <img src="image/review_${i}.png" alt="Reviewer_1" />
          <p class="profile-name">John Doe</p>
          <p class="profile-review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos
            doloribus iure distinctio! Eos dolorem quam, nisi amet saepe totam,
            quas quidem laboriosam dolore, tenetur itaque nostrum voluptas
            excepturi aut.
          </p>
          <div class="rates">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
          </div>

   `
container3.appendChild(card)
}

const container4 = document.getElementsByClassName("OurBlog-container")[0];

for(let i = 1 ; i<=3 ; i++){
   const card = document.createElement("div");
   card.className="OurBlog-card shadow";
   card.innerHTML=`
    
       <div class="OurBlog-image">
            <img src="image/blog_${i}.jpg" alt="blog_${i}" />
          </div>
          <div class="OurBlog-context">
            <p>Bloger</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam,
              quos quis quasi ut impedit reiciendis voluptatem rem esse ratione
              omnis, laudantium earum. Aperiam nesciunt dolore aliquam repellat
              consequatur amet ducimus.
            </p>
          </div>
          <div class="OurBlog-icons">
            <i class="fa-solid fa-calendar-days"></i>
            <i class="fa-solid fa-heart"></i>
          </div>

   `
container4.appendChild(card)
}
