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

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxt/content'
    ],
    content: {
        // Options
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    generate: {
        async routes() {
            const contentPaths = ['docs'];

            const files = [];
            contentPaths.forEach(async(path) => {
                const file = await $content(path).fetch();
                files.push(file);
            });

            const generated = files.map((file) => {
                return {
                    route: file.path === '/index' ? '/' : file.path,
                    payload: fs.readFileSync(`./content/${file.path}${file.extension}`, 'utf-8'),
                };
            });

            return generated;
        },
    },
}