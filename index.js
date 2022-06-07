//Smartphone app random cocktail

async function getRandomCocktail() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.drinks[0]);
    let random = data.drinks[0].strDrink;
    let getPicture = data.drinks[0].strDrinkThumbs;
    let measureOne = data.drinks[0].strMeasure1;
    let measureTwo = data.drinks[0].strMeasure2;
    let measureThree = data.drinks[0].strMeasure3;
    let measureFour = data.drinks[0].strMeasure4;

    //apply name of cocktail with an append to the document + styling to the name
    const nameOfCocktail = document.createElement("h1");
    let newContent = document.createTextNode(random);
    nameOfCocktail.append(newContent);
    document.body.append(nameOfCocktail);
    nameOfCocktail.style.textAlign = 'center'
    nameOfCocktail.style.fontSize = "50px";

    //apply picture of cocktail with an append + styling of the picture
    let img = document.createElement("img");
    img.style.width = "420px";
    img.style.height = "300px";
    img.style.marginLeft = "-15px";
    img.style.objectFit ="cover";
    img.src = data.drinks[0].strDrinkThumb;
    document.body.append(img);

    //ingredient for the cocktail
    let ingredientOne = document.createElement("h2");
    ingredientOne.innerHTML = measureOne + " " + data.drinks[0].strIngredient1;
    document.body.append(ingredientOne);

    let ingredientTwo = document.createElement("h2");
    ingredientTwo.innerHTML = measureTwo + " " + data.drinks[0].strIngredient2;
    document.body.append(ingredientTwo);

    let ingredientThree = document.createElement("h2");
    ingredientThree.innerHTML = measureThree + " " + data.drinks[0].strIngredient3;
    document.body.append(ingredientThree);

    let ingredientFour = document.createElement("h2");
    ingredientFour.innerHTML = measureFour + " " + data.drinks[0].strIngredient4;
    document.body.append(ingredientFour);

    if(false){
        ingredientThree.style.display = 'none';
    }
    if(ingredientFour === null){
        ingredientFour.style.display = 'none';
    }


    //append instructions for the cocktail to the app
    let instructions = document.createElement("h3");
    instructions.innerHTML = data.drinks[0].strInstructions;
    document.body.append(instructions);
    instructions.style.fontSize = "20px";
    instructions.style.fontStyle= "italic";
    instructions.style.marginTop = "70px";

    //style the background color
    document.body.style.backgroundColor = "#dcdcdc";

}
getRandomCocktail();

