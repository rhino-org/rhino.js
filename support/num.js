class Num
{
    /**
     * Gerar numero randomico.
     *
     * @param min
     * @param max
     * @returns Number
     */
    static random(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Gerar numero randomico inteiro.
     *
     * @param min
     * @param max
     * @returns Number
     */
    static randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(this.random(min, max));
    }
}

/**
 * Exports.
 */
module.exports = Num;