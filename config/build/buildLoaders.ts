import type {ModuleOptions} from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types";
import {buildBabelLoader} from "./babel/buildBabelLoader";
// import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const babelLoader =       buildBabelLoader(options)

    const sourceMapLoader = {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
    }
    const assetsLoader ={
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }

    const svgLoader = {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true, svgoConfig: {plugins: [{name: 'convertColors', params: {currentColor: true}}]}}}],
        }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local][hash:base64:5]' : '[hash:base64:8]'
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 }),
    //                 transpileOnly: true
    //             }
    //         }
    //     ],
    //     exclude: /node_modules/
    // }
    return [
        sourceMapLoader,
        assetsLoader,
        svgLoader,
        scssLoader,
        babelLoader
        // tsLoader
    ]
}
