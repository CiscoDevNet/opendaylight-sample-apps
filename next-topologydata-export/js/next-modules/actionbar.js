// This class realizes two buttons and their behavior
(function (nx) {
	nx.define('ActionBar', nx.ui.Component, {
		properties: {
			'topology': null, // this prop will be actually initialized by this.assignTopology()
			'exportedData': ''
		},
		view: {
			content: [
				{
					tag: 'div',
					content: [
						{
							// create the button and bind it to the event onAdd
							tag: 'button',
							content: 'Add Random Node & Link',
							events: {
								'click': '{#onAdd}'
							}
						},
						{
							// create the button and bind it to the event onJSON
							tag: 'button',
							content: 'Export to JSON',
							events: {
								'click': '{#onJSON}'
							}
						}
					]
				},
				{
					tag: 'div',
					content: {
						tag: 'textarea',
						// bind to this class' property - exportedData
						content: '{#exportedData}',
						props: {
							'style': 'width: 200px; height: 100px;'
						}
					}
				}
			]
		},
		methods: {
			// execute this when hit 'add random node & link'
			'onAdd': function () {
				// number of the nodes
				var len = this.topology().data().nodes.length;
				// random link's source
				var source = Math.floor(Math.random() * (len - 1));
				// create node with preset generated data...
				this.topology().addNode(this.generateNode(len));
				// ... and link it to the existing random node
				this.topology().addLink({'source': source, 'target': len});
				// adjust topology size if necessary
				this.topology().fit();
			},
			// export to JSON
			'onJSON': function () {
				// get topology data
				this.exportedData(JSON.stringify(this.topology().data()));
			},
			// assign topology instance (by ref) to the actionbar instance
			'assignTopology': function (topo) {
				this.topology(topo);
			},
			// generate an object of node data
			'generateNode': function (len) {
				var node = {};
				// create a name for the node
				node.name = 'test-' + len;
				// set random [x;y] position
				node.x = Math.floor(Math.random() * (this.topology().width()) + 10);
				node.y = Math.floor(Math.random() * (this.topology().height()) + 10);
				return node;
			}
		}
	});
})(nx);