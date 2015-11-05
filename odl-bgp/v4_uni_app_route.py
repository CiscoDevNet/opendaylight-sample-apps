"""ODL BGP App peer wrapper (IPv4 unicast only)

  Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.

API:

get_app_route - gets one specific app route
parameter: IPv4 prefix

del_app_route - deletes one specific app route
parameter: IPv4 prefix

put_app_route - adds an app route
parameters: IPv4 prefix, attributes
"""
#!/usr/bin/env python

import json
import requests
import urllib

class app_route(object):
	base_hdr = {	'Authorization' : 'Basic YWRtaW46YWRtaW4=',
					'Content-Type' : 'application/json' }
	routes = 	'/bgp-rib:application-rib/example-app-rib' \
				'/tables/bgp-types:ipv4-address-family' \
				'/bgp-types:unicast-subsequent-address-family' \
				'/ipv4-routes'
	base_url = ""
	attributes = {}

	def __init__(self, controller_ip):
		self.base_url = 'http://%s:8181/restconf/config' % controller_ip

	def _make_url(self, prefix):
		return self.base_url + self.routes + '/ipv4-route/' + urllib.quote_plus(prefix)

	def _get_data(self, url):
		return json.loads(requests.get(url, headers=self.base_hdr).text)

	def _del_data(self, url):
		return requests.delete(url, headers=self.base_hdr)

	def _put_data(self, url, data):
		return requests.put(url, data=json.dumps(data), headers=self.base_hdr)

	def get_app_route(self, prefix):
		return self._get_data(self._make_url(prefix))

	def del_app_route(self, prefix):
		return self._del_data(self._make_url(prefix))

	def put_app_route(self, prefix, attributes):
		self._put_data(self._make_url(prefix), {"bgp-inet:ipv4-route":[{"prefix":prefix, "attributes":attributes}]})

