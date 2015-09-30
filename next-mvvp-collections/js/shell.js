(function (nx) {
	// initialize a new application instance
	var Contacts =  nx.define(nx.ui.Application,{
		methods: {
			start: function () {
				// perform application initialization
				var main = new contacts.view.Main();
				var mainViewModel = new contacts.viewmodel.Main();
				// associate the main view with its model
				main.model(mainViewModel);
				// attach the main view to the application
				main.attach(this);
			}
		}
	});

	var app = new Contacts();
	// assign the application to the div container
	app.container(document.getElementById('next-app'));
	// start app
	app.start();
})(nx);