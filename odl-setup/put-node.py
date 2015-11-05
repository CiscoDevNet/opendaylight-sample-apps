#!/usr/bin/env python

"""
put-node

adds a node to ODL

parameter:
* ODL IP address
* node IP address
* node name

uses HTTP PUT with JSON payload
"""

import sys
import requests

port = '830'
uname = 'cisco'
pword = 'cisco'

odl_uname = 'admin'
odl_pword = 'admin'

# set up the request
request_template = '''
{
    "module": [
        {
            "type": "odl-sal-netconf-connector-cfg:sal-netconf-connector",
            "name": "%s",
            "odl-sal-netconf-connector-cfg:address": "%s",
            "odl-sal-netconf-connector-cfg:port": %s,
            "odl-sal-netconf-connector-cfg:username": "%s",
            "odl-sal-netconf-connector-cfg:password": "%s",
            "odl-sal-netconf-connector-cfg:tcp-only": false,
            "odl-sal-netconf-connector-cfg:binding-registry": {
                "type": "opendaylight-md-sal-binding:binding-broker-osgi-registry",
                "name": "binding-osgi-broker"
            },
            "odl-sal-netconf-connector-cfg:between-attempts-timeout-millis": 2000,
            "odl-sal-netconf-connector-cfg:processing-executor": {
                "type": "threadpool:threadpool",
                "name": "global-netconf-processing-executor"
            },
            "odl-sal-netconf-connector-cfg:max-connection-attempts": 0,
            "odl-sal-netconf-connector-cfg:sleep-factor": 1.5,
            "odl-sal-netconf-connector-cfg:client-dispatcher": {
                "type": "odl-netconf-cfg:netconf-client-dispatcher",
                "name": "global-netconf-dispatcher"
            },
            "odl-sal-netconf-connector-cfg:dom-registry": {
                "type": "opendaylight-md-sal-dom:dom-broker-osgi-registry",
                "name": "dom-broker"
            },
            "odl-sal-netconf-connector-cfg:event-executor": {
                "type": "netty:netty-event-executor",
                "name": "global-event-executor"
            },
            "odl-sal-netconf-connector-cfg:connection-timeout-millis": 20000
        }
    ]
}
'''

# check args length
if (len(sys.argv) != 4):
        print "usage %s ODL_IP_address Node_IP_address Node_Name" % sys.argv[0]
        sys.exit(1)

# set up the URL
url = 'http://' + odl_uname + ':' + odl_pword + '@' + sys.argv[1] + \
		':8181/restconf/config/network-topology:network-topology' + \
		'/topology/topology-netconf/node/controller-config' + \
		'/yang-ext:mount/config:modules/module' + \
		'/odl-sal-netconf-connector-cfg:sal-netconf-connector/' + \
		sys.argv[3]

request_body = request_template % (sys.argv[3], sys.argv[2], port, uname, pword)

headers = { 
	'Content-Type' : 'application/json',
	'Accept' : 'application/json' }

# Put Node to ODL
print requests.put(url, data=request_body, headers=headers, \
					auth=(odl_uname, odl_pword)).status_code

