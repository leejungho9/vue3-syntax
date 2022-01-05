//path : NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require('path') 
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


 
module.exports = {
    resolve: {
        extensions : ['.js', '.vue'  ], 
        //두 개의 확장자를 가지고 있는 파일을 경로에서 확장자를 따로 명시하지않아도 문제가 발생하지 않음
        //경로 별칭 지정
        alias : {
            '~' : path.resolve(__dirname, 'src'),
            'assets' : path.resolve(__dirname, 'src/assets')
        }
    },
    //파일을 읽기 시작하는 진입점 설정
    entry : './src/main.js', 

    //결과물을 반환하는 설정
    output : {
    //  path : path.resolve(__dirname, 'dist'),
    //  filename : 'main.js',
     clean : true
    },
    //모듈 처리 방식을 지정
    module : {
        rules : [
            {
                test:/\.vue$/,
                use:'vue-loader'       //vue의 확장자를 가진 파일을 필터링을 해서 뷰 로더가 실행될 수 있도록 만들어줌
            },
            {   
                test : /\.s?css$/,    //.scss .css로 끝나는 모든 파일
                use : [               
                     //순서 중요!!!
                    'vue-style-loader', //vue파일안에 style태그 부분을 해석해서 동작시켜주는 용도
                    'style-loader',   //해석된 내용을 html에 style 태그에 넣어줌
                    'css-loader' ,    //javascript에서 css파일을 해석하는 용도
                    'postcss-loader', //해석된 내용에 공급업체 접두사를 붙여줌
                    'sass-loader'     //javascript에서 scss파일을 해석하는 용도

                ]
            },
            {
                test: /\.js$/,
                use : [
                    'babel-loader' //js로 끝나는 확장자를 babel이 적용될 수 있게 만드는 패키지
                ]
            },
            {
                test : /\.(png|jpe?g|gif|webp)$/,
                use : 'file-loader'  //파일 해석
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins : [
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin({
            patterns : [
                {  from : 'static'}
            ]
        }),
        new  VueLoaderPlugin()
       
    ],

    devServer : {
        host : 'localhost'
    }
}