# eslint-config-imweb
IMWeb团队eslint配置规则。

# 安装
安装依赖:

```bash
	npm i --save-dev eslint babel-eslint eslint-config-imweb
```

配置`.eslintrc`:

```bash
	{
	  "extends": "eslint-config-imweb",
	}
```

配置`.stylelintrc`:

```bash
	{
	  "extends": "eslint-config-imweb/stylelint",
	}
```

配置`package.json`的scripts:

```bash
	 "scripts": {
	  "lint": "eslint *.js lib test xxx",
		"stylelint": "stylelint *.css",
		"stylelint-fix": "stylelint *.css --fix",
	}
```

运行:

```bash
	npm run lint
```