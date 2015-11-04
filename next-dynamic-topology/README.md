# next-dynamic-topology
This sample is designed to show basics of dynamic topology. In the example you'll see how NeXt fetches new nodes and links and adds them to topology's object. It doesn't affect other nodes, therefore the performance is high.

## How To Use This Application
1. Run nodejs server located at: ./nodejs-server/topology-server.js. This is mandatory to use sample app.
2. Open index.html and hit 'Update Topology From Server'
3. You'll see the updated topology

## How It Works
App fetches data from the nodejs server, adds new nodes and links and renders the topology. This demonstrates creating of new nodes and links only, it doesn't update anything or remove elements of the topology.

Every time you request the nodejs app, it create one node at a random position and connects it with with another nodes, chosen randomly.