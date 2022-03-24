<template>
  <div class="container">
      <h1>Novo usuário</h1>
    <form @submit.prevent="enviarFormulario()">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome"/>
      </div>
      <div class="form-group">
        <label for="nome">Email</label>
        <input type="email" class="form-control"  v-model="usuario.email"/>
      </div>
      <div class="form-group">
        <label for="nome">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha"/>
      </div>
      <button class="btn btn-success" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>

export default {

    data() {
        return {
            usuario: {
                nome: '',
                senha: '',
                email: ''
            }
        }
    },

    methods: {
        enviarFormulario(){
            this.$http.post('auth/register', this.usuario)
            .then( response => {
                this.$router.push({name: 'login'})
                console.log(response)
            })
            .catch(error => console.log(error))
        }
    },
};
</script>

<style scoped>
    .container {
        margin-top: 50px;
    }
</style>
