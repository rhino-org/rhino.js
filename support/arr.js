/**
 * Objeto Arr.
 */
const Arr = {};

/**
 * Existe o key no objeto.
 * 
 * @param {object} obj Objeto onde será procurado o key
 * @param {string} key Chave, nome da propriedade e ser buscada no obj
 * @returns {boolean} Se key foi encontrado ou não
 */
Arr.exists = (obj, key) => {
    if (obj == null) {
        return false;
    }

    return (Object.keys(obj).indexOf(key) >= 0);
};

/**
 * Retorn um item an um array/object usando a notação "dot"
 * 
 * @param {object} obj
 * @param {string} key
 * @param {object} def Valor padrao quando não fo encontrado
 * @returns {object} Valor encontrado pelo key no obj
 */
Arr.get = (obj, key, def = null) => {
    if (obj == null) {
        return def;
    }

    // Verificar se eh um objeto
    if (!(typeof obj === 'object')) {
        return def;
    }

    // Verificar se key foi nulo ou nao definido
    if ((key == undefined) || (key == null)) {
        return obj;
    }

    // Verificar se key existe
    if (Arr.exists(obj, key)) {
        return obj[key];
    }

    // Verificar se foi informado mult-niveis
    var levels = key.split('.');
    for (var i = 0; i < levels.length; i++) {
        var seg = levels[i];
        // Verificar se eh um objeto
        if ((typeof obj === 'object') && Arr.exists(obj, seg)) {
            obj = obj[seg];
        } else {
            return def;
        }
    }

    return obj;
};

/**
 * Foreach de um objeto via key.
 * 
 * @param {Object} obj Objeto base
 * @param {Function} cb Function callback
 */
Arr.each = (obj, cb) => {
    if (obj == null) {
        return;
    }
    
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        var ret = cb(key, obj[key]);
        if ((ret !== null) && (ret !== undefined)) {
            return ret;
        }
    }

    return;
};

/**
 * Exports.
 */
module.exports = Arr;