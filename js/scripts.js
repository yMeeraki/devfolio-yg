function projectsFactory(
  projectName,
  category,
  description,
  techUsed,
  demoLink,
  repoLink,
  image
) {
  return {
    projectName,
    category,
    description,
    techUsed,
    demoLink,
    repoLink,
    image,
  };
}

const allProjects = [
  // Full-Stack Projects
  projectsFactory(
    "YouTube Clone",
    "Full-Stack Project",
    "A full-fledged video streaming platform with authentication and video uploads.",
    "React, Node.js, Express, MongoDB, Firebase",
    "#",
    "#",
    "https://placehold.co/600x400?text=YouTube+Clone"
    ),
      projectsFactory(
    "Responsive Blog (Bootstrap & jQuery)",
    "Frontend Project",
    "A visually appealing, interactive blog using Bootstrap & jQuery.",
    "Bootstrap, jQuery, HTML, CSS",
    "#",
    "#",
    "https://placehold.co/600x400?text=Responsive+Blog"
  ),
  projectsFactory(
    "Responsive News Blog (React)",
    "Frontend Project",
    "A fast, API-powered news blog with a clean UI.",
    "React, REST API, Bootstrap",
    "#",
    "#",
    "https://placehold.co/600x400?text=News+Blog"
  ),
  projectsFactory(
    "AI Image Generator",
    "Full-Stack Project",
    "AI-powered app generating images from text prompts.",
    "React, Node.js, Express, OpenAI API, Tailwind CSS",
    "#",
    "#",
    "https://placehold.co/600x400?text=AI+Image+Generator"
    ),
    projectsFactory(
    "React Quiz App / E-Commerce (Context API)",
    "Frontend Project",
    "An interactive quiz or e-commerce app using Context API for state management.",
    "React, Context API, Material UI",
    "#",
    "#",
    "https://placehold.co/600x400?text=Quiz+App"
  ),
  projectsFactory(
    "CRUD App",
    "Full-Stack Project",
    "A full-stack CRUD application integrating frontend & backend.",
    "React, Node.js, Express, MongoDB",
    "#",
    "#",
    "https://placehold.co/600x400?text=CRUD+App"
  ),
  projectsFactory(
    "Authentication App (JWT)",
    "Full-Stack Project",
    "Secure authentication system with user login, JWT authorization.",
    "React, Node.js, Express, MongoDB, JWT",
    "#",
    "#",
    "https://placehold.co/600x400?text=Auth+App"
  ),




  projectsFactory(
    "Product Cart (Redux + React-Redux)",
    "Frontend Project",
    "Shopping cart system with Redux for state management.",
    "React, Redux, React-Redux, Local Storage",
    "#",
    "#",
    "https://placehold.co/600x400?text=Redux+Cart+1"
  ),
  projectsFactory(
    "Product Cart (Redux + Redux Toolkit)",
    "Frontend Project",
    "Optimized e-commerce UI using Redux Toolkit.",
    "React, Redux Toolkit, Material UI",
    "#",
    "#",
    "https://placehold.co/600x400?text=Redux+Cart+2"
  ),
];

// console.log(allProjects);
const row = document.querySelector("#row");

displayProjects(allProjects);

function displayProjects(projects) {
    row.textContent = '';
  projects.forEach((project) => {
    

    const col = document.createElement("div");
    col.className = "col";
    

    const card = document.createElement("div");
    card.className =
      "card text-bg-dark border-info h-100 justify-content-center align-items-center p-3 ";
   

    const category = document.createElement("p");
    category.className = "card-header lead";
    category.textContent = project.category;
    
      
      const image = document.createElement("img");
        image.className = "card-img-top";
        image.src = project.image;
        image.alt = project.name;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title lead text-info text-center";
        title.textContent = project.projectName;

        const description = document.createElement("p");
        description.className = "card-text lead";
        description.textContent = project.description;

        const techUsed = document.createElement("p");
        techUsed.className = "card-text";
        techUsed.textContent = `Tech Used: ${project.techUsed}`;

        const cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";

        const demoButton = document.createElement("a");
        demoButton.href = project.demoLink;
        demoButton.className = "btn btn-outline-info";
        demoButton.textContent = "View Demo";

        const repoButton = document.createElement("a");
        repoButton.href = project.repoLink;
        repoButton.className = "btn btn-outline-light ms-2";
        repoButton.textContent = "View Repo";

        // Append elements
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(techUsed);
        cardFooter.appendChild(demoButton);
        cardFooter.appendChild(repoButton);

        card.appendChild(category);
        card.appendChild(image);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        col.appendChild(card);
        row.appendChild(col);
  });
}



// {/* <div class="col"
// <div class="card text-bg-dark border-info h-100 justify-content-center align-items-center p-3">
//     <div class="card-header">
//         Frontend Project
//     </div>
//     <img src="https://placehold.co/600x400?text=Hello\nWorld" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Name</h5>
//         <p class="card-text">Description</p>
//         <p class="card-text">Tech Used</p>
//     </div>
//     <div class="card-footer">

//             <a href="#" class="btn btn-outline-info">View Demo</a>

//             <a href="#" class="btn btn-outline-light">View Repo</a>

//     </div>
// </div>
// </div>
