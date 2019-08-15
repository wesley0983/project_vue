<template>
    <div class="loginPage">
        <Card>
            <div class="loginTitle my-4">
                <Avatar icon="ios-person" size="large"/>
            </div>
            <div class="loginBody my-4">
                <Row>
                    <Input class="mb-3" prefix="md-person" size="large" v-model="account" clearable placeholder="Account"/>
                    <Input class="mb-3" prefix="md-lock" size="large" v-model="password" clearable placeholder="Password"/>
                </Row>
                <Row>
                    <Checkbox class="my-3" v-model="check">Remember me</Checkbox>
                </Row>

            </div>
            <div class="loginFooter my-5">
                <Button type="primary" @click="login">Login</Button>
            </div>
        </Card>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                check: false,
                account: '',
                password: ''
            }
        },
        methods: {
            login () {
                this.Logan.login(this.account, this.password).then(response => {
                    if(response.status === 201){
                        this.$router.push('./users')
                    }else{
                        alert(response.message)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .loginPage {
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .ivu-card {
        height: 400px;
        text-align: center;
    }

    .loginTitle {
        margin-bottom: 20px;
    }
</style>
