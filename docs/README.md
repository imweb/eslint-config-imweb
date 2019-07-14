# eslint-config-imweb 文档

[IMWeb](https://imweb.io/) 团队 eslint 配置规则，基于 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 封装。

## 使用方法

1. 安装依赖:

    ``` sh
    npm i --save-dev eslint babel-eslint eslint-config-imweb
    ```

2. 配置 `.eslintrc`:

    ``` json
    {
      "extends": "eslint-config-imweb"
    }
    ```

3. 配置`package.json`的scripts:

    ``` json
    {
        ...
        "scripts": {
          "lint": "eslint *.js lib test xxx",
          "lintfix": "eslint --fix *.js lib test xxx"
        }
    }
    ```

4. 运行:

    ``` sh
    npm run lint
    ```

## 规则说明

主要在 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 的基础上，关闭了一些规则，下面会一一说明。如果有不同意的地方，欢迎提 [issue](https://github.com/imweb/eslint-config-imweb/issues) 进行讨论。

### [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

要求下列数组方法的回掉函数有返回值：

- Array.from
- Array.prototype.every
- Array.prototype.filter
- Array.prototype.find
- Array.prototype.findIndex
- Array.prototype.map
- Array.prototype.reduce
- Array.prototype.reduceRight
- Array.prototype.some
- Array.prototype.sort

**规则被关闭**，*关闭原因待补充*。

### [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)

在箭头函数能够省略 return 的时候，规定写成 `() => ... ` 还是 `() => { ... }` 的形式。例如 `() => 0` 还是 `() => { return 0; }`。

**规则被关闭**，可以灵活设置。

### [arrow-parens](https://eslint.org/docs/rules/arrow-parens)

箭头函数只有一个参数的时候，规定是否必须加括号。例如 `(x) => x + 1` 还是 `x => x + 1`。

**规则被关闭**，可以灵活设置。

### [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)

当类的方法中没有使用 `this` 时，规定该方法应设为静态方法，且调用方式应该变为 `MyClass.callStaticMethod()`。例如：

``` js{2,7}
class Hello {
    static sayHello() {
        console.log("Hello!");
    }
}

Hello.sayHello();
```

**规则被关闭**，因为若该方法将来需要使用 `this` 时，所有的调用处均需发生更改。

### [comma-dangle](https://eslint.org/docs/rules/comma-dangle)

要求对象属性、数组元素等最后一个加上末尾逗号。例如：

``` js{3,6}
const x = {
    a = 1,
    b = 2,
}

const y = { a = 1, b = 2 };
```

**规则被开启**，配置为多行时必须加上，单行时不应加上。

### [consistent-return](https://eslint.org/docs/rules/consistent-return)

规定函数所有的分支要么都指明返回值，要么都不指明。

**规则被关闭**，因为经常会写如下代码，在判断条件不符合后直接返回 `undefined`：

``` js
function doSomething(condition) {
    if (condition) {
        return;
    }

    // do something here ...
    return result;
}
```

### [curly](https://eslint.org/docs/rules/curly)

规定 `if`, `else`, `for`, `while` 等语句的 `{}` 均不可以被省略。例如：

``` js{1,3}
if (A) {
    doSomething()
}
```

**规则被开启**，因为若省略 `{}`，则将来该代码块添加其他语句时，容易忘记再写上 `{}`。

### [func-names](https://eslint.org/docs/rules/func-names)

规定函数必须有名字。

**规则被关闭**，因为经常会写如下代码，无需函数名也可清晰表达含义：

``` js{1}
Foo.prototype.bar = function() {
    // do something here ...
};
```

### [function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)

**规定函数**参数要么均在一行，要么每行一个，例如：

``` js{1,4,5,6}
function foo(a, b, c) {}

function bar(
    a,
    b,
    c,
)
```

规则被开启。

### [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)

规定不能引入未在 `package.json` 中 `dependencies`, `devDependencies`, `optionalDependencies` or `peerDependencies` 声明的模块。

**规则被开启**。

### [import/no-unresolved](https://eslint.org/docs/rules/import/no-unresolved)

规定不能引入本地找不到的模块。

**规则被关闭**，因为该规则不能很好的适配 `node` 或者 `webpack` 外的模块系统，例如 `fis`。

### [jsx-a11y/anchor-is-valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

规定所有的 `<a>` 标签链接均是有效的。

**规则被关闭**，因为经常会写如下代码，把 `<a>` 当作按钮使用：

``` jsx{2}
<a 
  href="javascript:;" 
  onClick={this.handleClick}
>
  {text}
</a>
```

### [jsx-a11y/click-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)

规定所有绑定了 `onClick` 事件的元素，都必须绑定 `onKeyUp`, `onKeyDown`, `onKeyPress` 事件之一，例如:

``` jsx
<div onClick={() => {}} onKeyDown={this.handleKeyDown} />
<div onClick={() => {}} onKeyUp={this.handleKeyUp} />
<div onClick={() => {}} onKeyPress={this.handleKeyPress} />
```

**规则被关闭**，因为我们的交互场景一般无需考虑键盘操作。

### [jsx-a11y/mouse-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)

规定所有绑定了 `onMouseOver`, `onMouseOut` 事件的元素，都必须绑定 `onFocus`, `onBlur` 事件之一，例如:

``` jsx
<div onMouseOver={() => {}} onFocus={this.onFocus} />
<div onMouseOut={() => {}} onBlur={this.onFocus} />
```

**规则被关闭**，因为我们的交互场景一般无需考虑键盘操作。

### [jsx-a11y/no-noninteractive-element-interactions](https://eslint.org/docs/rules/jsx-a11y/no-noninteractive-element-interactions)

规定 HTML 中非交互性质的元素（如 `<main>`, `<li>` 等）不应该绑定事件响应函数（如 `onClick`, `onKeyUp`）等。

**规则被关闭**，因为经常会写如下代码：

``` jsx{2}
<li
  onClick={this.onClick}
>
  {text}
</li>
```

### [jsx-a11y/no-noninteractive-element-to-interactive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)

规定 HTML 中非交互性质的元素（如 `<main>`, `<li>` 等）,不应该声明 [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)。

**规则被关闭**，因为经常会写如下代码：

``` jsx{2}
<li
  role="button"
  onClick={this.onClick}
>
  {text}
</li>
```

### [jsx-a11y/no-noninteractive-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)

规定 HTML 中非交互性质的元素（如 `<main>`, `<li>` 等）,不应该声明 `tabIndex`。

**规则被关闭**，因为有时会写如下代码：

``` jsx{3,8}
<ul>
  <li
    tabIndex={0}
  >
    {text0}
  </li>
  <li
    tabIndex={1}
  >
    {text1}
  </li>
</ul>
```

### [jsx-a11y/no-static-element-interactions](https://eslint.org/docs/rules/jsx-a11y/no-static-element-interactions)

规定 HTML 中静态元素（如 `<div>`, `<span>` 等）不应该绑定事件响应函数（如 `onClick`, `onKeyUp`）等。

**规则被关闭**，因为经常会写如下代码：

``` jsx{2}
<div
  onClick={this.onClick}
>
  {text}
</div>
```

### [max-len](https://eslint.org/docs/rules/max-len)

规定代码每一行的最大长度。

**规则被开启**，配置为：

``` js
'max-len': [
  2,
  {
    code: 120,
    // 忽略链接，例如 'https://www.example.com/really/long'
    ignoreUrls: true, 
    // 忽略字符串，例如 'this is a really long string!'
    ignoreStrings: true, 
    // 忽略模版字符串，例如 `this is a long ${template} literal!`
    ignoreTemplateLiterals: true, 
  },
]
```

### [no-empty](https://eslint.org/docs/rules/no-empty)

规定不允许空的代码块。

**规则被开启**，配置为：

``` js
'no-empty': [
  'error',
  {
    // 允许空的的 try { ... } catch(e) {}
    allowEmptyCatch: true,
  }
]
```

### [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)

规定不允许混用不同类型的运算符，例如：
- 位运算符，如：`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- 逻辑运算符，如：`&&`, `||`

``` js
// Bad
const  foo = a && b < 0 || c > 0;

// Good
const foo = (a && b < 0) || c > 0;
```

**规则被开启**，以增加可读性，也更易修改。

### [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)

规定不允许对函数的参数重新赋值，例如：

``` js
function foo(bar) {
    bar = 13;
}
```

**规则被关闭**，*关闭原因待补充*。


### [no-plusplus](https://eslint.org/docs/rules/no-plusplus)

规定不允许使用 `++` 自增运算符。

**规则被关闭**，因为经常会写如下代码：

``` js{1}
for (i = 0; i < 10; i++) {
    doSomething();
}
```

### [no-return-assign](https://eslint.org/docs/rules/no-return-assign)

规定不允许在 `return` 语句里赋值，例如：

``` js
return x = 1;
```

**规则被关闭**，*关闭原因待补充*。

### [no-sync](https://eslint.org/docs/rules/no-sync)

规定不允许在 Node.js 中使用同步的操作，例如 `fs.existsSync()` 等。

**规则被设置为警告级别**，因为在写某些小工具时，使用同步方法较为简单，但在生产环境还是应该尽量使用异步操作。

### [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)

规定不允许在变量名中出现下划线。

**规则被关闭**，因为这种用法很常见。

### [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)

规定在声明对象自变量时，`{}` 首尾必须换行。

**规则被关闭**，因为经常会写出如下代码：

``` js
const obj = {};
const obj = { x };
```

### [prefer-const](https://eslint.org/docs/rules/prefer-const)

规定初始化后不再被修改的变量应用 `const` 声明。

**规则被开启**，可有有效避免修改常量。

### [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

规定可以使用解构时应采用。

**规则被开启**，被配置为：

``` js
'prefer-destructuring': 
[
  'error', 
  {
  VariableDeclarator: {
    // 数组不强求用解构
    array: false,
    // 对象强制使用解构
    object: true,
  },
]
```

### [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)

在 React 中，规定向 `props`, `state`, `context` 赋值时，应使用解构，例如：

``` jsx{3,9}
// Bad
const MyComponent = (props) => {
  return (<div id={props.id} />)
};

// Good
const MyComponent = (props) => {
  const { id } = props;
  return (<div id={id} />)
};
```

**规则被关闭**，因为只需使用一次时无需解构，节省代码量。

### [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

在 React 中，规定在使用 `PropTypes` 时，不允许使用 `any`, `array`, `object` 类型，例如：

``` jsx
// Bad
class Component extends React.Component {
  static propTypes = {
    a: PropTypes.any,
    r: PropTypes.array,
    o: PropTypes.object
  }
  render() {
    return <div />;
  }
}
```

**规则被关闭**，使用 `array` 等较为常见。

### [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

在 React 中，规定 JSX 代码只能在后缀名为 `.jsx` 的文件中。

**规则被关闭**，因为有时会在 `.js` 或自定义格式的文件中使用 JSX 代码。

### [react/jsx-one-expression-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md)

在 React 中，规定每个语句一行，例如：

``` jsx
<App>
  { 'Hello' }
  { ' ' }
  { 'World' }
</App>
```

**规则被关闭**，因为经常会写出如下代码，省略不必要的换行：

``` jsx
<Welcome>
  Hello, { userName }! Welcome to IMWeb!
</Welcome>
```

### [react/no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)

在 React 中，规定不允许在 `componentDidMount()` 生命周期函数中调用 `this.setState()` 函数，要不然会引起二次 `render`。

**规则被关闭**，*关闭原因待补充*。

### [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

在 React 中，规定每一个组件都应该声明 `PropTypes`。

**规则被关闭**，仅在核心组件声明 `PropTypes` 即可。

### [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)

规定在普通函数、匿名函数、箭头函数的 `()` 前是否需要添加空格。

**规则被关闭**，无明显收益。