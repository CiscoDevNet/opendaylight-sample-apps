(function (nx, global) {
	// node tooltip class
	// see nx.graphic.Topology.Node reference to learn what node's properties you're able to use
	nx.define('TooltipNode', nx.ui.Component, {
		properties: {
			'node': {}, // NeXt automatically provides you the access to a selected nx.graphic.Topology.Node instance
			'topology': {}, // NeXt also provides you the access to a topology object
			'newNodeName': ''
		},
		// 'view' defines the appearance of the tooltip
		view: {
			content: {
				content: [
					{
						tag: 'h1',
						content: '{#node.label}'
					},
					{
						tag: 'label',
						content: 'New node name:'
					},
					{
						tag: 'input',
						props: {
							'placeholder': 'Input a new name...',
							'value': '{#newNodeName}'
						}
					},
					{
						tag: 'button',
						content: 'Save',
						props: {
							'class': 'btn btn-success'
						},
						events: {
							'click': '{#onSaveName}'
						}
					},
					{
						tag: 'button',
						content: {
							content: 'Remove'
						},
						events: {
							'click': '{#onRemoveNode}'
						},
						props: {
							'class': 'btn btn-danger'
						}
					}],
				props: {
					'class': 'custom-tooltip'
				}
			}
		},
		methods: {
			'onRemoveNode': function () {
				// get a selected node id and pass it to removeNode() of topology instance
				this.topology().removeNode(this.node().id());
			}
			,
			'onSaveName': function () {
				this.node().label(this.newNodeName());
			}
		}
	})
	;
	// link tooltip class
	// see nx.graphic.Topology.Link reference to learn what link's properties you're able to use
	nx.define('TooltipLink', nx.ui.Component, {
		properties: {
			link: {},
			topology: {}
		},
		view: {
			content: [
				{}
			]
		}
	});
})
(nx, nx.global);