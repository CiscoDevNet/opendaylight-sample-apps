(function (nx) {
	// initialize a new application instance
	var app = new nx.ui.Application();
	/* TopologyContainer is a nx.ui.Component object that can contain much more things than just a nx.graphic.Topology object.
	 We can 'inject' a topology instance inside and interact with it easily
	 */
	var topologyContainer = new TopologyContainer();
	var topology = topologyContainer.topology();
	// create instance of action bar
	var actionBar = new ActionBar();
	actionBar.assignTopology(topology);
	//assign the app to a <div>
	app.container(document.getElementById('next-app'));
	// feed topology object with nodes and links...
	topology.data();
	// ... then attach the topology to the app instance
	topology.attach(app);
	// attach an action bar
	actionBar.attach(app);
})(nx);