#!/usr/bin/env python
from v4_uni_app_route import v4_uni_app_route
import sys

if __name__ == "__main__":
    # check args length
    if (len(sys.argv) != 3):
        print "usage %s ODL_IP_address IP_Prefix" % sys.argv[0]
        sys.exit(1)

    controller = sys.argv[1]
    prefix = sys.argv[2]

    # initialise route
    route = v4_uni_app_route(controller)

    # delete route
    route.del_route(prefix)
