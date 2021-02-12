const Provider = require('./provider');

class Local extends Provider
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
        let value = localStorage.getItem(key);
        return (value);
    };

    /**
     * Recuperar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @return mixed|string|null
     */
    get(key) {
        return localStorage.getItem(key);
    };

    /**
     * Guardar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} value Valor a guardar
     */
    set(key, value) {
        localStorage.setItem(key, value);
    };

    /**
     * Remover valor no store.
     * 
     * @param {string} key Nome da chave
     */
    remove(key) {
        localStorage.removeItem(key);
    };
};

module.exports = Local;