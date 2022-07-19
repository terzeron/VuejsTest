module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'vue/multi-word-component-names': 'off'
    }
}