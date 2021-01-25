const df = require('date-format');

class Carbon
{
    /**
     * Retorna a data e hora atual.
     * @returns {Date}
     */
    static now() {
        return Date.now();
    }

    /**
     * Converter um string em data e hora por um formato específico.
     * @param {String} value Data e/ou hora em string a ser convertida
     * @param {String} format Formato da data e hora 
     * @returns {Date}
     */
    static createFromFormat(value, format) {
        return df.parse(format, value);
    }

    /**
     * Converter um data e hora em string em um formato especifico.
     * @param {Date} dt Data e hora
     * @param {String} format Formato a converter em string
     */
    static format(dt, format) {
        return df.asString(format, dt);
    }
}

module.exports = Carbon;