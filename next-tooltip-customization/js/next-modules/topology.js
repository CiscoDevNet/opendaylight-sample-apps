// See README.md to understand why we use TopologyContainer (class that inherits nx.ui.Component) instead of
// nx.graphic.Topology
(function (nx) {
	nx.define('TopologyContainer', nx.ui.Component, {
		// we use this trick to use this object as a nx.ui.Component and display topology at the same time
		properties: {
			topology: {
				get: function () {
					return this.view('topology');
				}
			}
		},
		// define view
		view: {
			content: [
				{
					'name': 'topology', // object name
					'type': 'nx.graphic.Topology', // object type
					// this defines properties of a nx.graphic.Topology instance
					// see full specifications online
					// https://developer.cisco.com/site/neXt/document/api-reference-manual/
					'props': {
						'adaptive': true, // width 100% if true
						'showIcon': true,
						'nodeConfig': {
							'label': 'model.name',
							/*
							 icon types:
							 https://developer.cisco.com/media/neXt-site/example.html#Basic/icons
							 */
							'iconType': 'router',
							'color': '#0how00'
						},
						'linkConfig': {
							'linkType': 'curve' // also: parallel
						},
						tooltipManagerConfig: {
							nodeTooltipContentClass: 'TooltipNode',
							linkTooltipContentClass: 'TooltipLink'
						},
						'data': topologyData,
						'identityKey': 'id', // helps to link source and target
						'width': 800,
						'height': 400,
						'dataProcessor': 'force', // arrange nodes positions if not set
						'enableSmartLabel': true, // moves the labels in order to avoid overlay of them
						'enableGradualScaling': true, // may slow down, if true
						'supportMultipleLink': true // if true, two nodes can have more than one link
					}
				}
			]
		}
	});
})(nx);