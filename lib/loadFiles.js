'use strict';

const { readdir, statSync } = require('fs-extra');
const path = require('path').join;

/**
 * Scan files asynchronously, specifying file extensions.
 * @param {String} dir directory
 * @param {Function} callback calback function
 * @param {{subdir: boolean, filetype: string}} options Subdirectories are supported. 
 */

module.exports = async function loadDirectory(dir, callback,
	__options = { subdir: true, filetype: '' }) {
	const options = {
		subdir: __options.subdir ?? true,
		filetype: __options.filetype ?? '',
	};
	/**
	 * @type {String[]} ディレクトリの内容
	 */
	const dirfiles = await readdir(dir);
	/**
	 * @type {Promise[]} Promiseを登録
	 */
	const promises = [];
	for (const file of dirfiles) {
		// ファイル名
		const filepath = path(dir, file);
		// ファイルの拡張子がfiletypeなら
		if (filepath.endsWith(options.filetype)) {
			// promisesに登録する。
			promises.push(callback(filepath));
		}
		else if (options.subdir) {
			// ディレクトリならば
			if (statSync(filepath).isDirectory()) {
				// 再帰関数
				// promisesに登録する。
				promises.push(loadDirectory(filepath, callback, options));
			}
		}
	}
	// 登録したすべてのpromiseを待つ
	try {
		await Promise.all(promises);
	}
	catch(error){
		// エラーの例外を返す。
		console.error(error);
		throw(error);
	}
	// 終了したことを報告する。
	return 0;
};