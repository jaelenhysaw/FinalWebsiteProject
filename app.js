function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

$('document').ready(function(){
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // HAIR EVENT HANDLER
  $("#hair").click(function(){
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
    });
  // FASHION EVENT HANDLER
  $("#fashion").click(function(){
    $.get("https://api.myjson.com/bins/i0u5d", function(data, status){
      console.log (data)
      var outputStores = "<h3>Stores</h3><ul>"
      var outputVideos = "<h3>Videos</h3><ul>"
      for (var i = 0; i < data.fashion.onlineStores.length; i++) {
        outputStores += "<li><a href='" + data.fashion.onlineStores[i][1] + "'>" + data.fashion.onlineStores[i][0] + "</a></li>";
      }
      for (var i = 0; i < data.fashion.videoLinks.length; i++) {
        outputVideos += "<li><a href='" + data.fashion.videoLinks[i][1] + "'>" + data.fashion.videoLinks[i][0] + "</a></li>";
      }
      outputStores += "</ul>";
      outputVideos += "</ul>";
      $('#results').html(outputStores + outputVideos);
      });
    });
  // MAKEUP EVENT HANDLER
  $("#makeup").click(function(){
    $.get("https://api.myjson.com/bins/i0u5d", function(data, status){
      console.log (data)
      var outputStores = "<h3>Stores</h3><ul>"
      var outputVideos = "<h3>Videos</h3><ul>"
      for (var i = 0; i < data.makeup.onlineStores.length; i++) {
        outputStores += "<li><a href='" + data.makeup.onlineStores[i][1] + "'>" + data.makeup.onlineStores[i][0] + "</a></li>";
      }
      for (var i = 0; i < data.makeup.videoLinks.length; i++) {
        outputVideos += "<li><a href='" + data.makeup.videoLinks[i][1] + "'>" + data.makeup.videoLinks[i][0] + "</a></li>";
      }
      outputStores += "</ul>";
      outputVideos += "</ul>";
      $('#results').html(outputStores + outputVideos);
      });
    });
    // $(document).ready(function(){
    //     $.get("https://api.myjson.com/bins/i0u5d", function(data, status){
    //       .data
});
