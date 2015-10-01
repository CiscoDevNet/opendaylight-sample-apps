# next-tooltip-customization
This mini application is intended to show how you can customize tooltips.

## How To Use This Application
Click on nodes and connecting lines and explore possibilities of customized tooltips. 

## How It Works
1. We defined custom classes for tooltip customization inside tooltipManagerConfig in ./js/next-modules/topology.js
2. When NeXt processes this data, it checks out the classes (they are located in ./js/next-modules/tooltip.js).
3. Inside the 'view' of each object we define how we want this tooltip to be presented. It's pretty simple syntax and should get used to it soon.
  3.1. We may apply any custom css styles and classes, as well as we can create methods and bind events.

A Tooltip is actually an independent application, which can do its own work inside the application.

## Why We Use TopologyContainer
Because with the container you can easily use all the advantages of a nx.ui.Component class, as well as display topology. nx.ui.Component allows you to bind events, create methods and do other things, while nx.graphic.Topology realizes the whole bunch of topology stuff. Combined together they let us enjoy coding with NeXt.

## Licensed Code Used by This Application
1. NeXt UI Toolkit:
This application uses the NeXt UI toolkit. The NeXt UI toolkit carries its own license and is available for download through Cisco DevNet (https://github.com/CiscoDevNet/opendaylight-sample-apps.git). The toolkit is contained in its own subdirectory within this application. A copy of the license is provided within that directory.
2. JQuery:
This application uses JQuery (https://jquery.org/)
