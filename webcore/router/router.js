const RouteMaker = require('./route');

class RouterMake
{
    /**
     * Gerar uma rota.
     * 
     * @param {String} path Path da rola
     * @param {String} name Nome da rota
     * @param {String} title Titulo a ser exibido na barra da browser.
     * @returns {RouteMaker}
     */
    make(path, name, title = '') {
        return new RouteMaker(path, name, title);
    }

    /**
     * Alias toUrl.
     * 
     * @param {String} path Path da rola
     * @param {String} name Nome da rota
     * @param {String} url Url destino
     * @param {Boolean} auth Ativa ou nao auth
     * @param {Boolean} guest Ativa ou nao guest
     * @param {Boolean} includePath Se deve incluir o fullpath no destino
     * @returns {Object}
     */
    toUrl(path, name, url, auth = false, guest = false, includePath = false) {
        return this.make(path, name).auth(auth).guest(guest).toUrl(url, includePath);
    }

    /**
     * Redirecionar erros para uma url.
     * 
     * @param {String} url Url destino
     * @param {String} name Nome da rota
     * @returns {Object}
     */
    error404ToUrl(url, name = 'error.404') {
        return this.make('*', name).toUrl(url, true);
    }

    /**
     * Redirecionar erros para uma url.
     * 
     * @param {Object} component Componente view do erro
     * @param {String} title Titulo da pagina
     * @param {String} name Nome da rota
     * @returns {Object}
     */
    error404(component, title = '404', name = 'error.404') {
        return this.make('*', name).title(title).vue(component);
    }
}

module.exports = new RouterMake();