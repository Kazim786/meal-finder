const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');


//Functions 

//search meal and fetch from API
const searchMeal = (e) => {
    e.preventDefault(); //since its a submit event we should to preventDefault
    
    //clear single meal
    single_mealEl.innerHTML = '';

    //get search term

    const term = search.value
    console.log(term)
}

//EventListeners

submit.addEventListener('submit', searchMeal)