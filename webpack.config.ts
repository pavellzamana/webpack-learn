import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildOptions, BuildPaths, BuildPlatform} from "./config/build/types";
import path from "path";

interface EnvVariables {
    mode?: BuildMode,
    port?: number
    platform?: BuildPlatform
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }
    return buildWebpack({
        port: env.port ?? 5000,
        mode: env.mode ?? 'development',
        paths,
        platform: env.platform ?? 'desktop',
    })
}

