'use strict';

/**
 * file工具类
 * @author Architect.bian
 */

const fs = require('fs');
const path = require('path');

module.exports = class FileUtil {

    /**
     * 返回后缀
     * @returns {string}
     */
    static getExt(filePath) {
        return filePath.substring(filePath.lastIndexOf(".") + 1);
    }

    /**
     * 搜索文件夹下的所有满足filter的文件
     * @param dir
     * @param filter
     * @param includeSubDirectory
     * @returns {Set}
     */
    static searchFiles(dir, filter, includeSubDirectory) {
        var result = new Set();
        var files = fs.readdirSync(dir);
        for(var file of files) {
            var fullPath = path.resolve(dir, file);
            if(filter(file)) {
                result.add(fullPath);
            } else if(includeSubDirectory && fs.statSync(fullPath).isDirectory()) {
                SetUtil.merge(result, this.searchFiles(fullPath, filter, includeSubDirectory));
            }
        }
        return result;
    }

}