#!/usr/bin/env python
from route_attributes import attributes
from v4_uni_app_route import app_route
import sys

if __name__ == "__main__":
    # check args length
    if (len(sys.argv) != 3):
        print "usage %s ODL_IP_address IP_Prefix" % sys.argv[0]
        sys.exit(1)

    controller = sys.argv[1]
    prefix = sys.argv[2]

    # initialise route object
    route = app_route(controller)

    # set route attributes
    attrib = attributes()
    attrib.set_communities("100:100")
    attrib.set_next_hop(controller)

    # advertise route
    route.put_app_route(prefix, attrib.get())

    print "%s advertised" % sys.argv[2]
