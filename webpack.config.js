const HtmlWebpackPlugin = require('html-webpack-plugin') //старый импорт  к плагину
const path = require('path') // 
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 
module.exports = {
    context: path.resolve(__dirname, 'src'),  //точка входа
    entry: './indx.js', //точка входа
    mode: 'development', //оптимизирует скорость приложения и ничего больше.
    module: { //модули непонятно что это//Эти параметры определяют, как будут обрабатываться различные типы модулей в рамках проекта.
        rules: [ //Правило можно разделить на три части - условия, результаты и вложенные правила.
            {
            test: /\.css$/i,  //не знаю что это, вроде настройка обработки чего то
            use: ["style-loader", "css-loader"] // читается справа налево, знаю что это лоадеры, вроде подключают css, больше понятия не имею что это
        },
        {
            test: /\.(png|svg|jpg|gif)$/i,
            use: 'file-loader',
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/, // не нашел ничего такого об этом
            use: { //юзаем бэйбл лудер
                loader: "babel-loader",
                options: { // опции
                    presets: ['@babel/preset-env'] // непонятно
                }
            } 
        }
        ]
    },
    output: { //точка выхода
        path: path.resolve(__dirname, './dist'), // называем имя папки и указываем путь
        filename: './app.js' //имя файла
    },
    plugins: [ //плагины
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'src'), // путь к папке
            template: './index.html' // путь к файлу, не знаю почему временной называется
        }),
        new CleanWebpackPlugin() //сборщик мусора
    ],
    resolve: { //не знаю что делает просто резерв
        extensions: ['.js', '.json', '.wasm'] //Если несколько файлов имеют одинаковое имя,но разные расширения,webpack разрешит тот файл,расширение которого указано первым в массиве,и пропустит остальные.
    },
    devServer: { // непонятно
        port: 3000 // создаем порт
    },



}
//в пейкедж джейсоне вообще ничего не понимаю