'use strict';

/**
 *
 * @type {{alive(*, *, *): void}}
 */
module.exports = {
    server (req, res, next){
        res.status(204).send();
        next();
    },
    docker (req, res, next){
        res.status(204).send();
        next();
    }
}