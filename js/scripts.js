//Facebook popup window
function openWindow(url,height,width) {
  window.open(url,"_blank","height="+height+",width="+width);
  return false;
}
function share(type) {
  var url = escape(window.location.href);
  var site = 'HoustonChronicle.com';
  var title = escape(document.title);
  if ( type == 'facebook' ) {
    openWindow('http://www.facebook.com/sharer.php?u=' + url,400,750);
  }
  return false;
}
//Twitter popup window
function openWindow(url, width, height) {
  window.open(url,"_blank","height="+height+",width="+width);
  return false;
}
$(".twitter").on("click", function(e) {
  e.preventDefault();
  openWindow($(this).attr("href"),650,400);
});
// Close colapsed menu on click away
$(document).on('click',function(){
  $('.collapse').collapse('hide');
});
//Go from main to explainer
$('#transition').click(function() {
  $('#main').fadeOut(400);
  $('#districtDefs').fadeOut(400);
  $('#explainer').delay(400).fadeIn(200);
  window.scrollTo(0,0); 
});
$('.return').click(function() {
  $('#explainer').fadeOut(400);
  $('#districtDefs').fadeOut(400);
  $('#main').delay(400).fadeIn(200);
  window.scrollTo(0,0); 
});
$('#defined').click(function() {
  $('#main').fadeOut(400);
  $('#explainer').fadeOut(400);
  $('#districtDefs').delay(400).fadeIn(200);
  window.scrollTo(0,0); 
});