<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button @click="login" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      users: [
        {
          user: "admin",
          password: "admin"
        }
      ]
    };
  },
  methods: {
    login() {
      for (let index in this.users) {
        if (this.username == this.users[index].user) {
          if (this.password == this.users[index].password) {
            this.$account = true;
            this.$router.push({ name: "home" });
          }
        }
      }
    }
  }
};
</script>