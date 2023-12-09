// Sample ages
const ages = [5, 15, 25, 70];

// Categorize each age using if-else statements
ages.forEach(age => {
  let category = ''

  if (age < 13) {

    category = `child`

  } else if (age < 20) {

    category = `teen`

  } else if (age < 65) {

    category = `adult`

  } else if (age > 65) {

    category = `senior`

  }


  // Write your if-else statements here using specified age ranges

  console.log(`Age ${age}: ${category}`);
});