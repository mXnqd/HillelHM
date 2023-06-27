document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".nav-link");

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var target = link.getAttribute("data-target");

      tabLinks.forEach(function (tab) {
        tab.classList.remove("active");
      });

      link.classList.add("active");

      var tabPanes = document.querySelectorAll(".tab-pane");
      tabPanes.forEach(function (pane) {
        pane.classList.remove("active");
      });

      var targetPane = document.querySelector(target);
      targetPane.classList.add("active");
    });
  });
});
