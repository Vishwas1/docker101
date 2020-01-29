docker images --help
docker pull jboss/keycloak


Images

Virtualization

Is the process of using special software (called hypervisor) on a physical machine (host) to create virtual machines (guest).
We can create as many as VMs as long as RAM, CPU allows
All VMs share same resources 

Hypervisor

A hypervisor is a computer software, firmware or hardware that creates and runs virtual machines. A computer on which a hypervisor runs one or more virtual machines is called a host machine, and each virtual machine is called a guest machine.

The hypervisor presents the guest operating systems with a virtual operating platform and manages the execution of the guest operating systems.

Types:
Type1 : Runs directly on top of host hardware ex. HyperKit / Hyper-V
Type2 : Runs as an app on the host OS. Ex. Virtual Box / VMWare


## Docker container are not VM

```
                  Virtual Machines	                       |          Docker   
+-----------------------------------------------------------+----------------------------------------------------------
APP #1     | APP #1    | APP #1    | APP #1    	           |
Bins/libs  | Bins/libs | Bins/libs | Bins/libs             | APP #1       | APP #1         | APP #1        | APP #1    	           
Guest OS   | Guest OS  | Guest OS  | Guest OS              | Bins/libs    | Bins/libs      | Bins/libs     | Bins/libs
+-----------------------------------------------------------|----------------------------------------------------------	
                  Hypervisor				                        Docker Daemon
---------------------------------------------------------- |----------------------------------------------------------	
                  Host OS				                      	        Host OS
---------------------------------------------------------- |----------------------------------------------------------	
                  Hardware				                          Hardware
---------------------------------------------------------- | ---------------------------------------------------------

```


```

	Container	          |		VMs
----------------------|--------------------------------
Starts in seconds	    | 	Starts in minutes
Saves resource	      |	Waste resource
Isolates applications	|	Isolates systems
Analogy: Apartments	  |	Analogy: Houses

```


