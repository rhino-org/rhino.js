/**
 * Controle de rotas autenticadas.
 */
module.exports = (router, routeLogin, loginName = 'login') => {

    // Verificar se foi definido o controle de auth pelo options do router
    const auth = router.options.auth ? router.options.auth : null;

    // Registrar middleware em todas as rotas
    router.beforeEach(async (to, from, next) => {
        // Verificar se rota deve estar autenticada.
        // Caso nao necessite, continuar fluxo.
        if (!to.meta.auth) {
            return next();
        }

        // Verificar se contexto esta autenticado
        if ((!auth) || (!(await auth.check()))) {

            // Guardar o nome da rota TO
            var path_continue = null;
            if ((to.name != loginName)) {
                path_continue = to.name;
            }

            // Redirecionar para o login
            var route = {};
            if (typeof routeLogin == 'function') {
                route = routeLogin();
            } else {
                route = { name: loginName };
            }

            if (path_continue) {
                route.query = {
                    continue: path_continue
                };
            }

            return router.push(route);
        }

        return next();
    });
};