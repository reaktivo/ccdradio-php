window.Main = (function() {

  function Main() {
    $(document).on('click', 'a[data-layer]', this.linkClick.bind(this));
    $(window).resize(this.layout.bind(this)).resize();
    this.setupPlayer();
    document.body.id = 'escucha';
  }

  $.extend(Main.prototype, {
    body: $('body'),
    main: $('#main'),
    sections: $('> div', '#main'),
    nav_links: $('#main-nav a'),
    transform: {
      hide2: {
        opacity: 0,
        scale: 1.1
      },
      hide: {
        opacity: 0,
        scale: 0.95
      },
      show: {
        opacity: 1,
        scale: 1
      }
    },

    linkClick: function(e) {
      var self = this;
      document.body.id = $(e.currentTarget).attr('href').slice(1, -4);
      self.main.transition(this.transform.hide, function() {
        self.main.load(e.currentTarget.href + " #main-content", function() {
          self.main
            .css(self.transform.hide)
            .show()
            .transition(self.transform.show);
          self.layout();
        });
      })
      return false;
    },

    setupPlayer: function() {
      this.player = new CCDPlayer({
        btn: '.escucha-btn',
        host: window.STREAM.host,
        port: window.STREAM.port
      });
    },

    layout: function() {
      var viewportH = $.viewport().height;
      var $footer = $('footer');
      var footerH = $footer.outerHeight();
      //$('#main-content').css({height: viewportH - footerH});
    }

  });

  return Main;

})();

$(document).ready(function() {
  window.app = new Main;
});