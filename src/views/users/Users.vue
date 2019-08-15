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
                        key: 'item'
                    },
                    {
                        title: '員工姓名',
                        key: 'name'
                    },
                    {
                        title: '員工編號',
                        key: 'number'
                    },
                    {
                        title: '權限',
                        key: 'access'
                    },
                    {
                        title: '部門',
                        key: 'department'
                    },
                    {
                        title: '職級',
                        key: 'rank'
                    }
                ],
                employees: [
                    {
                        item: '1',
                        name: 'Mark',
                        number: 'Otto',
                        access: '@mdo',
                        department: '',
                        rank: ''
                    },
                    {
                        item: '2',
                        name: 'Mark',
                        number: 'Otto',
                        access: '@mdo',
                        department: '',
                        rank: ''
                    },
                    {
                        item: '3',
                        name: 'Mark',
                        number: 'Otto',
                        access: '@mdo',
                        department: '',
                        rank: ''
                    }
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
            this.$emit('getPageTitle', '')
        },
        computed: {
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
