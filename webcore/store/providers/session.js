const Provider = require('./provider');

class Session extends Provider
{
    constructor() {
        super();
    }

    /**
     * Verifica se chave existe.
     * 
     * @param {string} key Chave para acesso
     * @return bool
     */
    has(key) {
        let value = sessionStorage.getItem(key);
        return (value);
    };

    /**
     * Recuperar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @return mixed|string|null
     */
    get(key) {
        return sessionStorage.getItem(key);
    };

    /**
     * Guardar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} value Valor a guardar
     */
    set(key, value) {
        sessionStorage.setItem(key, value);
    };

    /**
     * Remover valor no store.
     * 
     * @param {string} key Nome da chave
     */
    remove(key) {
        sessionStorage.removeItem(key);
    };
};

module.exports = Session;