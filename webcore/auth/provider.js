class AuthProvider
{
    /**
     * Retorna o access token do usuario da sessao.
     * 
     * @returns {String|null}
     */
    getAccessToken() {
        return null;
    }

    /**
     * Informar o token de acesso.
     * 
     * @param {String|null} token Token de acesso
     */
    setAccessToken(token) {
        //..        
    }

    /**
     * Informar o email guardado na sessao.
     * 
     * @param {String|null} token Token de acesso
     */
    getEmailRememberSession() {
        return null;
    }

    /**
     * Guardar o email na sessao.
     * 
     * @param {String|null} email Email a guardar
     */
    setEmailRememberSession(email) {
        return null;
    }

    /**
     * Retorna as informacoes do usuario da sessao.
     * 
     * @returns {Object}
     */
    async me() {
        throw "Usuario na encontrado";
    }

    /**
     * Fazer o login.
     * 
     * @param {String} email E-mail do login
     * @param {String} senha Senha do login
     * @param {String} inquilino NS do inquilino
     * @returns {Object}
     */
    async login(email, senha, inquilino) {
        return;
    }

    /**
     * Fazer o logout.
     * 
     * @returns {Object}
     */
    async logout() {
        return;
    }

    /**
     * Fazer a solicitação da troca de senha.
     * 
     * @param {String} email E-mail do usuario
     * @param {String} url URL para o reset
     * @param {String} inquilino NS do inquilino
     * @returns {Object}
     */
    async forgotPassword(email, url, inquilino)
    {
        return;
    }

    /**
     * Resetar a senha do usuario pelo token.
     * 
     * @param {String} token Token de autorização
     * @param {String} novaSenha Nova senha
     * @param {String} confirmacao Confirmacao da nova senha
     * @returns {Boolean}
     */
    async resetPassword(token, novaSenha, confirmacao)
    {
        return false;
    }
}

module.exports = AuthProvider;