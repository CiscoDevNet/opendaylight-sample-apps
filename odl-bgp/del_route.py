#!/usr/bin/env python
import v4_uni_app_route
import sys

controller = sys.argv[1]
prefix = sys.argv[2]

# initialise route
route = v4_uni_app_route(controller)

# delete route
route.del_route(prefix)
