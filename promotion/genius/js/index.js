var animation01 = bodymovin.loadAnimation({
  container: document.getElementById('woori'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/uri_default.json'
})

var animation02 = bodymovin.loadAnimation({
  container: document.getElementById('woori2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/uri_default.json'
})

var animation03 = bodymovin.loadAnimation({
  container: document.getElementById('waveSound'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/cirwave_sound.json'
})

var animation04 = bodymovin.loadAnimation({
  container: document.getElementById('waveVoice'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/cirwave_voice.json'
})
