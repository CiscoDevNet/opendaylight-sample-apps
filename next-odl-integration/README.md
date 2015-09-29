# next-odl-integration
This mini application depicts the basics of parsing ODL Openflow response and work with remote topology data.

## How To Use This Application
Just run it and openflow topology will appear!

## How It Works
0. We have already prepared JSON from ODL + Openflow Mininet chain. The response is stored inside ./data/flow-1.json and ready to use.
1. inside ./js/shell.js an asynchronous ajax request is made, and as soon as it is successful it implements the parser (odl2next function), which is stored in ./js/next-modules/data.js. 
2. The sample parser is quite simple, as you can see. It's on you how to parse the ODL response and present it to a user!

## Why We Use TopologyContainer
Because with the container you can easily use all the advantages of a nx.ui.Component class, as well as display topology. nx.ui.Component allows you to bind events, create methods and do other things, while nx.graphic.Topology realizes the whole bunch of topology stuff. Combined together they let us enjoy coding with NeXt.