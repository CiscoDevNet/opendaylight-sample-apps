(function (nx) {
	nx.define('contacts.view.Main', nx.ui.Component, {
		view: {
			content: [
				{
					// load 'addContact' view
					type: 'contacts.view.AddContacts'
				},
				{
					// load 'displayContacts' view
					tag: 'table',
					content: {
						type: 'contacts.view.DisplayContacts'
					},
					props: {
						'class': 'contact-list'
					}
				}
			]
		}
	})
})(nx);