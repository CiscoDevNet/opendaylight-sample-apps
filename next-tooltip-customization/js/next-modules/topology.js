(function (nx, global) {
				nx.define('TopologyContainer', nx.ui.Component, {
								properties: {
												topology: {
																get: function () {
																				return this.view('topology');
																}
												}
								},
								view: {
												content: [
																{
																				'name': 'topology',
																				'type': 'nx.graphic.Topology',
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
																												'linkType': 'curve',// also: parallel
																												'style': {
																																//'stroke-dasharray': '5, 5' // 'a, b' - a is the length of a stroke; b is a length of
																																// a gap
																												}
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
})(nx, nx.global);