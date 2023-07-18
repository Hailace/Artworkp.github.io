// Your other JavaScript code...

// Disqus configuration
    var disqus_config = function () {
  this.page.url = window.location.href;
  this.page.identifier = "https://hailace.github.io/artwork1.html?image=artwork/landscape1.jpg";
};

// Append Disqus script dynamically
(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://hailace-github-io.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

// More of your JavaScript code...
