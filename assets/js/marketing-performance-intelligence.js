document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector("#marketing-accordion");

  if (!accordion) return;

  const collapses = accordion.querySelectorAll(".accordion-collapse");

  collapses.forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", function () {
      const item = this.closest(".accordion-item");
      const imgId = item.getAttribute("data-img");

      const section = accordion.closest(".core-solutions");
      const images = section.querySelectorAll(".dashboard-image");

      images.forEach((img) => img.classList.remove("active"));

      const target = section.querySelector("#" + imgId);
      if (target) target.classList.add("active");
    });
  });
});
