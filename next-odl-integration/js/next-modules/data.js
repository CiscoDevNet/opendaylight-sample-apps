var topologyData;
// function transforms odl respond to next json format
var odl2next = function (data) {
				var topology = data.topology[0];
				var topologyResult = {nodes: [], links: []};
				// processing nodes
				for (var i = 0; i < topology.node.length; i++) {
								var node = {};
								// node name
								if (topology.node[i].hasOwnProperty('node-id')) {
												node.name = topology.node[i]['node-id'];
								}
								topologyResult.nodes.push(node);
				}
				// processing links
				for (i = 0; i < topology.link.length; i++) {
								var link = {
												id: i,
												source: topology.link[i].source['source-node'],
												target: topology.link[i].destination['dest-node']
								};
								topologyResult.links.push(link);
				}
				return topologyResult;
};
