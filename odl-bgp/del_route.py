#!/usr/bin/env python
from v4_uni_app_route import app_route
import sys

controller = sys.argv[1]
prefix = sys.argv[2]

# initialise route
route = app_route(controller)

# delete route
route.del_app_route(prefix)
