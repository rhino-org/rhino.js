const arr = require('../../support/arr');

class RouteMaker
{
    constructor(path, name, title = '')
    {
        this.$path      = path;
        this.$name      = name;
        this.$title     = title;

        // Opcionais
        this.$component        = null;
        this.$redirect         = null;
        this.$alias            = null;
        this.$toUrl            = null;
        this.$toUrlIncludePath = false;
        this.$metas            = {};
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
     * Atribuir alias.
     * 
     * @param {String} value Alias
     * @returns {RouteMaker}
     */
    alias(value) {
        this.$alias = value;

        return this;
    }

    /**
     * Atribuir uma meta custom na rota.
     * 
     * @param {String} key ID do meta
     * @param {Any} value Valor do meya
     * @returns {RouteMaker}
     */
     meta(key, value = true) {
        this.$metas[key] = value;

        return this;
    }

    /**
     * Atribuir se rota auth ou não.
     * 
     * @param {Boolean} value Se auth ou não
     * @returns {RouteMaker}
     */
    auth(value = true) {
        this.meta('auth', value);

        return this;
    }

    /**
     * Atribuir se rota guest ou não.
     * 
     * @param {Boolean} value Se guest ou não
     * @returns {RouteMaker}
     */
    guest(value = true) {
        this.meta('guest', value);

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

        // Redirect
        if (this.$redirect != null) {
            route.redirect = this.$redirect;
        }

        // Alias
        if (this.$alias != null) {
            route.alias = this.$alias;
        }

        // Via meta
        route.meta       = this.$metas
        route.meta.title = this.$title;

        // Adicionar as funcs 
        route.meta.get = function(key, def = null) {
            return arr.get(route.meta, key, def);
        }

        route.meta.exists = function(key) {
            return arr.exists(route.meta, key);
        }

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