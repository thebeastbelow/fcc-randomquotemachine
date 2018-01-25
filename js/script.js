var quoteText = "";
var quoteAuthor = "";

$(document).ready(function() {
  getNewQuote();
  $("#next").click(getNewQuote);
  $("#tweet").click(function() {
    var url = "https://twitter.com/intent/tweet?";
    url += "text=" + encodeURIComponent("\"" + quoteText + "\" " + quoteAuthor);
    url += "&url=" + encodeURIComponent("https://thebeastbelow.github.io/fcc-randomquotemachine/");
    url += "&hashtags=" + "randomquotemachine,fcc";
    url += "&via=" + "freecodecamp";

    window.location.href = url;
  });
});

function getNewQuote() {
  $("#next i").addClass("fa-spin");
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=update&lang=en",
    dataType: "jsonp"
  });
}

function update(json) {
  quoteText = json.quoteText;
  quoteAuthor = json.quoteAuthor;

  // update texts
  $("#text p").text(quoteText);
  $("#quoter").text(quoteAuthor);

  // update next button
  $("#next i").removeClass("fa-spin");
}
