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


// question 8

