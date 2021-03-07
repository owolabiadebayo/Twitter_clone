(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".parallax").parallax();
    $(".tabs").tabs();
    $(".scrollspy").scrollSpy();
    $(".demo-carousel").carousel();
    $(".tooltipped").tooltip();
    $(".datepicker").datepicker({ disableWeekends: true });
  }); // end of document ready
})(jQuery); // end of jQuery name space
(function ($) {
  $(function () {
    $(".modal").modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
  $("button.btn").on("Click", function () {
    $("button.btn")
      .removeClass("green green-darken waves-effect wave-light")
      .addClass("disabled");
  });
});
$(document).ready(function () {
  $("button.unsave-button").on("Click", function () {
    $("button.delete-button")
      .addClass("green green-darken waves-effect wave-light")
      .removeClass("disabled");
  });
});
