#!/usr/bin/env python
from route_attributes import attributes
from v4_uni_app_route import app_route
import sys

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
