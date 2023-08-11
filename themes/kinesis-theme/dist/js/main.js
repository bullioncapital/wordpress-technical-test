$(document).ready(function () {
  // create a click event

  $(".tables button[data-tab-id]").first().addClass("jsTabActive");
  //get the first tab id
  var firstTabID = $(".tables button[data-tab-id]").first().attr("data-tab-id");
  //show the first tab content
  $(".tables .tabContent#" + firstTabID).show();

  // show the tab content on click
  $(".tables button[data-tab-id]").click(function (e) {
    e.preventDefault();

    var tabID = $(this).attr("data-tab-id");
    console.log(tabID);

    $(".tables button[data-tab-id]").removeClass("jsTabActive");
    $(this).addClass("jsTabActive");

    $(".tables .tabContent").hide();
    $(".tables .tabContent#" + tabID)
      .stop()
      .fadeIn(250);
  });
});
