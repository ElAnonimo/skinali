$(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: "Без скинали",
    after_label: "Со скинали"
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: "before-slider__dots",
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right")
  });

  $(".menu-button").on("click", function() {
    $(".menu").toggleClass("menu--active");
  });

  /* настройка .select */
  $(".select--checked").on("click", function() {
    $(".select__dropdown").toggleClass("select__dropdown--open");
  });
  $(".select__option").on("click", function() {
    const value = $(this).attr("data-value");
    $(".select--checked").text(value);
    $(".select__dropdown").toggleClass("select__dropdown--open");
  });
  // @see https://stackoverflow.com/a/7385673/5524590
  $("body").on("click", function(e) {
    const container = $(".select--checked");
    if (
      !container.is(e.target) &&
      // checks if a container's descendant was not clicked. Here container doesn't have any descendants
      container.has(e.target).length === 0
    ) {
      $(".select__dropdown").removeClass("select__dropdown--open");
    }
  });

  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html", "body").animate({ scrollTop: $(_href).offset().top - 120 + "px" });
  });

  $(".form__input-phone").mask("+7 (999) 999-99-99");
});
