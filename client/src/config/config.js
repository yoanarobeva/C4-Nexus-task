const config = {
    production: {
        BASE_URL: ''
    },
    development: {
        BASE_URL: ''

    }
}

export default config[process.env.node_env || 'development'];
