(function (nx) {
				nx.define('TooltipNode', nx.ui.Component, {
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
								},
								events: {
												'ready': function(sender,event){
																console.log('123');
												}
								}
				});
})(nx);

