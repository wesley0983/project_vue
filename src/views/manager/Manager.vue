<template>
    <div>
        <content>
            <row type="flex" justify="start" class="mx-3 my-4">
                <Input v-model="searchModel.keyword">
                    <Icon type="ios-search" slot="prefix"/>
                </Input>
            </row>
            <Button type="primary" @click="search">查詢</Button>
            <row type="flex" justify="end">
                <Button type="primary" @click="show('managerAdd')">新增</Button>
            </row>
            <Table border :columns="columns" :data="managers" :style="{margin:'20px'}">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show('managerEdit', row)">修改
                    </Button>
                    <Button type="error" size="small" @click="remove()">刪除</Button>
                </template>
            </Table>
            <row type="flex" justify="center"  class="mt-4">
                <Page :total="page.total" show-total show-sizer @on-change="changePage" @on-page-size-change="changeSize"></Page>
            </row>
        </content>
        <manager-edit ref="modalManagerEdit"></manager-edit>
    </div>
</template>

<script>
    import ManagerEdit from './model/ManagerEdit.vue'

    export default {
        name: 'newManager',
        components: {
            'manager-edit': ManagerEdit
        },
        data() {
            return {
                columns: [
                    {
                        title: '#',
                        key: 'id',
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
                        title: '創建時間',
                        key: 'createTime',
                        align: 'center'
                    },
                    {
                        title: '更新時間',
                        key: 'updateTime',
                        align: 'center'
                    },
                    {
                        title: '編輯',
                        slot: 'action',
                        align: 'center'
                    }
                ],
                managers: [],
                page: {
                    total:0,
                    number: 0,
                    size: 10,
                },
                searchModel: {
                    keyword: '',
                },
                page: {
                    total:0,
                    number: 0,
                    size: 10,
                },
            }
        },
        created() {
            this.$emit('getPageTitle', '');
            this.loadData();
        },
        methods: {
            loadData() {
                fetch('/api/Api/manager/list', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.searchModel.keyword,
                        size: this.size,
                        number: this.page.number
                    }),
                    headers: {'content-type': 'application/json'} //{"Content-Type": "application/x-www-form-urlencoded"}
                }).then(response => {
                    return response.json()
                }).then(data => {
                    this.page.total = data.totalElements;
                    this.page.number = data.pageable.pageNumber;
                    this.managers = data.content;
                    this.size = data.size;
                })
            },
            search(){
                console.log(this.searchModel.keyword)
                this.loadData()
            },
            show(btn,row) {
                switch (btn) {
                    case 'managerEdit':
                        this.$refs.modalManagerEdit.showList(btn,row)
                        break
                    case 'managerAdd':
                        this.$refs.modalManagerEdit.showList(btn)
                }
            },
            remove() {
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
            },
            changePage (page) {
                this.page.number = page - 1
                this.loadData()
            },
            changeSize (pageSize) {
                this.page.size = pageSize
                this.loadData()
            }
        }
    }
</script>
