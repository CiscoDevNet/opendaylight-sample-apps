#!/usr/bin/env python
from route_attributes import attributes
from v4_uni_app_route import app_route

attrib = attributes()
route = app_route("172.23.29.120")

attrib.set_communities("100:100")
attrib.set_next_hop("172.23.29.120")

print attrib

route.put_app_route("192.168.1.0/24", attrib.get())
