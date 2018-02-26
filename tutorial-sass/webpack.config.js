module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  entry: {
    'step2': './docs/step2/main.js',
    'step3': './docs/step3/main.js',
    'step4': './docs/step4/main.js',
  },
  output: { // ファイルの出力設定
    path: `${__dirname}/docs`,  //  出力ファイルのディレクトリ名
    filename: '[name]/bundle.js'  // 出力ファイル名
  },
  module: {
    rules: [  // Loaderの設定
      // CSSファイルの読み込み
      {
        test: /\.css/,  // 対象となるファイルの拡張子
        // ローダー名
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップを有効にする
              sourceMap: true,
            },
          },
        ],
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する¬
              url: false,
              // ソースマップを有効にする
              sourceMap: true,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
