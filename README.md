# node-dirtools
A toolkit for working with directories in nodejs.

## Methods
- loadFiles
  Scan files asynchronously, specifying file extensions. Subdirectories are supported.

## Dependency
- [fs-extra](https://github.com/jprichardson/node-fs-extra/)
  Most of the code in this project uses fs-extra.

# inJapanese
このツールキットは、nodejsでディレクトリを扱いやすくしたものです。

## メソッド
- loadFiles
  ファイルを拡張子指定で探します。サブディレクトリに対応しています。非同期関数です。
  ファイルを発見後、コールバック関数にファイルのアドレスが入れられます。（readfileしないので注意）

## 依存関係
- [fs-extra(英語)](https://github.com/jprichardson/node-fs-extra/)
  大半はfs-extraを使わせていただいております。

## 使い方
npmやgitsubmoduleで追加するのがおすすめです。  
`npm install https://github.com/tam1192/node-dirtools.git`
