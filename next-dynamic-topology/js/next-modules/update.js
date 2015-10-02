var topology;
$.ajax({
	url: 'http://localhost:5555',
	success: function (data) {
		nx.each(data.links, function (linkData) {
			var link = topology.getLink(linkData.id);
			var edge = link.model();
			nx.each(linkData, function (key, value) {
				edge.set(key, value);
			});
		});
	}
});


