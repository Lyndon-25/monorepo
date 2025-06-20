import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        /**
         * 启用类似 jest 的全局 API
         * 将 `test` 和 `describe` 等函数添加到全局范围
         * 这意味着您可以直接在 TypeScript 文件中编写测试，而无需导入它们
         */
        globals: true,
        environment: 'node',
    },
})