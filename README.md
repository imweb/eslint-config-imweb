# eslint-config-imweb
[![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)](http://nodejs.org/download/)
[![build status](https://img.shields.io/travis/imweb/eslint-config-imweb.svg?style=flat-square)](https://travis-ci.org/imweb/eslint-config-imweb)
[![David deps](https://img.shields.io/david/imweb/eslint-config-imweb.svg?style=flat-square)](https://david-dm.org/imweb/eslint-config-imweb)
[![License](https://img.shields.io/npm/l/eslint-config-imweb.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-imweb)

IMWeb团队eslint配置规则。

# 安装
安装依赖:

	npm i --save-dev eslint@5 babel-eslint eslint-config-imweb

配置 `.eslintrc` :

  - 小程序项目：

    ```json
    {
        "extends": "eslint-config-imweb/weapp"
    }
    ```

  - 非小程序项目

    ```json
    {
        "extends": "eslint-config-imweb"
    }
    ```

配置 `package.json` 的scripts:

	 "scripts": {
	   "lint": "eslint *.js lib test xxx",
	   "lintfix": "eslint --fix *.js lib test xxx"
	}

运行:

	npm run lint

[文档链接](https://imweb.github.io/eslint-config-imweb/)
