# node-dirtools
A toolkit for working with directories in nodejs.

## Methods
- loadDirectory
  Search for a directory. If not, create one.
- loadFiles
  Scan files asynchronously, specifying file extensions. Subdirectories are supported.

## Dependency
- [fs-extra](https://github.com/jprichardson/node-fs-extra/)
  Most of the code in this project uses fs-extra.

# inJapanese
このツールキットは、nodejsでディレクトリを扱いやすくしたものです。

## メソッド
- loadDirectory
  ディレクトリを検索、なければ作ります。 同期関数です。
  
- loadFiles
  ファイルを拡張子指定で探します。サブディレクトリに対応しています。非同期関数です。
  ファイルを発見後、コールバック関数にファイルのアドレスが入れられます。（readfileしないので注意）

## 依存関係
- [fs-extra](https://github.com/jprichardson/node-fs-extra/)
  大半はfs-extraを使わせていただいております。
