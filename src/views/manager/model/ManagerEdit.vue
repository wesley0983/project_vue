<template>
    <div>
        <div v-if="editType === 'managerAdd'">
            <Modal
                    v-model="modal1"
                    title="新增"
                    @on-ok="ok"
                    @on-cancel="cancel">
                <row>
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="名稱">
                            <Input type="text" v-model="formItem.input"></Input>
                        </FormItem>
                        <FormItem label="帳號">
                            <Input type="text" v-model="formItem.input"></Input>
                        </FormItem>
                        <FormItem label="密碼">
                            <Input type="text" v-model="formItem.input"></Input>
                        </FormItem>
                    </Form>
                </row>
            </Modal>
        </div>
        <div v-else>
            <Modal
                    v-model="modal1"
                    title="修改"
                    @on-ok="ok"
                    @on-cancel="cancel">
                <row>
                    <Form :model="formItem" :label-width="80">
                        <formItem label="名稱">
                            <Input type="text" v-model="formItem.input"></Input>
                        </formItem>
                        <formItem label="帳號">
                            <Input type="text" v-model="formItem.input"></Input>
                        </formItem>
                        <formItem label="密碼">
                            <Input type="text" v-model="formItem.input"></Input>
                        </formItem>
                    </Form>
                </row>
            </Modal>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                editType: 'managerEdit',
                modal1: false,
                formItem: {
                    input: ''
                }
            }
        },
        methods: {
            showList (type) {
                let vm = this
                vm.editType = type
                this.modal1 = true
            },
            ok () {
                this.$Message.info('Clicked ok')
            },
            cancel () {
                this.$Message.info('Clicked cancel')
            }
        }
    }
</script>
