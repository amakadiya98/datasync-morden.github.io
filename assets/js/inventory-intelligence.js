document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector("#inventory-accordion");
  if (!accordion) return;
  const collapses = accordion.querySelectorAll(".accordion-collapse");

  collapses.forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", function () {
      const item = this.closest(".accordion-item");
      const imgId = item.getAttribute("data-img");

      const section = accordion.closest(".core-solutions");
      const images = section.querySelectorAll(".dashboard-image");

      // remove all active
      images.forEach((img) => img.classList.remove("active"));

      // show correct one
      const target = section.querySelector("#" + imgId);
      if (target) target.classList.add("active");
    });
  });
});
