(function (nx) {
	nx.define('contacts.viewmodel.Contacts',nx.data.ObservableCollection,{
		methods: {
			init: function () {
				this.inherited();
			},
			// add contact
			addContact: function(data){
				// this object's an ObservableCollection, we can invoke 'add' method to append new elements
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
			// remove contacts
			removeContact: function(id){
				// find a contact with this id
				this.removeAt(id - 1);
				// reassign ids
				var newID = 1;
				// apply the passed function to all elements of the collection
				this.each(function (item) {
					item.id = newID++;
				});
				// fire new event
				this.fire('change', {
					action: 'modify',
					items: this._data
				});
			}
		}
	});
})(nx);
