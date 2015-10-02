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
								'click': '{#updateTopology}'
							}
						}
					]
				}
			]
		},
		methods: {
			// execute this when hit 'add random node & link'
			'updateTopology': function () {
				var topo = this.topology();
				// use ajax to fetch an updated topology object
				$.ajax({
					type: 'GET',
					url: 'http://localhost:5555/',
					dataType: 'json',
					success: function (data) {
						// go through fetched nodes' array
						nx.each(data.nodes, function (nodeData) {
							var node = topo.getNode(nodeData.id);
							// if it's an array it means the node exists and we don't need to add it
							if(typeof(node) != 'Array'){
								topo.addNode(nodeData);
							}
						});
						// go through fetched links' array
						nx.each(data.links,function(linkData){
							var link = topo.getLink(linkData.id);
							// if it's an array it means the link exists and we don't need to add it
							if(typeof(link) != 'Array'){
								topo.addLink(linkData);
							}
						});
						// adjust topology's size
						topo.fit();
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