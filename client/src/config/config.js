const config = {
    production: {
        BASE_URL: 'https://c4-nexus-task.vercel.app'
    },
    development: {
        // BASE_URL: 'https://c4-nexus-task.vercel.app'
        BASE_URL: 'http://localhost:3000'
    }
}

export default config[process.env.node_env || 'development'];
