class Provider
{
    /**
     * Verifica se chave existe.
     * 
     * @param {string} key Chave para acesso
     * @return bool
     */
    has(key) {
        return false;
    };

    /**
     * Recuperar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @return mixed|string|null
     */
    get(key) {
        return null;
    };

    /**
     * Guardar um valor no store.
     * 
     * @param {string} key Nome da chave
     * @param {mixed} value Valor a guardar
     */
    set(key, value) {
        //..
    };

    /**
     * Remover valor no store.
     * 
     * @param {string} key Nome da chave
     */
    remove(key) {
        //..
    };
};

module.exports = Provider;