(function (nx) {
	nx.define('contacts.view.AddContacts', nx.ui.Component, {
		properties: {
			firstName: null,
			lastName: null,
			mobilePhone: null,
			email: null
		},
		view: {
			content: [
				{
					tag: 'div',
					content: [
						{
							tag: 'span',
							content: 'First name: '
						},
						{
							tag: 'input',
							props: {
								placeholder: 'Input first name...',
								value: '{#firstName}'
							}
						}
					]
				},
				{
					tag: 'div',
					content: [
						{
							tag: 'span',
							content: 'Last name: '
						},
						{
							tag: 'input',
							props: {
								placeholder: 'Input last name...',
								value: '{#lastName}'
							}
						}
					]
				},
				{
					tag: 'div',
					content: [
						{
							tag: 'span',
							content: 'Mobile phone: '
						},
						{
							tag: 'input',
							props: {
								placeholder: 'Input mobile phone...',
								value: '{#mobilePhone}'
							}
						}
					]
				},
				{
					tag: 'div',
					content: [
						{
							tag: 'span',
							content: 'Email: '
						},
						{
							tag: 'input',
							props: {
								placeholder: 'Input e-mail...',
								value: '{#email}'
							}
						}
					]
				},
				{
					tag: 'button',
					content: 'Add',
					events: {
						click: '{#onAdd}'
					}
				}
			]
		},
		methods: {
			onAdd: function () {
				var data = {
					firstName: this.firstName(),
					lastName: this.lastName(),
					mobilePhone: this.mobilePhone(),
					email: this.email()
				};
				this.model().contacts().addContact(data);
				// clear data
				this.firstName('');
				this.lastName('');
				this.mobilePhone('');
				this.email('');
			}
		}
	});
})(nx);