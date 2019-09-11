$('#keto-id').click(function () {
    $('#second-section').addClass('fade-in')
  console.log("clicked")

});




$('.second-c').click(function () {
  $('.second-c')
  .removeClass('second-c-bg')
  .addClass('flip-in-hor-bottom')
  .html('<span> Eat Keto Freindly Foods</span>')
  .addClass('new-bg')
});

$('.third-c').click(function () {
  $('.third-c')
  .removeClass('third-c-bg')
  .addClass('flip-in-hor-bottom')
  .html('<span> <br>Lower blood glucose and insuline</span>').fadeIn()
  .addClass('new-bg')
});

$('.forth-c').click(function () {
  $('.forth-c')
  .removeClass('forth-c-bg')
  .addClass('flip-in-hor-bottom').fadeIn()
  .html('<span> Consumed and stored fat burning goes up</span>')
  .addClass('new-bg')
});

$('.fifth-c').click(function () {
  $('.fifth-c')
  .removeClass('fifth-c-bg')
  .addClass('flip-in-hor-bottom')
  .html('<span> <br>Liver breaks down fat to ketones</span>')
  .addClass('new-bg')
});

$('.sixth-c').click(function () {
  $('.sixth-c')
  .removeClass('sixth-c-bg')
  .addClass('flip-in-hor-bottom')
  .html('<span> <br>Ketones are released into the blood</span>')
  .addClass('new-bg')
});

$('.first-c').click(function () {
  $('.first-c')
  .removeClass('first-c-bg')
  .addClass('flip-in-hor-bottom')
  .html('<span> Brain uses ketones for energy instead of glucose</span>')
  .addClass('new-bg')
});

$(".expand-1").click(function(){
  $("#block1").slideToggle();
});
$(".expand-2").click(function(){
  $("#block2").slideToggle();
});
$(".expand-3").click(function(){
  $("#block3").slideToggle();
});
$(".expand-4").click(function(){
  $("#block4").slideToggle();
});
$(".expand-5").click(function(){
  $("#block5").slideToggle();
});
$(".expand-6").click(function(){
  $("#block6").slideToggle();
});
$(".expand-7").click(function(){
  $("#block7").slideToggle();
});
$(".expand-8").click(function(){
  $("#block8").slideToggle();
});
$(".expand-9").click(function(){
  $("#block9").slideToggle();
});

$(".expand-10").click(function(){
  $("#block10").slideToggle();
});




// var sectionTwoWaypoint = new Waypoint({
//   element: document.getElementById('section-2'),
//   handler: function (direction) {
//     if (direction === 'down') {
//       console.log("down")
//       notify (this.element.id + 'ow-me-when-scrolling');
//     }
//     if (direction === 'up') {
//       console.log("up")
//       $('#show-me-when-scrolling').fadeOut();
//     }
//   },
//   offset: 1500
// });

