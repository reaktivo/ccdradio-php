window.CCDPlayer = (function() {

  function CCDPlayer(opts) {
    this.host = opts.host;
    this.port = opts.port;
    this.btn = opts.btn
    this.audio = $('audio#stream');
    $(document).on('click', this.btn, this.toggle_audio.bind(this));
    this.setup_shoutcast();
  }

  $.extend(CCDPlayer.prototype, {

    text: 'CCD Radio',

    toggle_audio: function() {
      if ( this.isPlaying() ) {
        this.audio[0].pause();
        $('body').removeClass('is-playing');
      } else {
        this.audio[0].play();
        $('body').addClass('is-playing');
      }
      return false;
    },

    setup_shoutcast: function() {
      var self = this;
      $.SHOUTcast({
        host: this.host,
        port: this.port,
        stats: function() {
          return self.update_status(this.get('songtitle'));
        }
      }).startStats();
    },

    update_status: function(text) {
      if (this.text === text) {
        return;
      }
      this.text = text;
      $('.now-playing').text(text).attr('title', text);
    },

    isPlaying: function() {
      return $('body').hasClass('is-playing');
    }

  });

  return CCDPlayer;

})();
