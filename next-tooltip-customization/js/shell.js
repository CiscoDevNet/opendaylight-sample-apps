(function (nx) {
	// initialize a new application instance
	var app = new nx.ui.Application();
	/* TopologyContainer is a nx.ui.Component object that can contain much more things than just a nx.graphic.Topology object.
	 We can 'inject' a topology instance inside and interact with it easily
	 */
	var topologyContainer = new TopologyContainer();
	var topology = topologyContainer.topology();
	//assign the app to the <div>
	app.container(document.getElementById('next-app'));
	// attach the topology to the app instance
	topology.attach(app);
})(nx);