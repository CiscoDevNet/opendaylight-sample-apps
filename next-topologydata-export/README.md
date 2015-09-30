# next-topologydata-export
This application will show you how you can export topology data (node & links) to a JSON object. It is useful when you send the data to the server etc.

## How To Use This Application
1. Hit 'Add Random Node & Link' as many times as you need. This will create you a bunch of new nodes, that will be able to export later.
2. Hit 'Export to JSON'. The app will provide you JSON string inside a textarea below.

## How It Works
Inside the whole application there a few modules. The first one is the Topology; the other is an Action Bar. The Action Bar is an almost independent application that depicts the buttons and textarea field and controls their behavior.
We inject the topology reference into the action bar instance, because we cannot access the object within action bar. When this is done can play with all topology's properties and methods easily.

## Why We Use TopologyContainer
Because with the container you can easily use all the advantages of a nx.ui.Component class, as well as display topology. nx.ui.Component allows you to bind events, create methods and do other things, while nx.graphic.Topology realizes the whole bunch of topology stuff. Combined together they let us enjoy coding with NeXt.

## Licensed Code Used by This Application
1. NeXt UI Toolkit
This application uses the NeXt UI toolkit. The NeXt UI toolkit carries its own license and is available for download through Cisco DevNet (https://github.com/CiscoDevNet/opendaylight-sample-apps.git). The toolkit is contained in its own subdirectory within this application. A copy of the license is provided within that directory.
2. JQuery
This application uses JQuery (https://jquery.org/)
