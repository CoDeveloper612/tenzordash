module.exports = function override(config, env) {
    // Modify the devServer configuration directly
    if (env === 'development') {
        config.devServer = {
            ...config.devServer, // Preserve existing configs
            allowedHosts: 'all', // Allow all hosts
        };
    }
    return config;
};
