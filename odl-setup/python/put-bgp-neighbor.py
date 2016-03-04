#!/usr/bin/env python

import sys
import requests

odl_user = 'admin'
odl_pass = 'admin'

odl_asn = 65504

request_template = '''
{
  "neighbor": [
    {
      "neighbor-address": "%s",
      "session-open-mode": "passive-only",
      "update-source-interface": "MgmtEth0/0/CPU0/0",
      "remote-as": {
        "as-xx": 0,
        "as-yy": %d
      },
      "neighbor-afs": {
        "neighbor-af": [
          {
            "af-name": "ipv4-unicast",
            "activate": [
              null
            ],
            "route-reflector-client": true
          },
          {
            "af-name": "lsls",
            "activate": [
              null
            ],
            "route-reflector-client": true
          }
        ]
      }
    }
  ]
}
'''

req_hdrs = { 'Content-Type' : 'application/json' }

req_body = request_template % (sys.argv[1], odl_asn)

url = 	'http://' + sys.argv[1] + ':8181' + \
		'/restconf/config/network-topology:network-topology/topology' + \
		'/topology-netconf/node/' + sys.argv[2] + '/yang-ext:mount' + \
		'/Cisco-IOS-XR-ipv4-bgp-cfg:bgp/instance/default/instance-as/0/four-byte-as/' + \
        str(odl_asn) + '/default-vrf/bgp-entity/neighbors/neighbor/' + sys.argv[1]

resp = requests.put(url, data=req_body, headers=req_hdrs, auth=(odl_user, odl_pass))

print resp
