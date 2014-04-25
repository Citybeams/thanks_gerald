


var GeraldApp = {
  onReady: function(){
    $('h1').on('click', GeraldApp.changeText)
},
changeText: function(event){
  // $(this).text("Hey Gerald");
  var h1Text = $(this).text();

  $.ajax({
    url: "/reverse",
    dataType: "json",
    type: 'POST',
    data:{h1Text: h1Text},
    context: this
    }).done(function(response){
        $(this).text(response.h1Text);
    });
  }

};

$(document).ready(GeraldApp.onReady);





