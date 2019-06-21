'use strict';

/* eslint-disable no-use-before-define */
const Personality = require('../api/controller/personalityController');

/**
 * The main router object
 */
const router = require('../lib/util').router();

/**
 * GET {domain}/personality
 */
router.get('/', listAll);
function listAll(req, res, next) {
    const personality = new Personality();
    personality.listAll()
    .then(result => res.send(result))
    .catch((error) => {
        next(res.send(error));
    });
}

/**
 * POST {domain}/personality
 */
router.post('/', create);
function create(req, res, next) {
    const personality = new Personality();
    personality.create(req.body)
    .then(result => res.send(result))
    .catch((error) => {
        next(res.send(error));
    });
}

/**
 * GET {domain}/personality{/id}
 */
router.get('/:id', getPersonalityId);
function getPersonalityId(req, res, next) {
    const personality = new Personality();
    personality.getPersonalityId(req.params.id)
    .then(result => res.send(result))
    .catch((error) => {
        next(res.send(error));
    });
}

/**
 * PUT {domain}/personality{/id}
 */
router.put('/:id', update);
function update(req, res, next) {
    const personality = new Personality();
    personality.update(req.params.id, req.body)
    .then(result => res.send(result))
    .catch((error) => {
        next(res.send(error));
    });
}

/**
 * DELETE {domain}/personality{/id}
 */
router.delete('/:id', remove);
function remove(req, res, next) {
    const personality = new Personality();
    personality.delete(req.params.id)
    .then(result => res.send(result))
    .catch((error) => {
        next(res.send(error));
    });
}

module.exports = function(appObj) {
    return {
        path: '/personality',
        api_version: 1,
        router
    };
};