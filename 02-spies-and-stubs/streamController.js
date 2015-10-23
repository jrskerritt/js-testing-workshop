const streamState = {
    paused: 'paused',
    playing: 'playing'
};

let startStream = function (stream) {
    // do stuff with bytes and playback
};

let stopStream = function (stream) {
    // do stuff with bytes and playback
};

let setStreamPosition = function (stream, time) {
    // do stuff with bytes and playback
};

class StreamController {
    constructor(stream) {
        this.stream = stream;
        this.streamState = streamState.paused;
    }

    pause() {
        if (this.streamState == streamState.paused) {
            return;
        }

        this.stream.stop();
    }

    play() {
        if (this.streamState == streamState.playing) {
            return;
        }

        startStream(this.stream);
    }

    restart() {
        this.pause();
        setStreamPosition(this.stream, 0);
        this.play();
    }
}

module.exports = StreamController;
