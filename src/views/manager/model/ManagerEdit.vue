<template>
    <div>
        <div v-if="editType === 'managerAdd'">
            <Modal
                    v-model="modal"
                    title="新增"
                    @on-ok="addOk"
                    @on-cancel="cancel">
                <row>
                    <div>帳號:</div>
                    <Input
                            v-model="addManager.account"
                            prefix="md-person"
                            placeholder="Account"
                            :label-width="80"
                    />
                    <div>密碼:</div>
                    <Input
                            v-model="addManager.password"
                            prefix="md-person"
                            placeholder="Password"
                            :label-width="80"
                    />
                    <div>名字:</div>
                    <Input
                            v-model="addManager.name"
                            prefix="md-lock"
                            placeholder="Account"
                            :label-width="80"
                    />
                </row>
            </Modal>
        </div>
        <div v-else>
            <Modal
                    v-model="modal"
                    title="修改"
                    @on-ok="editOk"
                    @on-cancel="cancel">
                <row>
                    <Form :model="editItem" :label-width="80">
                        <formItem label="帳號">
                            {{editItem.account}}
                        </formItem>
                        <formItem label="名稱">
                            <Input type="text" v-model="editItem.name"/>
                        </formItem>
                        <formItem label="密碼">
                            <Input type="password" v-model="editItem.password"/>
                        </formItem>
                    </Form>
                </row>
            </Modal>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                row: '',
                editType: 'managerEdit',
                modal: false,
                addManager: {
                    account: '',
                    password: '',
                    name: '',
                },
                editItem: {
                    id:'',
                    account:'',
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            showList(type, row) {
                let vm = this
                vm.editType = type
                this.modal = true
                switch (vm.editType) {
                    case "managerEdit":
                        let {id, account, name , password} = row
                        this.editItem = {id, account, name , password}
                        break
                }
            },
            addOk() {
                fetch('/api/Api/manager/addManager', {
                    method: 'POST',
                    body: JSON.stringify({
                        account: this.addManager.account,
                        password: this.addManager.password,
                        name: this.addManager.name
                    }),
                    headers: {'content-type': 'application/json'}
                }).then(response => {
                    return response.json()
                }).then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        this.$Message.info('新增成功')
                        // console.log(this.createItem)
                        for (let i in this.addManager) {
                            this.addManager[i] = ''
                        }
                        this.$parent.loadData()
                        return
                    }
                    this.$Message.error(response.message);
                    this.modal = true

                })
            },
            editOk() {
                fetch('/api/Api/manager/updateManager',{
                    method: 'PUT',
                    body: JSON.stringify({
                        id:this.editItem.id,
                        account:this.editItem.account,
                        password: this.editItem.password,
                        name: this.editItem.name
                    }),
                    headers: {'content-type': 'application/json'}
                }).then(response => {
                    if (response.status === 200) {
                        this.$Message.info('修改成功')
                        this.$parent.loadData();
                        return
                    }
                    this.$Message.info('修改失敗')
                })
            },
            cancel() {
                this.$Message.info('Clicked')
            }
        }
    }
</script>
