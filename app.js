document.getElementById("handle-donation").addEventListener("click", () => {
  showSectionById("cards-container");
  hideSectionById("history-container");
});

document.getElementById("handle-history").addEventListener("click", () => {
  showSectionById("history-container");
  hideSectionById("cards-container");
});

const noakhaliButton = document.getElementById("donate-noakhali");

const feniButton = document.getElementById("donate-feni");

const quotaButton = document.getElementById("donate-quota");

const blogButton = document.getElementById("blog");

noakhaliButton.addEventListener("click", () => {
  donateAndUpdateValue(
    "noakhali-field",
    "noakhali-collection",
    "noakhali-title"
  );
});

feniButton.addEventListener("click", () => {
  donateAndUpdateValue("feni-field", "feni-collection", "feni-title");
});

quotaButton.addEventListener("click", () => {
  const isSuccessful = donateAndUpdateValue(
    "quota-field",
    "quota-collection",
    "quota-title"
  );
});

blogButton.addEventListener("click", () => {
  window.location = "blog.html";
});
