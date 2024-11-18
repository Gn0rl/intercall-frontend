const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrder: [
        '<THIRD_PARTY_MODULES>',
        '^[@/]',

        '^~/app/(.*)$',
        '^~/processes/(.*)$',
        '^~/pages/(.*)$',
        '^~/widgets/(.*)$',
        '^~/features/(.*)$',
        '^~/entities/(.*)$',
        '^~/shared/(.*)$',
        '^~/(.*)$',

        '^[./]',
        '^[../]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}

export default config
