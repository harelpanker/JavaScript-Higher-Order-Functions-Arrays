const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ---------Foreach---------//
console.log("=======================================");
console.log("Foreach:");
// Old JS
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i].name);
}
// New JS
companies.forEach((companie) => {
    console.log(`${companie.start} - ${companie.end}`);
})
ages.forEach(age => {
    if(age % 2 == 1) {
        console.log(age);
    }
})

// ---------Filter---------//
console.log("=======================================");
console.log("Filter:");
// 1)
// First way to do that
let canDrink = [];
ages.forEach(age => {
    if(age >= 21) {
        canDrink.push(age);
    }
})
console.log(`They can drink ${canDrink}`);

// Filter way to do the same
let canNotDrink = ages.filter(age => {
    if(age <= 20) {
        return true
    }
})
// let canNotDrink = ages.filter(age => age <= 21);
console.log(`They can not drink ${canNotDrink}`);



// 2)
// Filter retail company's
let retailCompanies = companies.filter(company => {
    if(company.category === "Retail") {
        return true;
    }
});
console.log('The retail companies:');
console.log(retailCompanies);

// And the same
let retail = companies.filter(company => company.category === "Retail");
// console.log(retail);




// 3)
// Filter all companies from 80-90
let companies80 = companies.filter(company => {
    if(company.start <= 1990 && company.start >= 1980) {
        return true
    }
});
console.log('Companies that start at the 1980 - 1990:');
console.log(companies80);

// And the same from the 90
let companies90 = companies.filter(company => company.start >= 1990);
console.log('Companies that start at the 90\':');
console.log(companies90);



// 4)
// Get companies how lasted 10 years or more
let lasted = companies.filter(company => {
    if(company.end - company.start >= 10) {
        return true;
    }
});
console.log("companies how lasted 10 years or more:");
console.log(lasted);
// And the same
let lasted10 = companies.filter(company => company.end - company.start >= 10);
console.log(lasted10);


// ---------Map---------//
console.log("=======================================");
console.log("Map:");
// 1)
// Create array of company names:
let companyName = companies.map(company => {
    return company.name;
})
console.log(`Companies names:`);
console.log(companyName);
// Filter on the map array names
let companyOne = companyName.filter(name => {
    if(name === "Company One") {
        return true
    }
})
console.log(`Company 1:`);
console.log(companyOne);



// 2)
// Map of ages * 2
let agesTime2 = ages.map(age => age * 2);
console.log(`All ages * 2:`);
console.log(agesTime2);

let ages100 = agesTime2.filter(age => age >= 100);
console.log(`Filter the ages new array (ages * 2), and show 100+:`);
console.log(ages100);



// ---------Sort---------//
console.log("=======================================");
console.log("Sort:");

// 1)
// Sort the companies according to start year
let sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(`Sort the companies according to start year:`)
console.log(sortedCompanies);


// 2)
// Sort ages
let sortedAgeUp = ages.sort((a ,b) => (a > b ? 1 : -1));
console.log(`Sort the ages up:`)
console.log(sortedAgeUp);

let sortedAgeDown = ages.sort((a ,b) => (b > a ? 1 : -1));
console.log(`Sort the ages down:`)
console.log(sortedAgeDown);


// ---------Reduce---------//
console.log("=======================================");
console.log("Reduce:");

// 1)
// Add all the ages together:
let ageSum = ages.reduce((total, age) => {
    return total + age;
}, 0)
// And the same:
// let ageSum = ages.reduce((total, age) => total + age, 0)
console.log(`Add all the ages together:`)
console.log(ageSum);

// 2)
// Add all the years of all the companies
let companiesYears = companies.reduce((total, years) => {
    return total + (years.end - years.start);
}, 0)
// And the same:
// let companiesYears = companies.reduce((total, years) => total + (years.end - years.start), 0);
console.log(`Add all the years of all the companies:`);
console.log(companiesYears);



// Combine Methods:
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);