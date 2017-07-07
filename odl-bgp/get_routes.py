#!/usr/bin/env python
import requests
import json
import sys

if __name__ == "__main__":
    # check args length
    if (len(sys.argv) != 3):
        print "usage %s ODL_IP_address Next_Hop_address" % sys.argv[0]
        sys.exit(1)

    url = "http://admin:admin@" + sys.argv[1] + ":8181/restconf/operational/network-topology:network-topology/topology/example-ipv4-topology/node/" + sys.argv[2] + "/igp-node-attributes"

    data = json.loads(requests.get(url).text)["l3-unicast-igp-topology:igp-node-attributes"]["prefix"]

    for item in data:
	   print item["prefix"]
