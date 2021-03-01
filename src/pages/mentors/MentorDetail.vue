<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedMentor: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedMentor.firstName + " " + this.selectedMentor.lastName;
    },
    areas() {
      return this.selectedMentor.areas;
    },
    rate() {
      return this.selectedMentor.hourlyRate;
    },
    description() {
      return this.selectedMentor.description;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
  created() {
    this.selectedMentor = this.$store.getters["mentors/mentors"].find(
      (mentor) => mentor.id === this.id
    );
  },
};
</script>