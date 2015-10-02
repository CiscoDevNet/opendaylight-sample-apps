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
							content: 'Update Topology From Server',
							events: {
								'click': '{#onUpdate}'
							}
						}
					]
				}
			]
		},
		methods: {
			// execute this when hit 'add random node & link'
			'onUpdate': function () {
				var topo = this.topology();
				$.ajax({
					type: 'GET',
					url: 'http://localhost:5555/',
					dataType: 'json',
					success: function (data) {
						nx.each(data.nodes, function (nodeData) {
							var node = topo.getNode(nodeData.id);
							// add a new node if not exist
							if(typeof(node) != 'Array'){
								topo.addNode(nodeData);
							}
							// update values if changed
							else {
								var vertex = node.model();
								nx.each(nodeData, function (key, value) {
									vertex.set(key, value);
								});
							}
						});
						nx.each(data.links,function(linkData){
							var link = topo.getLink(linkData.id);
							if(typeof(link) != 'Array'){
								topo.addLink(linkData);
							}
							else {
								var edge = link.model();
								nx.each(linkData, function (key, value) {
									edge.set(key, value);
								});
							}
						})
					}
				});



			},
			// assign topology instance (by ref) to the actionbar instance
			'assignTopology': function (topo) {
				this.topology(topo);
			}
		}
	});
})(nx);