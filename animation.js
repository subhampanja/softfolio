$(document).ready(function () {
  $(".about_text").show();
  $(".portoflio_text").hide();
  $(".project_text").hide();
  $(".contact_text").hide();
});
$(".about").on("click", function () {
  $(".about").addClass("active");
  $(".contact").removeClass("active");
  $(".project").removeClass("active");
  $(".portfolio").removeClass("active");
  $(".about_text").show(500);
  $(".portoflio_text").hide(500);
  $(".project_text").hide(500);
  $(".contact_text").hide(500);
});
$(".contact").on("click", function () {
  $(".contact").addClass("active");
  $(".about").removeClass("active");
  $(".project").removeClass("active");
  $(".portfolio").removeClass("active");
  $(".contact_text").show(500);
  $(".about_text").hide(500);
  $(".portoflio_text").hide(500);
  $(".project_text").hide(500);
});
$(".project").on("click", function () {
  $(".project").addClass("active");
  $(".about").removeClass("active");
  $(".contact").removeClass("active");
  $(".portfolio").removeClass("active");
  $(".project_text").show(500);
  $(".about_text").hide(500);
  $(".portoflio_text").hide(500);
  $(".contact_text").hide(500);
});

$(".portfolio").on("click", function () {
  $(".portfolio").addClass("active");
  $(".about").removeClass("active");
  $(".contact").removeClass("active");
  $(".project").removeClass("active");
  $(".portoflio_text").show(500);
  $(".about_text").hide(500);
  $(".project_text").hide(500);
  $(".contact_text").hide(500);
});
