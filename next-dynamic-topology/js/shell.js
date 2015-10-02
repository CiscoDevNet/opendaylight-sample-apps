(function (nx) {
	// initialize a new application instance
	var app = new nx.ui.Application();
	/* TopologyContainer is a nx.ui.Component object that can contain much more things than just a nx.graphic.Topology object.
	 We can 'inject' a topology instance inside and interact with it easily
	 */
	var topologyContainer = new TopologyContainer();
	// topology instance was made in TopologyContainer, but we can invoke its members through 'topology' variable for convenience
	var topology = topologyContainer.topology();
	var actionBar = new ActionBar();
	//assign the app to the <div>
	app.container(document.getElementById('next-app'));
	actionBar.assignTopology(topology);
	actionBar.attach(app);
	topology.attach(app);
	actionBar.updateTopology();
})(nx);