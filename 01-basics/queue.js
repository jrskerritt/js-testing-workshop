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
            tracks.each(track => {
                if (track instanceof Track) {
                    this.tracks.push(track)
                }
            });
        } else {
            if (track instanceof Track) {
                this.tracks.push(track)
            }
        }
    }

    remove(track) {
        if (!track || track instanceof Track) {
            return;
        }

        this.tracks.each(t => {
            if (track == t) {
                this.tracks.splice(0, 1);
            }
        });
    }
}

module.exports = Queue;
