# odl-setup
This directory contains setup scripts for ODL.

Install these files into a directory (e.g. "ODL").

Within that directory create an "images" subdirectory and copy the appropriate OpenDaylight distribution file (.tar.gz) there.

So you will now have 2 subdirectories:

* python
* images

### Scripts are:

**unpack-odl** unpacks the .tar.gz file.  Creates a new subdirectory for the ODL distro.

**setup-odl** sets up logging/features for ODL

**start-vpn** connects to dCloud VPN.  Takes 3 parameters:  

* site (rtp/lon/sng/chi)
* username
* password

**stop-vpn** disconnects from dCloud VPN

**start-odl** cleans out data from previous runs and starts ODL

**stop-odl** stops ODL

**config-odl** sets up NETCONF nodes, BGP neighbor etc. - uses scripts from the python subdirectory

**delete-odl** deletes the ODL distribution

### Additional files are:

**distro** distribution to run

**features** list of features to run

**logs** extra logs to run

**nodes** list of NETCONF nodes.  Last node in the list is the BGP neighbor.

### Python scripts are:

**put-node.py** mounts a node

**is-node-connected.py** checks if a node is mounted

**put-bgp-rib.py** configures the ODL BGP RIB

**put-app-rib.py** configures the ODL App RIB

**put-bgp-peer.py** configures ODL's BGP peer (XR)

**put-bgp-neighbor.py** configures XR with ODL as a BGP peer