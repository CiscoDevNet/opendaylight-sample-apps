(function (nx) {
				nx.define('tooltipNode', nx.ui.Component, {
								properties: {
												node: {},
												topology: {}
								},
								view: {
												content: [{
																tag: 'h1',
																content: '{#node.id}'
												}, {
																tag: 'h2',
																content: '{#topology.width}'
												}]
								}
				});
})(nx);

