function createElement({ type, props, ...children }) {
	return {
		type,
		props: {
			...props,
			children: children.map((child) =>
				typeof child === 'object' ? child : createElement(child),
			),
		},
	};
}

function createTextElement(text) {
	return {
		type: 'TEXT_ELEMENT',
		props: {
			nodeValue: text,
			children: [],
		},
	};
}
