(function(nx){
	nx.define('contacts.view.Main',nx.ui.Component,{
		view: {
			content: [
				{
					// load 'addContact' view
					type: 'contacts.view.AddContacts'
				},
				{
					// load 'displayContacts' view
					type: 'contacts.view.DisplayContacts'
				}
			]
		}
	})
})(nx);