<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin()">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
            <button type="submit" class="btn btn-success brn-block">Login</button>
            <button style="margin-left: 15px" class="btn btn-primary brn-block" @click.prevent="reset">Limpar</button>
            <router-link :to="{name : 'novo.usuario'}" style="padding-left: 25px">Não possui cadastro? Cadastre-se aqui</router-link>
        </form> 
    </div>    
</template>

<script>

export default {
    data() {
        return {
            usuario: { },
            mensagemErro: ''
        }
    },

    methods: {
        efetuarLogin () {
            this.$store.dispatch('efetuarLogin', this.usuario)
            .then(() => {
                this.$router.push({name: 'gerentes'})
                this.mensagemErro = ''
            } )
            .catch( erro => {
                if(erro.request.status === 401 ){
                    this.mensagemErro = 'Login ou senha inválidos'
                }
            })
        },
        reset(){
            this.usuario = {}
        }
    },
}
</script>

<style scoped>
 .container {
        margin-top: 50px;
    }
</style>
