class Crypto
{
    constructor(key)
    {
        this.key = key;
    }

    /**
     * Encriptografar um valor.
     * 
     * @param {string} value Valor a ser criptografado
     * @return mixed|string|null
     */
    encrypt(value) {
        return value;
    };

    /**
     * Descriptografar um valor.
     * 
     * @param {string} value Valor criptografado
     * @return mixed|string|null
     */
    decrypt(value) {
        return value;
    };

    /**
     * Gerar um controle sem criptografia.
     * 
     * @returns {Crypto}
     */
    static noCrypto() {
        return new Crypto('');
    }
};

module.exports = Crypto;