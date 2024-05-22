const { handlerPostPrediction, handlerPredictionHistories } = require('./handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: handlerPostPrediction,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                maxBytes: 1000000
            }
        }
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: handlerPredictionHistories
    }
];

module.exports = routes;