(function (nx) {
	nx.define('contacts.viewmodel.Contacts',nx.data.ObservableCollection,{
		properties: {

		},
		methods: {
			init: function (parent) {
				this.inherited();
			},
			addContact: function(data){
				this.add({
					// contact id
					id: this.count()+1,
					// contact payload
					firstName: data.firstName,
					lastName: data.lastName,
					mobilePhone: data.mobilePhone,
					email: data.email
				});
			},
			removeContact: function(id){
				this.removeAt(id - 1);
				var newID = 1;
				this.each(function (item) {
					item.id = newID++;
				});
				this.fire('change', {
					action: 'modify',
					items: this._data
				});
			}
		},
		view: {

		}
	});
})(nx);
