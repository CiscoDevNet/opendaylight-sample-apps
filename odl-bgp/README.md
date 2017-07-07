# odl-bgp
This subdirectory contains some BGP apps that run against the ODL controller plus a couple of Python classes used by the apps (and also useful independently)

The apps are:

* get\_routes.py - uses ODL IPv4 topology to get all routes for a given BGP next-hop

* add\_route.py - adds a route using the ODL app peer (uses v4\_uni\_app\_route.py and route\_attributes.py)

* del\_route.py - deletes a route using the ODL app peer (uses v4\_uni\_app\_route.py)

The classes are:

* v4\_uni\_app\_route.py - wraps the v4 unicast app peer

* route\_attributes.py - wraps the BGP route attributes




