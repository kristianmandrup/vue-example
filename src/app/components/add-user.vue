<template>
  <div>
    <!-- Form -->
    <form novalidate v-on:submit.prevent="adduser">
      <input type="text" v-model="user.name" placeholder="user name"/>
      <input type="checkbox"v-model="user.enabled"/> Enabled
      <button>+ Add user</button>
    </form>
    <!-- List -->
    <pre v-for="user in users">
      Name: {{user.name}}
      Enabled: {{user.enabled}}
    </pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      enabled: true
    }
  }),
  computed: {
    users () {
      return this.$store.state.users.reverse();
    }
  },
  methods: {
    adduser () {
      return this.$store.commit('addUser', JSON.parse(JSON.stringify(this.user)));
    }
  }
}
</script>
