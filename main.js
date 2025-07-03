// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Deskripsi
  document.getElementById("about-description").innerText = aboutDescription;

  // Data Pribadi
  document.getElementById("data-pribadi").innerHTML = `
    <h5>DATA PRIBADI</h5>
    <table class="table align-middle">
      <tbody>
        ${dataPribadi.map(([label, value]) => `
          <tr>
            <td>${label}</td>
            <td>: ${value}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  // Pendidikan Formal
  document.getElementById("pendidikan-formal").innerHTML = `
    <h5>PENDIDIKAN FORMAL</h5>
    <table class="table align-middle">
      <tbody>
        ${pendidikanFormal.map(([tahun, sekolah]) => `
          <tr>
            <td>${tahun}</td>
            <td>${sekolah}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  // Pendidikan Informal
  document.getElementById("pendidikan-informal").innerHTML = `
    <h5>PENDIDIKAN INFORMAL</h5>
    <table class="table align-middle">
      <tbody>
        ${pendidikanInformal.map(([tahun, pelatihan]) => `
          <tr>
            <td>${tahun}</td>
            <td>: ${pelatihan}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  // Projects
  document.getElementById("projects-list").innerHTML = projects.map(project => `
    <div class="col-md-4 mb-3">
      <div class="card h-100">
        <img src="${project.img}" class="card-img-top" alt="Project">
        <div class="card-body d-flex flex-column">
          <p class="card-text">${project.desc}</p>
          <a href="${project.link}" target="_blank" class="btn btn-success mt-auto">View Project</a>
        </div>
      </div>
    </div>
  `).join("");
});
