const config = {
    production: {
        BASE_URL: ''
    },
    development: {
        BASE_URL: 'http://localhost:3000'
    }
}

export default config[process.env.node_env || 'development'];
