document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".custom-accordion");

  accordions.forEach((accordion) => {
    const collapses = accordion.querySelectorAll(".accordion-collapse");

    collapses.forEach((collapse) => {
      collapse.addEventListener("show.bs.collapse", function () {
        const item = this.closest(".accordion-item");
        const imgId = item.getAttribute("data-img");

        // find related image container
        const row = accordion.closest(".row");
        const images = row.querySelectorAll(".solutions-left .dashboard-image");

        // remove active from all
        images.forEach((img) => img.classList.remove("active"));

        // show correct image
        const target = document.getElementById(imgId);
        if (target) target.classList.add("active");
      });
    });
  });
});
