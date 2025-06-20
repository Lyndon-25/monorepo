import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './index.ts',  // 入口文件（根据实际目录结构调整）
  output: [
    {
      file: 'dist/index.esm.js',  // ES 模块输出
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.cjs.js',  // CommonJS 模块输出
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve(),  // 解析 node_modules 依赖
    commonjs(),     // 将 CommonJS 模块转换为 ES6
    typescript(),
    terser()  // 可选：压缩输出代码（生产环境建议保留）
  ],
};

