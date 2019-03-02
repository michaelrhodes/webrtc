var rtc

try {
  rtc = require('wrtc')
}
catch (o_0) {
  // electron-webrtc goes second on account
  // of being less feature-complete
  try { rtc = require('electron-webrtc')() }
  catch (o_0) {}
}

module.exports = rtc
