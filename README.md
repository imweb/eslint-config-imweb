# eslint-config-imweb
IMWeb团队eslint配置规则。

# 安装
安装依赖:

	npm i --save-dev eslint bable-eslint eslint-config-imweb

配置`.eslintrc`:

	{
	  "extends": "eslint-config-imweb"
	}

配置`package.json`的scripts:

	 "scripts": {
	  "lint": "eslint *.js lib test xxx"
	}

运行:

	npm run lint
