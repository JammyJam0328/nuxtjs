<template>
  <div>Redirecting . . .</div>
</template>

<script>
export default {
  middleware: 'auth',
  mounted() {
    if (this.$auth.user.role == 'admin') {
      this.$router.push('/admin/')
    } else if (this.$auth.user.role == 'accommodator') {
      this.$router.push('/accommodator/')
    }
  },
}
</script>
