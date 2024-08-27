import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import packageJson from './package.json' assert { type: 'json' };
import builtins from 'builtin-modules';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

function external(pkg) {
  const dependencies = Object.keys(packageJson.dependencies || {});
  const peerDependencies = Object.keys(packageJson.peerDependencies || {});
  const externals = [...dependencies, ...peerDependencies, ...builtins];

  return externals.some((externalPkg) => {
    return pkg.startsWith(externalPkg);
  });
}

function build(format) {
  const isEsmFormat = format === 'es';

  return {
    input: './src/index.ts',
    external,
    plugins: [
      nodeResolve({ extensions }),
      commonjs(),
      peerDepsExternal(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      }),
      !isEsmFormat && typescript({ tsconfig: './tsconfig.json' }),
    ],
    output: [
      {
        format,
        preserveModules: isEsmFormat,
        ...(isEsmFormat
          ? {
              dir: './esm',
              preserveModulesRoot: './src',
            }
          : {
              file: './dist/index.js',
              sourcemap: true,
            }),
      },
    ],
  };
}
export default [build('es'), build('cjs')];
