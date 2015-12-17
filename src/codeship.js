class Codeship {
    constructor({apiKey} = {}) {
        if (!apiKey) {
            throw new Error('A Codeship API key must be passed to the constructor.');
        }
    }
}

module.exports = Codeship;