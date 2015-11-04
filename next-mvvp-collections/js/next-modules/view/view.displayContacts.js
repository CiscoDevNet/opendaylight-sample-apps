(function (nx) {
	nx.define('contacts.view.DisplayContacts', nx.ui.Component, {
		view: {
			content: [
				{
					props: {
						// grab items from 'items' and make a template of them
						template: {
							tag: 'tr',
							content: [
								{
									tag: 'td',
									content: '{firstName}'
								},
								{
									tag: 'td',
									content: '{lastName}'
								},
								{
									tag: 'td',
									content: '{mobilePhone}'
								},
								{
									tag: 'td',
									content: '{email}'
								},
								{
									tag: 'td',
									content: {
										tag: 'button',
										content: 'Remove Contact',
										events: {
											click: function (sender) {
												// get the contact's id from the model
												var id = sender.model().id;
												// then remove the contact
												this.model().contacts().removeContact(id);
											}
										}
									}
								}
							]
						},
						items: '{contacts}'
					}
				}
			]
		}
	});
})(nx);