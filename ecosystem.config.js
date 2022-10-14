module.exports = {
    apps: [{
        name: 'medusa-admin',
        script: 'npm',
        args: 'run serve',
        env_production: {
            NODE_ENV: 'production'
        },
        source_map_support: false
    }
    ],
};
