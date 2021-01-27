const randomStr = require("randomstring");
const slug = require("slug");

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
 * @param {Array|string} search
 * @param {string} replacement
 * @param {string} value
 * @returns {string}
 */
Str.replaceAll = (search, replacement, value) => {
    // Se não for um array, deve tranformar em array para tratar varias opcoes de busca.
    if (!((typeof search == 'object') && (search.constructor.name == 'Array'))) {
        search = [search];
    }

    for (var i = 0; i < search.length; i++) {
        value = value.replace(new RegExp(search[i], 'g'), replacement);
    }

    return value;
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
 * Converte um valor para slug.
 * 
 * @param {String} value
 * @returns {String}
 */
Str.slug = (value, separador = '_') => {
    return slug(value, separador);
};

/**
 * Remover acentos e sedilha.
 * @param {String} value String a ser tratada
 * @returns {String}
 */
Str.ascii = (value) => {
    value = String(value);

    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

/**
 * Exports.
 */
module.exports = Str;