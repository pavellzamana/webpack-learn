import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        static: './build',
        port: options.port ?? 5000,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
