const StoreProvider = require('./store');
const LocalProvider = require('./providers/local');
const CookieProvider = require('./providers/cookie');
const SessionProvider = require('./providers/session');

class Store
{
    /**
     * Construtor.
     * 
     * @param {Object} crypto Objeto de criptografia caso precisa mascarar.
     */
    constructor (crypto = null) {
        this.local   = new StoreProvider(new LocalProvider(), crypto);
        this.cookie  = new StoreProvider(new CookieProvider(), crypto);
        this.session = new StoreProvider(new SessionProvider(), crypto);
    }

    /**
     * Instalar use no Vue.
     * 
     * @param {Vue} Instancia do Vue
     */
    install(Vue) {
        Vue.prototype.$storage = this;
        Vue.storage = this;
    }
};

module.exports = Store;