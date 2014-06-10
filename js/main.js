window.Main = (function() {

  function Main() {
    $('body')
      .on('click','.calendario .show', this.show_detail.bind(this))
      .on('click', '.bio-container a[href="#volver"]', this.hide_detail.bind(this));
    this.nav_links.click(this.nav_click.bind(this));
    $('h1.ccdradio a').click(this.nav_click.bind(this));
    $(window).resize(this.layout.bind(this)).resize();
    this.player = new CCDPlayer({
      btn: '.escucha-btn',
      host: window.STREAM.host,
      port: window.STREAM.port
    });
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

    nav_click: function(e) {
      var self = this;
      var sectionName = $(e.currentTarget).attr('href').substr(3);
      var hook = this["" + sectionName + "_in"];
      hook && hook.call(this);
      this.body.attr({ id: sectionName});
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

    programacion_in: function() {
      this.hide_detail();
    },

    show_detail: function(e) {
      var self = this;
      var href = e.currentTarget.href;
      var calendar = $('.calendario');
      var bio_container = $('.bio-container');
      bio_container
        .show()
        .css(this.transform.hide2)
        .load(href + ' #bio', function() {
          bio_container.transition(self.transform.show);
          calendar.transition(self.transform.hide);
        });
      return false;
    },

    hide_detail: function(e) {
      var self = this;
      if ($('.calendario').is(":visible")) {
        var calendar = $('.calendario').show();
        calendar.transition(this.transform.show);
        this.bio_container.transition(this.transform.hide2, function() {
          self.bio_container.hide();
        })
      }
      return false;
    },

    layout: function() {
      var viewportH = $.viewport().height;
      var footerH = $('footer').outerHeight();
      $('> div', this.main).css({height: viewportH - footerH});
    }

  });

  return Main;

})();

$(document).ready(function() {
  window.app = new Main;
});