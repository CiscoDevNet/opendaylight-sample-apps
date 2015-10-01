(function (nx) {
	nx.define('contacts.viewmodel.Main',nx.ui.Component,{
		properties: {
			contacts: null
		},
		methods: {
			init: function () {
				this.inherited();
				// after that we can use this.contacts() to get access to the viewmodel
				this._contacts = new contacts.viewmodel.Contacts(this);
			}
		}
	});
})(nx);
