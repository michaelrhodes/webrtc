# webrtc
an isomorphic interface for accessing webrtc primitives

## install
```sh
npm install michaelrhodes/webrtc
```

*note*: non-browser environments require you to also install:
- **node**: either [wrtc](https://github.com/node-webrtc/node-webrtc) or [electron-webrtc](https://github.com/mappum/electron-webrtc)
- **react-native**: [react-native-webrtc](https://github.com/oney/react-native-webrtc)


## use
```js
var w = require('webrtc')
w.RTCPeerConnection
w.RTCSessionDescription
w.RTCIceCandidate
```

*note*: each non-browser implementation [exports](https://github.com/node-webrtc/node-webrtc/blob/develop/lib/index.js) [different](https://github.com/mappum/electron-webrtc/blob/master/index.js) [things](https://github.com/oney/react-native-webrtc/blob/master/index.js), so be prepared for some serious cross-referencing.

## obey
Copyright 2019 Michael Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
