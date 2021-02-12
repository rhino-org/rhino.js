/**
 * Middleware para router.
 * 
 * Fazer scroll da pagina par ao topo.
 */
module.exports = (router) => {

    router.beforeEach((to, from, next) => {
        window.scrollTo(0, 0);

        return next();
    });

};