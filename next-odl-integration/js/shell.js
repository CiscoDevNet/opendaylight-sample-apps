(function (nx) {
 // initialize a new application instance
 var app = new nx.ui.Application();
 /* TopologyContainer is a nx.ui.Component object that can contain much more things than just a nx.graphic.Topology object.
  We can 'inject' a topology instance inside and interact with it easily
  */
 var topologyContainer = new TopologyContainer();
 var topology = topologyContainer.topology();
 //assign the app to a <div>
 app.container(document.getElementById('next-app'));
 $.ajax({
  //url: "http://172.16.39.132:8181/restcon,xf/operational/network-topology:network-topology/topology/flow:1",
  url: './data/flow-1.json',
  type: 'GET',
  contentType: 'application/json',
  success: function (data) {
   // process odl topology json to turn it to next json
   topologyData = odl2next(data);
   // feed topology object with nodes and links...
   topology.data(topologyData);
   // ... then attach the topology to the app instance
   topology.attach(app);
  }
 });
})(nx);