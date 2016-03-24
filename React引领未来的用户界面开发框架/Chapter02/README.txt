非DOM属性

下面的特殊属性只在JSX中存在：
key
ref
dangerouslySetInnerHTML

键（key）
key是一个可选的唯一标识符。在程序运行的过程中，一个组件可能会在组件树中调整位置，比如当用户在进行搜索操作时，或者当一个列表中的物品被增加/删除时。当这些情况发生时，组件可能并不需要被销毁并重新创建。

通过给组件设置一个独一无二的键，并确保它在一个渲染周期中保持一致，使得React能够更智能地决定应该重用一个组件，还是销毁并重新创建一个组件，进而提升渲染性能。当两个已经存在于DOM中的组件交换位置时，React能够匹配对应的键并进行相应的移动，且不需要完全重新渲染DOM。

引用（ref）
ref允许父组件在render方法之外保持对子组件的一个引用。
在JSX中，你可以通过在属性中设置期望的引用名来定义一个引用。

render: function () {
	return <div>
		<input ref="myInput" ... />
	</div>;
}

...

然后，你就可以在组件中的任何地方使用this.refs.myInput获取这个引用了。通过引用获取到的这个对象被称为支持实例。它并不是真正的DOM，而是React在需要时用来创建DOM的一个描述对象。你可以使用this.refs.myInput.getDOMNode()访问真实的DOM节点。

更多关于父/子组件关系及所有权的详细讨论请参阅第6章。

设置原始的HTML

dangerouslySetInnerHTML——有时候你需要将HTML内容设置为字符串，尤其是使用了通过字符串操作DOM的第三方库时。为了提升React的互操作性，这个属性允许你使用HTML字符串。然而如果你能避免使用它的话，就还是不要使用。要让这个属性发挥作用，你需要把字符串设置到一个主键为html_的对象里，像这样：

...
render : function () {
	var htmlString = {
		_html: '<span>an html string</span>'
	};
	return <div dangerouslySetInnerHTML={htmlString}></div>;
}

...

dangerouslySetInnerHTML
这个属性可能很快会发生改变，参见下面的网址：
https://github.com/facebook/react/issues/2134
https://github.com/facebook/react/pull/1515

事件

在所有浏览器中，事件名已经被规范化并统一用驼峰形式表示，例如：change变成了onChange，click变成了onClick。在JSX中，捕获一个事件就像给组件的方法设置一个属性一样简单。

...
handleClick: function (event) {...},
render: function () {
	return <div onClick={this.handleClick}>...</div>;
}
...

注意，React自动绑定了所有方法的作用域，因此你永远不需要手动绑定。

...
handleClick: function (event) {...},
render: function () {
	// 反模式——在React中手动给组件实例绑定
	// 函数作用域是没有必要的

	return <div onClick={this.handleClick.bind(this)}>...</div>;
}

...

更多关于React中事件系统的细节请参阅第9章

注释：
JSX本质上就是Javascript，因此你可以在标签内添加原生的JavaScript注释。注释可以用以下两种形式添加：
1：当作一个元素的子节点。
2：内联在元素的属性中。

作为子节点：
子节点形式的注释只需要简单地包裹在花括号内即可，并且可以跨越多行。

<div>
{ /*
	a comment about this input
	with multiple lines */}
<input name="email" placeholder="Email Address" />
</div>

作为内联属性
内联的注释可以有两种形式。首先，可以使用多行注释：
<div>
	<input
		/*
			a note about the input
		*/
		name="email"
		placeholder="Email Address" />
</div>

也可以使用单行注释：
<div>
	<input
		name="email" // a single-line comment
		placeholder="Email Address"/>
</div>

特殊属性：
由于JSX会转换为原生的JavaScript函数，因此有一些关键词我们是不能用的——如：for和class。
要给表单里的标签添加for属性需要使用htmlFor。
<label htmlFor="for-text" ... >
而要渲染一个自定义的class需要使用className，如果你比较习惯HTML与发放，那么可能会觉得这样做有些别扭。但是从Javascript角度来看，这样做就显得很一致了。因为我们可以通过elem.className来获取一个元素的class。
<div className={classes} ...>

样式
最后，我们要谈谈内联样式。React把所有的内联样式都规划为了驼峰形式，与Javascript中DOM的style属性一致。

要添加一个自定义的样式属性，只需简单地把驼峰形式的属性名及期望的CSS值拼装为对象即可。

var styles = {
	borderColor: '#9f0',
	borderThickness: '1px'
};

React.renderComponent(<div style={styles}>...</div>, node);

