document.addEventListener("DOMContentLoaded", function () {
  const collapses1 = document.querySelectorAll(
    "#solutionsAccordion1 .accordion-collapse",
  );
  const images1 = document
    .querySelectorAll("#solutionsAccordion1")[0]
    .closest(".row")
    .querySelectorAll(".solutions-left .dashboard-image");

  collapses1.forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", function () {
      const item = this.closest(".accordion-item");
      const imgId = item.getAttribute("data-img");

      images1.forEach((img) => img.classList.remove("active"));

      const target = document.getElementById(imgId);
      if (target) target.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const collapses2 = document.querySelectorAll(
    "#solutionsAccordion2 .accordion-collapse",
  );
  const images2 = document
    .querySelectorAll("#solutionsAccordion2")[0]
    .closest(".row")
    .querySelectorAll(".solutions-left .dashboard-image");

  collapses2.forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", function () {
      const item = this.closest(".accordion-item");
      const imgId = item.getAttribute("data-img");

      images2.forEach((img) => img.classList.remove("active"));

      const target = document.getElementById(imgId);
      if (target) target.classList.add("active");
    });
  });
});
