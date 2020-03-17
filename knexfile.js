module.exports = {
    development: {
        client: 'pg',
        connection: `postgres://intergration-test-user:passw0rd@postgres/catalog`,
        migration: {
            directory: __dirname + '/migrations',
        },
        seeds: {
            directory: __dirname + '/seeds',
        },
    },
};
