let Track = require('./track');

class Queue {
    constructor() {
        this.tracks = [];
    }

    add(tracks) {
        if (!tracks) {
            return;
        }

        if (tracks instanceof Array) {
            tracks.forEach(track => {
                if (track instanceof Track) {
                    this.tracks.push(track)
                }
            });
        } else {
            if (tracks instanceof Track) {
                this.tracks.push(tracks)
            }
        }
    }

    remove(track) {
        if (!track || track instanceof Track) {
            return;
        }

        this.tracks.forEach(t => {
            if (track == t) {
                this.tracks.splice(0, 1);
            }
        });
    }

    clear() {
        this.tracks = [];
    }
}

module.exports = Queue;
