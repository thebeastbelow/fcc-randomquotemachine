$(document).ready(function() {
  getNewQuote();
  $("#next").click(getNewQuote);
});

function getNewQuote() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=update&lang=en",
    dataType: "jsonp"
  });
}

function update(json) {
  // update texts
  $("#text p").text(json.quoteText);
  $("#quoter").text(json.quoteAuthor);

  // update share button
  $("#tweet").click(function() {
    var url = "https://twitter.com/intent/tweet?";
    url += "text=" + encodeURIComponent("\"" + json.quoteText + "\" " + json.quoteAuthor);
    url += "&url=" + encodeURIComponent("https://thebeastbelow.github.io/fcc-randomquotemachine/");
    url += "&hashtags=" + "randomquotemachine,fcc";
    url += "&via=" + "freecodecamp";

    window.location.href = url;
  });
}
