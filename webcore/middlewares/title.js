/**
 * Middleware para router.
 * 
 * Setar titulo da pagina, pelo meta.title da rota to.
 * Caso nao encontrar  a meta.title, somente mostrar a base.
 */
module.exports = (router, base) => {

    router.beforeEach((to, from, next) => {
        // Verificar se deve carregar o title da definição da rota
        if (to.meta.title) {
            document.title = to.meta.title + ' - ' + base;
            return next();
        }

        // Carregar o title base da aplicacao
        document.title = base;

        return next();
    });

};