$(document).ready(function(){
  $.get("https://api.myjson.com/bins/i0u5d", function(data, status){
    console.log (data)
    var outputStores = "<h3>Stores</h3><ul>"
    var outputVideos = "<h3>Videos</h3><ul>"
    for (var i = 0; i < data.hair.onlineStores.length; i++) {
      outputStores += "<li><a href='" + data.hair.onlineStores[i][1] + "'>" + data.hair.onlineStores[i][0] + "</a></li>";
    }
    for (var i = 0; i < data.hair.videoLinks.length; i++) {
      outputVideos += "<li><a href='" + data.hair.videoLinks[i][1] + "'>" + data.hair.videoLinks[i][0] + "</a></li>";
    }
    outputStores += "</ul>";
    outputVideos += "</ul>";
    $('#results').html(outputStores + outputVideos);
    });
})
