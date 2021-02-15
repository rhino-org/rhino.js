const Crypto = require('./crypto');

class StoreProvider
{
    /**
     * Construtor.
     * 
     * @param {Object} provider Objeto provider para manipulacao
     * @param {Object} crypto Objeto de criptografia caso precisa mascarar.
     */
    constructor (provider, crypto = null) {
        this.$provider = provider;
        this.$crypto = (crypto == null) ? Crypto.noCrypto() : crypto;
    }

    /**
     * Verifica se existe.
     * 
     * @param {string} key Nome do campo no localStorage
     * @return bool
     */
    has(key) {
        return this.$provider.has(key);
    };

    /**
     * Recuperar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} def Valor padrao
     * @return mixed|string|null
     */
    get(key, def = null) {
        var value = this.$provider.get(key, def);

        // Passar o valor pelo cripto
        if (value) {
            value = this.$crypto.decrypt(value);
        }

        return value ? value : def;
    };

    /**
     * Guardar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} value Valor a guardar
     * @param {mixed} opts Options do set
     * 
     */
    set(key, value, opts = null) {
        
        // Passar valor pelo cripto
        value = this.$crypto.encrypt(value);
        
        this.$provider.set(key, value, opts);
    };
    
    /**
     * Remover valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} opts Options do remove
     */
    remove(key, opts = null) {
        this.$provider.remove(key, opts);
    };
};

module.exports = StoreProvider;