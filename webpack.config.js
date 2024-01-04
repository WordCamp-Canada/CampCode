const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        new ESLintPlugin(),
        new MiniCssExtractPlugin( {
            filename: './css/[name].css'
        } ),
    ],
    entry: {
        ...defaultConfig.entry,
        front_css: { import: path.resolve( process.cwd(), 'assets/css', 'front.less' ), filename: 'css/front.css' },
    },
    module: {
        rules: defaultConfig.module.rules.reduce( ( acc, item ) => {
            if(item.test.toString() !== /\.less$/.toString() ) {
                acc.push( item );
            }
            return acc;
        }, [
            {
                test: /\.(less)$/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        }
                    },
                    'less-loader' 
                ]
            }
        ] )
    },
    output: {
        filename: '[name].js',
        path: path.resolve( process.cwd(), 'dist' ),
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};