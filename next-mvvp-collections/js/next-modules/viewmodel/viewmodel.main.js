(function (nx) {
	nx.define('contacts.viewmodel.Main',nx.ui.Component,{
		properties: {
			contacts: null
		},
		methods: {
			init: function () {
				this.inherited();
				this._contacts = new contacts.viewmodel.Contacts(this);
			}
		}
	});
})(nx);
