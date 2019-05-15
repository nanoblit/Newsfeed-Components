// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to expand";
    this.closeButton = this.createCloseButton();

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
  }

  createCloseButton() {
    const closeButton = document.createElement("span");
    closeButton.classList.add("closeButton");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => this.closeArticle());
    this.domElement.append(closeButton);

    return closeButton;
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    this.expandButton.textContent =
      this.expandButton.textContent === "Click to expand"
        ? "Click to hide"
        : "Click to expand";
  }

  closeArticle() {
    this.domElement.style.display = "none";
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articleData = [
  (dogsArticle = {
    header: "Dogs",
    date: "Nov 7th, 2017",
    "paragraph-1":
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nostrum earum? Nihil harum, et quidem nobis blanditiis repellat cumque soluta hic nesciunt quam voluptatibus! Similique provident, repudiandae exercitationem aspernatur cupiditate excepturi dicta voluptatem fugiat eveniet nobis eius sed rem.",
    "paragraph-2":
      "2222Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nostrum earum? Nihil harum, et quidem nobis blanditiis repellat cumque soluta hic nesciunt quam voluptatibus! Similique provident, repudiandae exercitationem aspernatur cupiditate excepturi dicta voluptatem fugiat eveniet nobis eius sed rem."
  }),
  (catsArticle = {
    header: "Dogs",
    date: "Nov 7th, 2017",
    "paragraph-1":
      "3333Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nostrum earum? Nihil harum, et quidem nobis blanditiis repellat cumque soluta hic nesciunt quam voluptatibus! Similique provident, repudiandae exercitationem aspernatur cupiditate excepturi dicta voluptatem fugiat eveniet nobis eius sed rem.",
    "paragraph-2":
      "4444Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nostrum earum? Nihil harum, et quidem nobis blanditiis repellat cumque soluta hic nesciunt quam voluptatibus! Similique provident, repudiandae exercitationem aspernatur cupiditate excepturi dicta voluptatem fugiat eveniet nobis eius sed rem.",
    "paragraph-3":
      "5555Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit in nostrum earum? Nihil harum, et quidem nobis blanditiis repellat cumque soluta hic nesciunt quam voluptatibus! Similique provident, repudiandae exercitationem aspernatur cupiditate excepturi dicta voluptatem fugiat eveniet nobis eius sed rem."
  })
];

function buildArticle(data) {
  const article = document.createElement("div");
  article.classList.add("article");

  const header = document.createElement("h2");
  header.textContent = data.header;

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = data.date;

  let paragraphs = [];
  for (let i = 1; ; i++) {
    if (data[`paragraph-${i}`] === undefined) break;
    paragraphs.push(data[`paragraph-${i}`]);
  }
  paragraphs = paragraphs.map(paragraphText => {
    const element = document.createElement("p");
    element.textContent = paragraphText;
    return element;
  });

  const span = document.createElement("span");
  span.classList.add("expandButton");

  article.append(header);
  article.append(date);
  for (let paragraph of paragraphs) {
    article.append(paragraph);
  }
  article.append(span);

  document.querySelector(".articles").append(article);
}

for (let article of articleData) {
  buildArticle(article);
}

const articles = document.querySelectorAll(".article");

articles.forEach(article => new Article(article));
