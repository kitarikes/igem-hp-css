// sample




$(document).ready(function () {

  //clear default settings 
  $("#HQ_page").attr('id', '');


  //setup
  // grab .first_text class and append it 			
  var d_title = $('.first_text >  .info > .title').html();
  var d_text = $('.first_text  > .info > .text').html();


  //append .first_text
  $("#section_title").append(d_title);
  $("#section_text").append(d_text);


  //variables
  var clicked_id;
  var p_title;
  var p_text;


  //when the user clicks on a .section
  $('.section').click(function () {

    //get id of clicked element
    clicked_id = $(this).attr('id');

    //empty display divs
    $("#section_title").empty();
    $("#section_text").empty();

    //get the content selected 
    p_title = $('#' + clicked_id + '> .info > .title').html();
    p_text = $('#' + clicked_id + '> .info > .text').html();

    //append selection
    $("#section_title").append(p_title);
    $("#section_text").append(p_text);

  });
});