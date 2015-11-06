#!/usr/bin/env python

"""
post-nodes
adds a set of nodes to ODL
parameter:
* ODL IP address
uses HTTP POST with XML payload
"""

import sys
import requests

nodes = { 'kcy':'198.18.1.30',
          'lax':'198.18.1.31',
          'min':'198.18.1.32',
          'por':'198.18.1.33',
          'san':'198.18.1.34',
          'sea':'198.18.1.35',
          'sfc':'198.18.1.36',
          'sjc':'198.18.1.37'}
port = '830'
username = 'cisco'
password = 'cisco'

odl_user = 'admin'
odl_pass = 'admin'

# set up the request
request_template = '''<?xml version="1.0" encoding="UTF-8"?>
<module xmlns="urn:opendaylight:params:xml:ns:yang:controller:config">
	<type
		xmlns:prefix="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">prefix:sal-netconf-connector</type>
	<name>%s</name>
	<address
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">%s</address>
	<port
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">%s</port>
	<username
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">%s</username>
	<password
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">%s</password>
	<tcp-only
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">false</tcp-only>
	<event-executor
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">
		<type xmlns:prefix="urn:opendaylight:params:xml:ns:yang:controller:netty">prefix:netty-event-executor</type>
		<name>global-event-executor</name>
	</event-executor>
	<binding-registry
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">
		<type xmlns:prefix="urn:opendaylight:params:xml:ns:yang:controller:md:sal:binding">prefix:binding-broker-osgi-registry</type>
		<name>binding-osgi-broker</name>
	</binding-registry>
	<dom-registry
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">
		<type xmlns:prefix="urn:opendaylight:params:xml:ns:yang:controller:md:sal:dom">prefix:dom-broker-osgi-registry</type>
		<name>dom-broker</name>
	</dom-registry>
	<client-dispatcher
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">
		<type xmlns:prefix="urn:opendaylight:params:xml:ns:yang:controller:config:netconf">prefix:netconf-client-dispatcher</type>
		<name>global-netconf-dispatcher</name>
	</client-dispatcher>
	<processing-executor
		xmlns="urn:opendaylight:params:xml:ns:yang:controller:md:sal:connector:netconf">
		<type xmlns:prefix="urn:opendaylight:params:xml:ns:yang:controller:threadpool">
			prefix:threadpool</type>
		<name>global-netconf-processing-executor</name>
	</processing-executor>
</module>
'''

# check args length
if (len(sys.argv) != 2):
        print "usage %s ODL_IP_address" % sys.argv[0]
        sys.exit(1)

# set up the URL
url = 'http://admin:admin@' + sys.argv[1] + ':8181/restconf/config/network-topology:network-topology/topology/topology-netconf/node/controller-config/yang-ext:mount/config:modules'

# Post those nodes!
for name in nodes:
	address = nodes[name]
	print name, address
	request_body = request_template % (name, address, port, username, password)

	headers = { 
		'Content-Type' : 'application/xml',
		'Content-Length' : "%d" % (len(request_body)),
		'Accept' : 'application/json' }

	resp = requests.post(url, data=request_body, headers=headers, auth=(odl_user, odl_pass))
	print resp.status_code
