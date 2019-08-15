<template>
    <div>
        <content>
            <row type="flex" justify="start" class="mx-3 my-4">
                <Col>
                    <Select v-model="searchModel.departmentId" style="width:150px" placeholder="請選擇部門">
                        <Option value="0">全部員工</Option>
                        <Option v-for="item in departments" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
                <Col class="mx-1">
                    <Input v-model="searchModel.keyword">
                        <Icon type="ios-search" slot="prefix"/>
                    </Input>
                </Col>
                <Col>
                    <Button type="primary">查詢</Button>
                </Col>
            </row>
            <row type="flex" justify="start" class="mx-3 my-4">
                <Breadcrumb separator=">">
                    <BreadcrumbItem>全部</BreadcrumbItem>
                    <BreadcrumbItem v-if="searchModel.departmentId>0">{{currentDepartment}}</BreadcrumbItem>
                </Breadcrumb>
            </row>
            <Table :columns="columns" :data="employees" class="mx-3"></Table>
            <row type="flex" justify="center"  class="mt-4">
                <Page :total="100"/>
            </row>
        </content>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '#',
                        key: 'id'
                    },
                    {
                        title: '會員姓名',
                        key: 'name'
                    },
                    {
                        title: '會員帳號',
                        key: 'account'
                    },
                    {
                        title: '會員密碼',
                        key: 'password'
                    },
                    {
                        title: '信箱',
                        key: 'email'
                    },
                    {
                        title: '電話',
                        key: 'phone'
                    },
                    {
                        title: '狀態',
                        key: 'status'
                    }
                ],
                employees: [
                ],
                departments: [
                    {
                        value: 1,
                        label: '部門1'
                    },
                    {
                        value: 2,
                        label: '部門2'
                    },
                    {
                        value: 3,
                        label: '部門3'
                    },
                    {
                        value: 4,
                        label: '部門4'
                    },
                    {
                        value: 5,
                        label: '部門5'
                    }
                ],
                searchModel: {
                    keyword: '',
                    departmentId: 0
                }
            }
        },
        created () {
            this.$emit('getPageTitle', '');
            // this.loadData()
        },
        computed: {
            loadData(){
                // fetch("/Api/users/list", {
                //     method: "GET",
                //     body: {
                //         page: '1',
                //         size: '10',
                //         name: '',
                //         account: ''
                //     },
                //     //headers: { "content-type": "application/json" } //{"Content-Type": "application/x-www-form-urlencoded"}
                // }).then(response => {
                //     console.log(response)
                //     // if(response.status === 200){
                //     //     this.$router.push('./users')
                //     // }
                // })
            },
            currentDepartment () {
                let departmentName = ''
                if (this.searchModel.departmentId > 0) {
                    departmentName = this.departments.find(x => x.value === this.searchModel.departmentId).label
                }
                return departmentName
            }
        }
    }
</script>
