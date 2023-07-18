    var disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = "artwork1"; // Replace with a unique identifier for the page
    };

    (function() {
      var d = document, s = d.createElement('script');
      s.src = '//' + 'hailace-github-io' + '.disqus.com/embed.js'; // Replace 'your_disqus_shortname' with your own Disqus shortname
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
