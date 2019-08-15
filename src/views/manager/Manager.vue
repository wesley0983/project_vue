<template>
    <div>
        <content>
            <row type="flex" justify="end">
                <Button type="primary" @click="show('managerAdd')">新增</Button>
            </row>
            <Table border :columns="columns" :data="managers" :style="{margin:'20px'}">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show('managerEdit')">修改</Button>
                    <Button type="error" size="small" @click="remove()">刪除</Button>
                </template>
            </Table>
        </content>
        <manager-edit ref="modalManagerEdit"></manager-edit>
    </div>
</template>

<script>
    import ManagerEdit from './model/ManagerEdit.vue'

    export default {
        name:'newManager',
        components:{
            'manager-edit': ManagerEdit
        },
        data () {
            return {
                columns: [
                    {
                        title: '#',
                        key:'id',
                        align: 'center'
                    },
                    {
                        title: '名稱',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '帳號',
                        key: 'account',
                        align: 'center'
                    },
                    {
                        title: '密碼',
                        key: 'password',
                        align: 'center'
                    },
                    {
                        title: '編輯',
                        slot: 'action',
                        align: 'center'
                    }
                ],
                managers: [
                    {
                        id:'1',
                        name: 'Mark',
                        account: '@mdo',
                        password: 'sss'
                    },
                    {
                        id:'2',
                        name: 'Jacob',
                        account: '@fat',
                        password: 'sss'
                    },
                    {
                        id:'3',
                        name: 'Larry',
                        account: '@twitter',
                        password: 'sss'
                    },
                ]
            }
        },
        created(){
            this.$emit('getPageTitle','')
        },
        methods: {
            show (btn) {
                switch (btn) {
                    case 'managerEdit':
                        this.$refs.modalManagerEdit.showList(btn)
                        break
                    case 'managerAdd':
                        this.$refs.modalManagerEdit.showList(btn)
                }
            },
            remove () {
                this.$Modal.confirm({
                    title: '刪除',
                    content: '<p>你是否確定要刪除?</p>',
                    okText: '確定刪除',
                    cancelText: '取消',
                    onOk: (index) => {
                        this.managers.splice(index, 1);
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            }
        }
    }
</script>
