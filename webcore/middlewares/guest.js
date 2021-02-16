/**
 * Controle de rotas NAO autenticadas.
 */
module.exports = (router, opts = {}) => {

    // Tratar parametros
    var optsDefault = {
        routeGuest: 'home'
    };
    opts = Object.assign(optsDefault, opts);

    // Verificar se foi definido o controle de auth pelo options do router
    const auth = router.options.auth ? router.options.auth : null;

    // Registrar middleware em todas as rotas
    router.beforeEach(async (to, from, next) => {
        // Verificar se rota deve estar autenticada.
        // Caso nao necessite, continuar fluxo.
        if (!to.meta.guest) {
            return next();
        }

        // Verificar se contexto NAO esta autenticado
        if ((!auth) || (!await auth.check())) {
            return next();
        }

        var route = {};
        if (typeof opts.routeGuest == 'function') {
            route = opts.routeGuest();
        } else {
            route = { name: opts.routeGuest };
        }

        return router.push(route);
    });

};