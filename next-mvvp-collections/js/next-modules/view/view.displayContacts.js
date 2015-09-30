(function(nx){
	nx.define('contacts.view.DisplayContacts',nx.ui.Component,{
		view: {
			content: [
				{
					props: {
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
									tag: 'button',
									content: 'Remove Contact',
									events: {
										click: function(sender){
											var id = sender.model().id;
											this.model().contacts().removeContact(id);
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