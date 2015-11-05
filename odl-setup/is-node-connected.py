#!/usr/bin/env python

import sys
import requests
import json

odl_user = 'admin'
odl_pass = 'admin'

req_hdrs = { 'Content-Type' : 'application/json' }

url = 	'http://' + sys.argv[1] + ':8181' + \
		'/restconf/operational/network-topology:network-topology/topology' + \
		'/topology-netconf/node/' + sys.argv[2]

r = requests.get(url, headers=req_hdrs, auth=(odl_user, odl_pass))

if (r.status_code == 200):
	c = json.loads(r.text)['node'][0]['netconf-node-topology:connection-status']
	if (c == 'connected'):
		print 'node connected'
		sys.exit(0)
	else:
		print 'node not yet connected'
		sys.exit(1)
else:
	print 'unable to get node status'
	sys.exit(2)
