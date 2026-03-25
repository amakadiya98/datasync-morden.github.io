// Accordion image changes
$(".accordion-collapse").on("show.bs.collapse", function () {
  let firstAccordionIndex = $(this)
    .closest("#solutionsAccordion1 .accordion-item")
    .index();
  let secondAccordionIndex = $(this)
    .closest("#solutionsAccordion2 .accordion-item")
    .index();
  let smartPricingAccordionIndex = $(this)
    .closest("#smart-pricing-accordion .accordion-item")
    .index();
  let inventoryAccordionIndex = $(this)
    .closest("#inventory-accordion .accordion-item")
    .index();
  let marketingAccordionIndex = $(this)
    .closest("#marketing-accordion .accordion-item")
    .index();
  let customerInsightAccordionIndex = $(this)
    .closest("#customer-insight-accordion .accordion-item")
    .index();
  let syncAiAccordionIndex = $(this)
    .closest("#sync-ai-accordion .accordion-item")
    .index();

  let firstAccordionImages = [
    "./assets/images/home/dashbord-commerce-performance.png",
    "./assets/images/home/dashboard-SKU-performance.png",
    "./assets/images/home/dashboard-buy-box-score.png",
    "./assets/images/home/dashboard-MP Traffic Metrics.png",
    "./assets/images/home/dashboard-MP Inventory Management.png",
  ];

  let secondAccordionImages = [
    "./assets/images/home/dashboard-Trends (Attribute-Level).png",
    "./assets/images/home/dashboard-Basket Analytics.png",
    "./assets/images/home/dashboard-Cancellations & Returns.png",
    "./assets/images/home/dashboard-Remittance.png",
  ];

  let smartPricingAccordionImages = [
    "./assets/images/home/dashboard-Pricing Engine.png",
    "./assets/images/home/dashboard-Promo Manager.png",
    "./assets/images/home/dashboard-Smart Pricing Insights.png",
    "./assets/images/home/dashboard-Meet-Beat Score.png",
  ];

  let inventoryAccordionImages = [
    "./assets/images/home/dashboard-Meet-Beat Score.png",
    "./assets/images/home/dashboard-Promo Manager.png",
    "./assets/images/home/dashboard-Smart Pricing Insights.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
  ];

  let marketingAccordionImages = [
    "./assets/images/home/dashboard-Meet-Beat Score.png",
    "./assets/images/home/dashboard-Promo Manager.png",
    "./assets/images/home/dashboard-Smart Pricing Insights.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
    "./assets/images/home/dashboard-Meet-Beat Score.png",
    "./assets/images/home/dashboard-Promo Manager.png",
    "./assets/images/home/dashboard-Smart Pricing Insights.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
  ];

  let customerInsightAccordionImages = [
    "./assets/images/home/dashboard-Meet-Beat Score.png",
    "./assets/images/home/dashboard-Promo Manager.png",
    "./assets/images/home/dashboard-Smart Pricing Insights.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
  ];

  let syncAiAccordionImages = [
    "./assets/images/home/dashboard-Meet-Beat Score.png",
    "./assets/images/home/dashboard-Promo Manager.png",
    "./assets/images/home/dashboard-Smart Pricing Insights.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
    "./assets/images/home/dashboard-Pricing Engine.png",
  ];

  let container = $(this).closest(".core-solutions-content");

  if (smartPricingAccordionIndex !== -1) {
    container
      .find(".dashboard-image")
      .attr("src", smartPricingAccordionImages[smartPricingAccordionIndex]);
  }

  if (inventoryAccordionIndex !== -1) {
    container
      .find(".dashboard-image")
      .attr("src", inventoryAccordionImages[inventoryAccordionIndex]);
  }

  if (marketingAccordionIndex !== -1) {
    container
      .find(".dashboard-image")
      .attr("src", marketingAccordionImages[marketingAccordionIndex]);
  }

  if (customerInsightAccordionIndex !== -1) {
    container
      .find(".dashboard-image")
      .attr(
        "src",
        customerInsightAccordionImages[customerInsightAccordionIndex],
      );
  }

  if (syncAiAccordionIndex !== -1) {
    container
      .find(".dashboard-image")
      .attr("src", syncAiAccordionImages[syncAiAccordionIndex]);
  }

  container
    .find(".dashboard-image")
    .attr(
      "src",
      firstAccordionIndex !== -1
        ? firstAccordionImages[firstAccordionIndex]
        : secondAccordionImages[secondAccordionIndex],
    );
});

if ($(window).width() <= 1440) {
  const elem = document.querySelector(".core-solutions .start-core-header");

  if (elem) {
    elem.classList.remove("border-left");
  }
}
