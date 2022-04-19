let job = document.querySelector(".job");
let wrapper = document.getElementById("wrapper");

const render = () => {
  fetch("jobs.json")
    .then((response) => response.json())
    .then((dataset) =>
      dataset.forEach((data) => {
        createJob(data);
      })
    );
};

render();

const createJob = (object) => {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  let insert = `<div class="job">
      <div class="box-left">
        <div class="box-logo">
          <div class="logo"><img src="images/${object.logo}" alt="logo"></div>
        </div>
        <div class="box-description">
          <div class="job-header">
            <h2 class="company">${object.company}</h2>
            <p class="chip">${object.keywords[0]}</p>
            <p class="chip">${object.keywords[1]}</p>
            <p class="chip">${object.keywords[2]}</p>
          </div>

          <div class="job-title">
            <h2 class="title">${object.title}</h2>
          </div>
          <div class="job-info">
            <p class="date">${object.info.date}</p>
            <p class="time">${object.info.time}</p>
            <p class="place">${object.info.place}</p>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="job-description">
          <p class="role">${object.role}</p>
          <p class="level">${object.level}</p>
          <p class="language">${object.languages[0]}</p>
          <p class="language">${object.languages[1]}</p>
          <p class="language">${object.languages[2]}</p>
        </div>
      </div>
    </div>`;
  wrapper.insertAdjacentHTML("beforeend", insert);
};
