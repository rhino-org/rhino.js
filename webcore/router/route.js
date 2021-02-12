class RouteMaker
{
    constructor(path, name, title = '')
    {
        this.$path      = path;
        this.$name      = name;
        this.$title     = title;

        // Opcionais
        this.$component        = null;
        this.$auth             = false;
        this.$guest            = false;
        this.$toUrl            = null;
        this.$toUrlIncludePath = false;
    }

    /**
     * Atribuir novo titulo.
     * 
     * @param {String} value Noto titulo
     * @returns {RouteMaker}
     */
    title(value) {
        this.$title = value;

        return this;
    }

    /**
     * Atribuir se rota auth ou não.
     * 
     * @param {Boolean} value Se auth ou não
     * @returns {RouteMaker}
     */
    auth(value = true) {
        this.$auth = value;

        return this;
    }

    /**
     * Atribuir se rota guest ou não.
     * 
     * @param {Boolean} value Se guest ou não
     * @returns {RouteMaker}
     */
    guest(value = true) {
        this.$guest = value;

        return this;
    }

    /**
     * Alias para atribuir novo componente.
     * 
     * @param {Object} value Componente
     * @returns {Object}
     */
    vue(value) {
        return this.component(value);
    }

    /**
     * Alias para atribuir novo componente.
     * 
     * @param {Object} value Componente
     * @returns {Object}
     */
    page(value) {
        return this.component(value);
    }

    /**
     * Atribuir novo componente.
     * 
     * @param {Object} value Componente
     * @returns {Object}
     */
    component(value) {
        this.$component = value;

        return this.make();
    }

    /**
     * Atribuir se rota faz redirect para url externa.
     * 
     * @param {String} url Url externa
     * @param {Boolean} includePath Se deve incluir o fullpath no destino
     * @returns {Object}
     */
    toUrl(url, includePath = false) {
        this.$toUrl = url;
        this.$toUrlIncludePath = includePath;

        return this.make();
    }

    /**
     * Gerar objeto para vue-router.
     * 
     * @returns {Object}
     */
    make() {
        var $this = this;

        // Geral
        var route = {};
        route.path = this.$path;
        route.name = this.$name;

        // Via meta
        route.meta = {};
        route.meta.title = this.$title;
        route.meta.auth  = this.$auth;
        route.meta.guest = this.$guest;

        // Render Component
        if (this.$component) {
            route.component = this.$component;
        }

        // Render Redirect External URL
        if (this.$toUrl) {
            route.beforeEnter = (to, from) => {

                var url = $this.$toUrl;
                if ($this.$toUrlIncludePath) {
                    url += to.fullPath;
                }

                location.href = url;
            };
        }

        return route;
    }
}

module.exports = RouteMaker;