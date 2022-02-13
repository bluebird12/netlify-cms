export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'netlify-cms',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    target: 'static',
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxt/content',
    ],
    generate: {
        routes: function() {
            const fs = require('fs');
            const path = require('path');
            return fs.readdirSync('./content/blog').map(file => {
                return {
                    route: `/blog/${path.parse(file).name}`, // Return the slug
                    payload: require(`./content/blog/${file}`),
                };
            });
        },
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    content: {
        // Options
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, {}) {
            config.node = {
                fs: 'empty'
            }
        }
    }
}