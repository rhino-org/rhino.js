var randomStr = require("randomstring");

/**
 * Objeto Str.
 */
const Str = {};

/**
 * Verificar se string contem.
 *
 * @param pattern Pedaço da string a ser procurada.
 * @param value String origem onde será buscado
 * @returns {boolean}
 */
Str.is = (pattern, value) => {
    if ((pattern == null) || (pattern == undefined) || (pattern == '')) {
        return false;
    }

    pattern = Str.replaceAll('\\*', '.*', pattern);

    var er = new RegExp("^" + pattern + "$");
    var match = er.exec(value);

    return (match != null);
}

/**
 * Gerar string aleatória com um tamanho especifico.
 * 
 * @param len Tamanho da string que precisa ser gerada
 * @returns {string} Retorna uma string aleatória no tamanho especificado
 */
Str.randomStr = (len = 16) => {
    return randomStr.generate(len);    
};

/**
 * Troca todas as ocorrencias da string.
 *
 * @param search
 * @param replacement
 * @param value
 * @returns {string}
 */
Str.replaceAll = (search, replacement, value) => {
    return value.replace(new RegExp(search, 'g'), replacement);
}

/**
 * Upper case em todas as palavras da frase
 * 
 * @param {String} str
 * @returns {String}
 */
Str.ucFirst = (str) => {
    var ret = '';
    var parts = str.split(' ');

    for (var i = 0; i < parts.length; i++) {
        ret += parts[i].charAt(0).toUpperCase() + parts[i].slice(1) + ' ';
    }

    return ret.trim();
};

/**
 * Converte um valor para studly caps case.
 * 
 * @param {String} value
 * @returns {String}
 */
Str.studly = (value) => {
    value = Str.replaceAll('-', ' ', value);
    value = Str.replaceAll('_', ' ', value);

    value = Str.ucFirst(value);

    return Str.replaceAll(' ', '', value).trim();
};

/**
 * Exports.
 */
module.exports = Str;