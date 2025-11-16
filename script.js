document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card-slider").forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      isDragging = false;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      setTimeout(() => (isDragging = false), 50);
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      isDragging = true;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", function (e) {
        if (isDragging) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    });
  });
});

const pops = document.querySelectorAll('[data-bs-toggle="popover"]');
pops.forEach((el) => {
  new bootstrap.Popover(el);
});
