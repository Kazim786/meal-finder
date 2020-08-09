const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');

//Functions 

//search meal and fetch from API
async function searchMeal(e) {
    e.preventDefault(); //since its a submit event we should to preventDefault
    
    //clear single meal
    single_mealEl.innerHTML = '';

    //get search term

    const term = search.value
    
    //check for empty

    if(term.trim()){
       const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
       console.log(meal)
       console.log(meal.data.meals[0].strMeal)
       resultHeading.innerHTML = `<h2>Search Results for '${term}': </h2>`

       if(meal.meals === null){
           resultHeading.innerHTML = `There are no search results for ${term}. Try again!`
       }
       else {
           mealsEl.innerHTML = meal.meals.map(meal => `
            <div class= 'meal'>
                <img src= "${meal.strMealThumb} alt = ${meal.strMeal}" />
                <div class= "meal-info" data-mealID ="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                </div>
            </div>
            `)
            .join('')
       }
       //clear search text
       search.value = ""
    } 
    else{
        alert('Cant be blank')
    }
}

//EventListeners

submit.addEventListener('submit', searchMeal)