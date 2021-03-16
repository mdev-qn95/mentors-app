<template>
  <section>
    <base-card>
      <h2>Register as a mentor now!</h2>
      <mentor-form @save-data="saveData"></mentor-form>
    </base-card>
  </section>
</template>
<script>
import MentorForm from "../../components/mentors/MentorForm.vue";
export default {
  components: {
    MentorForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("mentors/registerMentor", data);
      this.$router.replace("/mentors");
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}
input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #039be5;
}
input[type="checkbox"]:focus {
  outline: #039be5 solid 1px;
}
h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>