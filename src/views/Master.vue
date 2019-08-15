<template>
    <Layout style="position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;">
        <Sider hide-trigger ref="side_menu" :style="{background: '#fff'}">
            <Menu :active-name="activeMenu" theme="light" width="auto">
                <MenuItem v-model="pageTitle" v-for="(menu,key) in menus" :to="menu.routerName" :name="menu.value">
                    {{menu.title}}
                </MenuItem>
            </Menu>
        </Sider>
        <Layout>
            <Layout>
                <Header>
                    <Row type="flex" justify="space-between">
                        <Col span="18">
                        <Row type="flex" justify="start">
                        <Col>
                        <p class="text-white mr-2">LDAP讀取模式</p>
                        </Col>
                        <Col offset="1">
                        <i-switch size="large" v-model="isSwitch">
                        <span slot="open">更新</span>
                        <span slot="close">即時</span>
                        </i-switch>
                        </Col>
                        <Col v-if="isSwitch" offset="1">
                        <Row type="flex" justify="start">
                        <Col>
                        <Button size="small" type="warning" @click="updateList">更新使用者列表</Button>
                        </Col>
                        <Col class="text-white ml-1">
                        最後更新時間:{{updateTime}}
                        </Col>
                        </Row>

                        </Col>
                        </Row>

                        </Col>
                        <Col span="6">
                        <Row type="flex" justify="end">
                        <Col class="text-white mr-2">Hello, Dylan</Col>
                        <Col>
                        <Avatar icon="ios-person" size="large" @click.native="logPage"/>
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                </Header>
                <Layout class="px-3 pb-3">
                    <Row>
                        <h1 class="my-2">{{pageTitle}}</h1>
                    </Row>
                    <Content :style="{ background: '#fff'}">
                        <router-view @getPageTitle="getPageTitle"></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </Layout>
</template>

<script>
export default {
    name: 'master.vue',
    data () {
        return {
            pageTitle: '',
            menus: [
                { value: 1, routerName: 'users', title: '員工列表' },
                { value: 2, routerName: 'manager', title: '新增管理人員' },
            ],
            activeMenu: '',
            updateTime: '',
            isSwitch: false
        }
    },
    created () {
        this.updateList()
    },
    methods: {
        getPageTitle () {
            let menu = this.menus.find(x => x.routerName === this.$router.currentRoute.name)
            this.pageTitle = menu.title
            this.activeMenu = menu.value
        },
        logPage () {
            this.$router.push('./')
        },
        updateList () {
            let currentDate = new Date()
            let currentMinutes = currentDate.getMinutes()
            if (currentMinutes <= 9) {
                currentMinutes = `0${currentMinutes}`
            }
            this.updateTime = ` ${currentDate.getMonth() + 1}/${currentDate.getDate()}   ${currentDate.getHours()}:${currentMinutes}`
        }
    }
}

</script>

<style scoped>

</style>
