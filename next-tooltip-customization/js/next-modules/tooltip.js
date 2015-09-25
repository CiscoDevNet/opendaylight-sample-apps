(function (nx, global) {
 // node tooltip class
 // see nx.graphic.Topology.Node reference to learn what node's properties you're able to use
 nx.define('TooltipNode', nx.ui.Component, {
  properties: {
   'node': {}, // NeXt automatically provides you the access to a selected nx.graphic.Topology.Node instance
   'topology': {}, // NeXt also provides you the access to a topology object
   'newNodeName': '' // we're gonna store a new node's name over here
  },
  // 'view' defines the appearance of the tooltip
  view: {
   content: {
	content: [
	 {
	  tag: 'h1',
	  content: '{#node.label}'
	 },
	 {
	  tag: 'label',
	  content: 'New node name:'
	 },
	 {
	  tag: 'input',
	  content: '{#newNodeName}',
	  props: {
	   'placeholder': 'Input a new name...',
	   'class': 'input form-control'
	  }
	 },
	 {
	  tag: 'button',
	  content: 'Save',
	  props: {
	   'class': 'btn btn-success'
	  },
	  events: {
	   'click': '{#onSaveName}'
	  }
	 },
	 {
	  tag: 'button',
	  content: {
	   content: 'Remove'
	  },
	  events: {
	   'click': '{#onRemoveNode}'
	  },
	  props: {
	   'class': 'btn btn-danger'
	  }
	 }],
	props: {
	 'class': 'custom-tooltip'
	}
   }
  },
  methods: {
   'onRemoveNode': function (sender, event) {
	// todo: program node removal
	// how do i get links/nodes/topology object?
   }
   ,
   'onSaveName': function () {
	// todo: program saving the name
	alert(1);
   }
  }
 })
 ;
 // link tooltip class
 // see nx.graphic.Topology.Link reference to learn what link's properties you're able to use
 nx.define('TooltipLink', nx.ui.Component, {
  properties: {
   node: {},
   link: {},
   topology: {}
  },
  view: {
   content: [
	{}
   ]
  }
 });
})
(nx, nx.global);