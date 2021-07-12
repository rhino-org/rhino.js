/**
 * Objeto Thread.
 */
const Thread = {};

/**
 * Sleep em milisegundos.
 * 
 * @param {Number ms Qtdade de milisegundos
 */
Thread.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Exports.
 */
module.exports = Thread;