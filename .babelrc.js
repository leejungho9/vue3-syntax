module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [ // 비동기 처리를 위한 패키지
    ['@babel/plugin-transform-runtime']
  ]
}