$(function() {
    $(".rslides").responsiveSlides();
    $(".rslides2").responsiveSlides();
  });

var game1 = $(".game1");
var game12 = $(".game1-2");
var game2 = $(".game2");
var game22 = $(".game2-2");
var game3 = $(".game3");
var game4 = $(".game4");
var game5 = $(".game5");

var caption1 = $(".game1caption"); 
var caption2 = $(".game2caption"); 
var caption3 = $(".game3caption"); 
var caption4 = $(".game4caption"); 
var caption5 = $(".game5caption"); 

game1.on("click", function() {
    $(this).slideUp()
    game12.slideUp()
})

game12.on("click", function() {
    $(this).slideUp()
    game1.slideUp()
})

game2.on("click", function() {
    $(this).slideUp()
    game22.slideUp()
})

game22.on("click", function() {
    $(this).slideUp()
    game2.slideUp()
})

game3.on("click", function() {
    $(this).slideUp()
})

game4.on("click", function() {
    $(this).slideUp()
})

game5.on("click", function() {
    $(this).slideUp()
})

caption1.on("click", function(){
    game1.slideDown();
    game12.slideDown();
})

caption2.on("click", function(){
    game2.slideDown();
    game22.slideDown();
})

caption3.on("click", function(){
    game3.slideDown();
})

caption4.on("click", function(){
    game4.slideDown();
})

caption5.on("click", function(){
    game5.slideDown();
})











