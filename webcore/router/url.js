class Url
{
    /**
     * Construtor.
     * 
     * @param {VueRouter} router
     */
    constructor (router) {
        this.$router = router;
    }

    /**
     * Instalar use no Vue.
     * 
     * @param {Vue} Instancia do Vue
     */
    install(Vue) {
        Vue.prototype.$url = this;
        Vue.url = this;
    }

    /**
     * Retorna uma rota.
     * 
     * @param {Object} route 
     */
    route(route) {
        var r = this.$router.resolve(route);

        // Add function fullpath, to return o full path from route name
        r.fullPath = () => {
            var url = document.location.origin;
            url += r.resolved.fullPath;

            return url;
        }

        return r;
    }
};

module.exports = Url;