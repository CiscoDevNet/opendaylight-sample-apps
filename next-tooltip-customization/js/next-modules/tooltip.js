(function (nx) {
	// node tooltip class
	// see nx.graphic.Topology.Node reference to learn what node's properties you're able to use
	nx.define('TooltipNode', nx.ui.Component, {
		properties: {
			'node': {}, // NeXt automatically provides you the access to the selected nx.graphic.Topology.Node instance
			'topology': {}, // NeXt also provides you the access to the topology object
			'newNodeName': '' // here we'll store a new node's name (entered from the keyboard)
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
						tag: 'div',
						content: 'New node name:'
					},
					{
						tag: 'div',
						content: [
							{
								tag: 'input',
								// 'props' define html-tag's properties
								props: {
									'placeholder': 'Input a new name...',
									'value': '{#newNodeName}'
								}
							},
							{
								tag: 'div',
								content: [
									{
										tag: 'button',
										content: 'Save',
										events: {
											'click': '{#onSaveName}'
										}
									},
									{
										tag: 'button',
										content: {
											content: 'Remove Node'
										},
										events: {
											'click': '{#onRemoveNode}'
										}
									}]
							}
						]
					}],
				// applies to the whole tooltip box
				props: {
					// css class; see ./css/custom.css
					'class': 'custom-tooltip'
				}
			}
		},
		methods: {
			//
			'onRemoveNode': function () {
				// get a selected node's id and pass it to removeNode() of topology instance
				this.topology().removeNode(this.node().id());
			},
			// what happens when you hit 'Save' button
			'onSaveName': function () {
				// get current node's instance and access its label value. when pass something inside, NeXt consider
				// you set new value
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
			content: {
				content: [
					{
						tag: 'h1',
						content: [
							{
								tag: 'span',
								content: 'Link #'
							},
							{
								tag: 'span',
								content: '{#link.id}'
							}]
					},
					{
						tag: 'div',
						content: [
							{
								tag: 'span',
								content: 'From: ',
								props: {
									'class': 'bold-text'
								}
							},
							{
								tag: 'span',
								// we access link's model to show a source node's name
								content: '{#link.model.source.name}'
							}
						]
					},
					{
						tag: 'div',
						content: [
							{
								tag: 'span',
								content: 'To: ',
								props: {
									'class': 'bold-text'
								}
							},
							{
								tag: 'span',
								// we access link's model to show a target node's name
								content: '{#link.model.target.name}'
							}
						]
					}
				],
				props: {
					'class': 'custom-tooltip'
				}
			}
		}
	})
	;
})
(nx);