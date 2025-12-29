(function (){
    console.log("HELLO");
    // Source - https://stackoverflow.com/a
    // Posted by Shan Eapen Koshy, modified by community. See post 'Timeline' for change history
    // Retrieved 2025-12-28, License - CC BY-SA 4.0
    var channelID = "UCQ-W1KE9EYfdxhL6S4twUNw";
    var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
    $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=")+1);
    $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
    });
})();