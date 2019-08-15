<template>
    <div class="login">
        <h2>Login</h2>
        <div>
            <div>{{msg}}</div>
            <div class="loginPage">
                <Card>
                    <div class="loginTitle">
                        <Avatar icon="ios-person" size="large" />
                    </div>
                    <div class="loginBody">
                        <Row>
                            <Input
                                    class="mb-3"
                                    v-model="username"
                                    prefix="md-person"
                                    placeholder="Account"
                                    style="width: auto"
                            />
                            <Input
                                    class="mb-3"
                                    v-model="password"
                                    prefix="md-lock"
                                    placeholder="Account"
                                    style="width: auto"
                            />
                            <Input
                                    class="mb-3"
                                    v-model="imageCode"
                                    prefix="md-lock"
                                    placeholder="Enter imageCode"
                                    style="width: auto"
                            />
                            <img src="/api/Api/code/image" />
                        </Row>
                        <!-- <Row>
                          <Checkbox v-model="check">Remember me</Checkbox>
                        </Row> -->
                    </div>
                    <div class="loginFooter">
                        <Button @click="login" type="primary">Login</Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                imageCode: "",
                msg: ""
            };
        },
        methods: {
            login() {
                this.Logan.login(this.username,this.password,this.imageCode).then(response => {
                    window.console.log(response)
                    if (response.status === 201) {
                        this.$router.push('./users')
                    } else {
                        alert(response.message)
                    }
                });

                /**  舊版登入 **/
                // fetch("/api/Api/nrsc/signIn", {
                //     method: "POST",
                //     body: JSON.stringify({
                //         username: this.username,
                //         password: this.password,
                //         imageCode: this.imageCode
                //     }),
                //     headers: { "content-type": "application/json" } //{"Content-Type": "application/x-www-form-urlencoded"}
                // }).then(response => {
                //     console.log(response)
                //     if(response.status === 200){
                //         this.$router.push('./users')
                //     }
                // })
            }
        },
        mounted() {
            // fetch("/api/Api/testPost",{
            //     method:"POST"
            // }).then(response => {
            //     console.log(response);
            //     return response.json()
            //     // return response.json();
            // }).then(data => {
            //     console.log(data)
            //     this.msg = data;
            // })
        }
    };
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
