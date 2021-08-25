### Install
Install multipass: https://multipass.run/

### Run
Launch VM
```
multipass launch -n my-test-vm --cloud-init cloud-init.yml
```
Open bash
```
multipass exec my-test-vm -- bash
```
Start testing
```
node index.js 10000 ws://example.com/ws/sub
```
