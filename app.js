
$(document).ready(function (){

  page.init();

});

  var page = {
  	init: function() {
      page.initEvents();
      page.initStyling();
    },
  	initStyling: function() {},
  	initEvents: function() {

      $('p').on('click', 'i', function (){
        $(this).toggleClass('fa fa-check-circle');
        $(this).toggleClass('fa fa-circle-thin');
        $(this).parent().toggleClass('completedText');
      });

      $('form').on('submit', function (event) {
        event.preventDefault();
        var newToDone = {
          todone: $('input[name="todone"]').val()
        };
        page.loadTemplate($('.inputDiv'), newToDone, $('#todoneTmpl').html());
      });

    },
    loadTemplate: function($el, data, tmpl) {
      console.log(data);
      var template = _.template(tmpl);
      var html = template(data);
      $el.append(html);
    },
  }; //end of var page
