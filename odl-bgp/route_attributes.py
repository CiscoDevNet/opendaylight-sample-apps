"""ODL BGP route attributes wrapper

  Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.

API:

get:
returns all attributes for prefix

set_origin
parameter: string representing the origin

set_as_path
parameter: list of tuples of the form ("as", asn)
(note the encoding will change with ODL Beryllium)

set_med
parameter: integer MED

set_local_pref
parameter: integer local pref

set_atomic_aggregate
parameter: if set then advertise atomic aggregate

set_aggregator
parameter: dict with keys "as-number" and "network-address"

set_communities
parameter: list of dictionaries (with keys "as-number" and "semantics")

set_extended_communities
parameter: list of dictionaries (with keys "comm-type" and "comm-sub-type")
**** needs enhancing with specifics per comm-type/comm-sub-type

set_originator_id
parameter: IPv4 address of originator

set_cluster_id
parameter: IPv4 address for cluster
"""
#!/usr/bin/env python

import json

class attributes(object):

	def __init__(self):
		self.attributes = {}
		self.set_origin(None)
		self.set_as_path(None)	
		self.set_local_pref(100)

	def __repr__(self):
		return json.dumps(self.get())

	def get(self):
		return self.attributes

	def set_origin(self, value):
		"""To set up the origin"""
		if value:
			self.attributes["origin"] = {"value":value}
		else:
			self.attributes["origin"] = {"value":"igp"}

	def set_as_path(self, value):
		"""To set up the AS Path"""
		"""Ignored AS set as very rare 'in the wild'"""
		"""This is for Lithium - syntax changes in Beryllium"""
		if value:
			self.attributes["as-path"] = {"segments": \
		                                 [{"a-list":{"as-sequence":[{"as": asn} \
		                                  for asn in value.split()]}}]}
		else:
			self.attributes["as-path"] = {}

	def set_next_hop(self, value):
		if value:
			self.attributes["ipv4-next-hop"] = {"global":value}

	def set_med(self, value):
		if value:
			self.attributes["multi-exit-disc"] = {"med":value}

	def set_local_pref(self, value):
		if value:
			self.attributes["local-pref"] = {"pref":value}

	def set_atomic_aggregate(self, value):
		""" presence container"""
		if value:
			self.attributes["atomic-aggregate"] = {}

	def set_aggregator(self, value):
		if value:
			self.attributes["aggregator"] = {"as-number":value.split[0],
		                                     "network-address":value.split[1]}
 
 	def set_communities(self, value):
 		if value:
 			self.attributes["communities"] = [{"as-number": int(c.split(":")[0]), \
 		                                       "semantics": c.split(":")[1]} \
 		                                      for c in value.split()]

 	def set_extended_communities(self, value):
 		""" need to finish this one - needs specifics """
 		if value:
 			self.attributes["extended-communities"] = [{"comm-type": c.split(":")[0], \
 		                                                "comm-sub-type": int(c.split(":")[1])} \
 		                                               for c in value.split()] \

 	def set_originator_id(self,value):
 		if value:
			self.attributes["originator-id"] = {"originator":value}


	def set_cluster_id(self, value):
		if value:
			self.attributes["cluster-id"] = {"cluster":[v for v in value.split()]}


