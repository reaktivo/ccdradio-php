window.CCDPlayer = (function() {

  function CCDPlayer(opts) {
    this.host = opts.host;
    this.port = opts.port;
    this.btn = $(opts.btn);
    this.audio = $('audio#stream');
    this.playIcon = $('.play', this.btn);
    this.nowPlaying = $('.now-playing', this.btn);
    this.btn.click(this.toggle_audio.bind(this));
    this.setup_shoutcast();
  }

  $.extend(CCDPlayer.prototype, {

    text: 'CCD Radio',
    isPlaying: false,

    toggle_audio: function() {
      if (this.isPlaying) {
        this.audio[0].pause();
        this.playIcon.show();
      } else {
        this.audio[0].play();
        this.playIcon.hide();
      }
      this.isPlaying = !this.isPlaying;
      $('body').toggleClass('is-playing', this.isPlaying);
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
      return this.nowPlaying.text(text).attr('title', text);
    }

  });

  return CCDPlayer;

})();
