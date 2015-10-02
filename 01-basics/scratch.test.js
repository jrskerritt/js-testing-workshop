/*
    * describe
    * it
    * assert/expect
    * beforeEach/afterEach
    * disabling tests (set them as pending)
*/

class Robot {
    constructor() {
        this.mode = 'friendly';
    }

    beep() {
        return 'beep';
    }

    add(a, b) {
        return a + b;
    }

    setMode(mode) {
        this.mode = mode;
    }

    attack(target) {
        if (mode === 'angry') {
            return 'attacking ' + target;
        }

        return 'set mode to "angry" to attack';
    }
}

