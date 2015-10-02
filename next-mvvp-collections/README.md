# next-mvvp-collections
This sample shows how you can use NeXt's realization of MVVP (Model-View-ViewModel) and observable collections.
MVVP is a programming pattern that simplifies understanding your code and make its stucture more clear.
Collections are 'wraps' of array in NeXt; and Observable Collection is the special class in NeXt that allows you to listen to events.

## How To Use This Application
1. Enter a contact's data
2. Hit 'Add'
3. Hit 'Remove' if you want to remove any contact

## How It Works
It uses MVVP idea and NeXt's ObservableCollections. When you enter the data and hit 'Add', the data is added to the Observable Collection (which is able to be listened for the events).

## Why I Need Collections
Collections are especially useful for dynamic topologies: you can track changes and modify small pieces of the topology instead of refreshing the whole topology.

It increases performance and expands possibilities of your application.