#!/usr/bin/env python

"""
put-bgp-peer

adds BGP peer to ODL

parameters:
* ODL IP address
* peer IP address 
 
uses HTTP PUT with JSON payload
"""

import sys
import requests

odl_user = 'admin'
odl_pass = 'admin'

request_template = '''
{ "module" : [
        {
            "type": "odl-bgp-rib-impl-cfg:bgp-peer",
            "name": "example-bgp-peer",
            "odl-bgp-rib-impl-cfg:host":"%s",
            "odl-bgp-rib-impl-cfg:peer-role":"ibgp",
            "odl-bgp-rib-impl-cfg:initiate-connection": true,
            "odl-bgp-rib-impl-cfg:rib": {
                "type": "odl-bgp-rib-impl-cfg:rib-instance",
                "name": "example-bgp-rib"
            },
            "odl-bgp-rib-impl-cfg:peer-registry": {
                "type": "odl-bgp-rib-impl-cfg:bgp-peer-registry",
                "name": "global-bgp-peer-registry"
            },
            "odl-bgp-rib-impl-cfg:advertized-table": [
                {
                    "type": "odl-bgp-rib-impl-cfg:bgp-table-type",
                    "name": "ipv6-unicast"
                },
                {
                    "type": "odl-bgp-rib-impl-cfg:bgp-table-type",
                    "name": "linkstate"
                },
                {
                    "type": "odl-bgp-rib-impl-cfg:bgp-table-type",
                    "name": "flowspec"
                },
                {
                    "type": "odl-bgp-rib-impl-cfg:bgp-table-type",
                    "name": "ipv4-unicast"
                }
            ]
        }
    ]
}
'''

# check args length
if (len(sys.argv) != 3):
        print "usage %s ODL_IP_address Peer_IP_address" % sys.argv[0]
        sys.exit(1)

req_hdrs = { 'Content-Type' : 'application/json' }

req_body = request_template % (sys.argv[2])

url = 	'http://' + sys.argv[1] + ':8181' + \
		'/restconf/config/network-topology:network-topology/topology' + \
		'/topology-netconf/node/controller-config/yang-ext:mount' + \
		'/config:modules/module/odl-bgp-rib-impl-cfg:bgp-peer/example-bgp-peer'

resp = requests.put(url, data=req_body, headers=req_hdrs, auth=(odl_user, odl_pass))

print resp
