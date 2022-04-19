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
  let insert = `<div class="job">
      <div class="box-left">
        <div class="box-logo">
          <div class="logo"><img src="images/${logo}" alt="logo"></div>
        </div>
        <div class="box-description">
          <div class="job-header">
            <h2 class="company">Photosnap</h2>
            <p class="chip">New!</p>
            <p class="chip">Featured</p>
          </div>

          <div class="job-title">
            <h2 class="title">Senior Frontend Developer</h2>
          </div>
          <div class="job-info">
            <p class="date">1d ago</p>
            <p class="time">Full Time</p>
            <p class="place">USA only</p>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="job-description">
          <p class="role">Frontend</p>
          <p class="level">Senior</p>
          <p class="language">HTML</p>
          <p class="language">CSS</p>
          <p class="language">JavaScript</p>
        </div>
      </div>
    </div>`;
  wrapper.insertAdjacentHTML("beforeend", insert);
};

createJob();
