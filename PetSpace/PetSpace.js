$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
$('#').on('shown.bs.modal', function () {
  $('#').trigger('focus')
})
$(".modal-backdrop").css("display","none");
