
const data = [
  {
    date: "2023, December 6 - 8",
    event: "WebTech Summit",
    role: "Keynote Speaker",
    city: "San Francisco, CA",
    site: "Moscone Center"
  },
  {
    date: "2023, December 12",
    event: 'Workshop "Responsive Design Strategies for Modern Websites"',
    role: "",
    city: "Copenhagen, Denmark",
    site: "TBD"
  },
  {
    date: "2024, January 15-17",
    event: "Developer's Paradise Conference",
    role: "Panelist",
    city: "Miami, FL",
    site: "Miami Convention Center"
  },
  {
    date: "2024, January 22-23",
    event: "CodeCraft Workshop",
    role: "Guest Instructor",
    city: "New York City, NY",
    site: "TBD"
  },
  {
    date: "2024, February 5-6",
    event: "Design & Develop Summit",
    role: "Featured Speaker",
    city: "Austin, TX",
    site: "Austin Convention Center"
  },
  {
    date: "2024, February 15",
    event: 'Workshop "Advanced JavaScript Techniques"',
    role: "",
    city: "Copenhagen, Denmark",
    site: "TBD"
  },
  {
    date: "2024, March 10-12",
    event: "WebMasters Expo",
    role: "Keynote Speaker",
    city: "Las Vegas, NV",
    site: "Las Vegas Convention Center"
  },
  {
    date: "2024, March 18",
    event: 'Workshop "Mastering CSS Grid Layouts"',
    role: "",
    city: "Copenhagen, Denmark",
    site: "TBD"
  },
  {
    date: "2024, April 5",
    event: 'Workshop "Optimizing Performance in Web Applications',
    role: "",
    city: "Copenhagen, Denmark",
    site: "TBD"
  },
  {
    date: "2024, 19 - 20",
    event: "Frontend Focus Conference",
    role: "Panel Moderator",
    city: "Seattle, WA",
    site: "Washington State Convention Center"
  },
  {
    date: "2024, May 8-9",
    event: "Developer's Summit",
    role: "Featured Speaker",
    city: "Chicago, IL",
    site: "McCormick Place"
  },
  {
    date: "2024, 15-16",
    event: "WebTech Summit",
    role: "Keynote Speaker",
    city: "Boston, MA",
    site: "Hynes Convention Center"
  },
  {
    date: "2024, June 6",
    event: 'Workshop "Building Progressive Web Apps"',
    role: "",
    city: "Copenhagen, Denmark",
    site: "Den Sorte Diamant"
  },
  {
    date: "2024, June 20",
    event: 'Workshop "Mastering React: Best Practices and Advanced Techniques"',
    role: "",
    city: "Aarhus, Denmark",
    site: "TBD",
  }
]

function createTourArticles() {

  const eventCardsSection = document.getElementById("event-cards")

  data.forEach(tourEvent => {
    const article = document.createElement("article")

    const keys = ["date", "event", "role", "city", "site"]

    for (let i = 0; i < keys.length; i++) {
      const paragraph = document.createElement("p")
      paragraph.innerText = tourEvent[keys[i]]
      const className = "tour-" + keys[i]
      paragraph.setAttribute("class", className)
      article.appendChild(paragraph)
    }

    eventCardsSection.appendChild(article)

  })


}


createTourArticles()


const dataTwo = [
  {
    imageSource: "./images/book_php.png",
    imageAlt: "Advanced PHP - From Hero to Zero Book",
    title: "Advanced PHP",
    subtitle: "From Hero to Zero Book",
    published: "2023",
    description: "Advanced PHP: From Zero to Hero is a groundbreaking book that unlocks the full potential of PHP programming. With meticulous detail, Lind guides readers through advanced concepts, empowering them to master complex topics such as object-oriented programming, database integration, and secure web application development. This comprehensive guide is a must-have for aspiring PHP developers seeking to elevate their skills to heroic heights."
  },
  {
    imageSource: "./images/book_css.png",
    imageAlt: "CSS for Developers Book",
    title: "CSS for Developers",
    subtitle: "A Visual Journey",
    published: "2022",
    description: "This work offers an immersive exploration of CSS that transcends mere syntax. Through vivid illustrations and practical examples, Lind demystifies the intricacies of CSS, equipping developers with the tools to craft stunning, responsive designs. This visual masterpiece is an indispensable companion for developers seeking to elevate their CSS skills and create visually captivating websites."
  },
  {
    imageSource: "./images/book_js.png",
    imageAlt: "Advanced JavaScript Book",
    title: "Advanced JavaScript",
    subtitle: "Frameworkless",
    published: "2021",
    description: 'In "Advanced JavaScript: Frameworkless," Tristan Wede Lind revolutionizes the approach to JavaScript development. Breaking free from the confines of frameworks, Lind delves into the core principles and advanced techniques that empower developers to create robust, scalable, and framework-independent JavaScript applications. This essential guide unveils the true potential of JavaScript, transforming developers into true masters of the language.'
  },
  {
    imageSource: "./images/book_programming.png",
    imageAlt: "Basic Programming Book",
    title: "Basic Programming",
    subtitle: "Algorithms and Beyond",
    published: "2017",
    description: "A definitive guide that demystifies the fundamentals of programming. With clarity and precision, Lind introduces readers to essential concepts such as variables, loops, and conditionals, while also delving into the world of algorithms. This comprehensive resource equips aspiring programmers with the foundational knowledge needed to embark on a successful coding journey."
  },
  {
    imageSource: "./images/book_js_basic.png",
    imageAlt: "Basic JavaScript Book",
    title: "Basic JavaScript",
    subtitle: "Tweaking the Web",
    published: "2017",
    description: '"Basic JavaScript" is a transformative book that demystifies the building blocks of JavaScript. With practical examples and step-by-step instructions, Lind empowers readers to enhance websites with interactive elements and dynamic functionalities. This essential guide unlocks the power of JavaScript, enabling readers to tweak the web and create engaging user experiences.'
  },
  {
    imageSource: "./images/book_front_end.png",
    imageAlt: "Front-End Web Development Book",
    title: "Front-End Web Development",
    subtitle: "A Nice Introduction",
    published: "2016",
    description: "Tristan Wede Lind crafts a captivating journey into the world of front-end development. Lind artfully introduces readers to HTML, CSS, and JavaScript, unraveling the secrets of creating visually stunning and interactive websites. With its approachable style and comprehensive coverage, this book is the perfect starting point for aspiring front-end developers."
  }
]

function createBookArticles() {
  const bookCardsSection = document.getElementById("book-cards")

  dataTwo.forEach(book => {
    const article = document.createElement("article")

    const keys = ["imageSource", "imageAlt", "title", "subtitle", "published", "description"]

    const image = document.createElement("img")
    image.src = book['imageSource']
    image.alt = book['imageAlt']
    image.setAttribute("class", "book-image")
    article.appendChild(image)

    const h4 = document.createElement("h4")
    h4.innerText = book['title']
    h4.setAttribute("class", "book-title")
    article.appendChild(h4)

    for (let i = 3; i < keys.length; i++) {
      const paragraph = document.createElement("p")
      paragraph.innerText = book[keys[i]]
      const className = "book-" + keys[i]
      paragraph.setAttribute("class", className)
      article.appendChild(paragraph)
    }

    bookCardsSection.appendChild(article)
  })
}


createBookArticles()

