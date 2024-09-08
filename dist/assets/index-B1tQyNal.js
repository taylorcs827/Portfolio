(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const r={1:{title:"Van Life",subtitle:"AirBnb Clone",img:"img/van_life_detail.png",descriptionIntro:"React Router & Database",descriptionDetails:"This React application is designed as a van rental platform reminiscent of Airbnb. It features a structured routing system using React Router. The main sections include a Home Page for general information, an About Page detailing the platform, and a Vans Page that lists available vans for rent. Each van has a Van Detail Page with in-depth information. Users can access a Login Page to manage their accounts.",html:"https://taylorcsvanlife.netlify.app"},2:{title:"Designo",subtitle:"Web Design",img:"img/designo_details.jpg",descriptionIntro:"Multi-page website design",descriptionDetails:"A multi-page website for a fictional web design company. The website is a responsive design that adapts to different screen sizes, ensuring an optimal layout on all devices. Interactive elements include hover states for user engagement. Additionally, the contact form provide validation, displaying specific error messages if the Name, Email Address, or Message fields are empty or if the Email Address is incorrectly formatted.",html:"https://taylorcs827designo.netlify.app"},3:{title:"Country ",subtitle:"REST API",img:"img/country_api_details.jpg",descriptionIntro:"REST API and React",descriptionDetails:"This program is a web application that uses a JavaScript framework/library to interact with the REST Countries API. It allows users to view a list of countries, search for specific countries, filter by region, and view detailed information about each country, including its border countries. The app is responsive to different screen sizes and includes hover and focus states for interactivity. Additionally, it features a toggle between light and dark mode for better user experience.",html:"https://taylorcs827countryapi.netlify.app/"},4:{title:"Tenzies",subtitle:"Game",img:"img/tenzies_detail.jpeg",descriptionIntro:"React Based Game",descriptionDetails:"A React app where players roll dice to match all values. It features dice holding, score tracking, and a confetti effect upon winning. The game uses React state hooks for managing dice and scores, and useEffect for detecting a win and updating the best score.",html:"https://taylorcs827tenzies.netlify.app"},5:{title:"Rock Paper ",subtitle:"Scissors Game",img:"img/rockpaperscissors_detail.jpeg",descriptionIntro:"ROCK PAPER SCISSORS SHOOT!",descriptionDetails:"A JavaScript-based Rock Paper Scissors game with interactive UI. The game includes player and house choices, score tracking, and modal rules. It features dynamic choice display, result evaluation, and a scoring system with play-again functionality.",html:"https://taylorcs827rps.netlify.app"}},c=document.querySelector(".nav-toggle"),l=document.querySelectorAll(".nav__link");c.addEventListener("click",()=>{document.body.classList.toggle("nav-open")});l.forEach(s=>{s.addEventListener("click",()=>{document.body.classList.remove("nav-open")})});function d(s){return new URLSearchParams(window.location.search).get(s)}if(window.location.pathname.includes("portfolio-item.html")){const s=d("id"),t=r[s];if(t){const a=document.querySelector(".project-display-container");a.innerHTML=`
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    ${t.title} <strong>${t.subtitle}</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">${t.descriptionIntro}</p>
                <img src="${t.img}" alt="${t.title}" class="intro__img">
            </section>
            
            <div class="portfolio-item-individual">
                <p>${t.descriptionDetails}</p>
                <p><a href="${t.html}" target="_blank">View Project</a></p>
            </div>
        `}else console.error("Project not found!")}
