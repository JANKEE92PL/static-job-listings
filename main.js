let job = document.querySelector(".job");
let wrapper = document.getElementById("wrapper");

const render = () => {
  fetch("jobs.json")
    .then((response) => response.json())
    .then((dataset) =>
      dataset.forEach((data) => {
        data;
      })
    );
};

render();

const createJob = () => {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  let newContent = document.createTextNode("Hi there and greetings!");
  wrapper.insertAdjacentHTML("beforeend", newContent);
};

createJob();
