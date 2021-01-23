const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1

const cat = {
    complain: function() {
        console.log("Meow");
    }
};

cat.complain();

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// question 3

heading.style.fontSize = "2rem";

// question 4

heading.className = "subheading";

// question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color ="red";
}

// question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

function catLoop(list) {

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
    
}

catLoop(cats);

// question 8

const container = document.querySelector(".cat-container");

function createCats(cats) {
    let catsItems = "";
    var i;

    for(let i = 0; i < cats.length; i++) {
      let name = cats[i].name;
      let age = cats[i].age;

      if (age == undefined) {
        age = "Age unknown";
      }
        catsItems = catsItems + "<div>" + "<h5>" + name + "</h5>" + "<p>" + age + "</p>" + "</div>";
        container.innerHTML = catsItems;
    }
}

createCats(cats);