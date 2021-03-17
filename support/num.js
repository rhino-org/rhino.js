const Str = require('./str');

class Num {
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

    /**
     * Arredondar um valor pelas casas de precisão.
     * 
     * @param {Number} value Valor a ser arredondado
     * @param {Number} precisao Numero de casas de precisao
     * @returns {Number}
     */
    static round(value, precisao = 2) {
        var fator = Math.pow(10, precisao);
        var temp = value * fator;
        return Math.round(temp) / fator;
    }

    /**
     * Retorna a porcentagem de uma fraçao sobre o valor total.
     *
     * @param npart
     * @param value
     * @param int dec
     * @param int round
     * @return float|int
     */
    static percentage(npart, value, dec = 2) {
        if (value <= 0) {
            return 0;
        }

        return this.round((npart * 100) / value, dec);
    }

    /**
     * Retorna o valor obtido pelo percentual sobre um valor.
     *
     * @param percentage
     * @param value
     * @param int dec
     * @return Number
     */
    static percent(percentage, value, dec = 2) {
        return this.round((value * percentage) / 100, dec);
    }

    /**
     * Retorna o valor formatado em string.
     *
     * @param value
     * @param dec
     * @param opts
     * @return String
     */
     static format(value, dec = 2, opts = {}) {
         if (!(typeof x == 'number')) {
             return '';
         }

         // Assumir options
         var opts = Object.assign({ thousand: '.', dec: ','}, opts);

         var str = value.toFixed(dec);

         // Gerar separador milhar
         str = str.replace(/\B(?=(\d{3})+(?!\d))/g, "#");

         // Tratar traduções
         str = Str.replaceAll('\\.', opts.dec, str);
         str = Str.replaceAll('#', opts.thousand, str);

         return str;
    }
}

/**
 * Exports.
 */
module.exports = Num;