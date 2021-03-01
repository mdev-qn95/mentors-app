<template>
  <section>
    <mentor-filter @change-filter="setFilters"></mentor-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Mentor</base-button>
      </div>
      <ul v-if="hasMentors">
        <mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :id="mentor.id"
          :firstName="mentor.firstName"
          :lastName="mentor.lastName"
          :rate="mentor.hourlyRate"
          :areas="mentor.areas"
        ></mentor-item>
      </ul>
      <h3 v-else>No mentors found.</h3>
    </base-card>
  </section>
</template>

<script>
import MentorItem from "../../components/mentors/MentorItem";
import MentorFilter from "../../components/mentors/MentorFilter";
export default {
  components: {
    MentorItem,
    MentorFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredMentors() {
      const mentors = this.$store.getters["mentors/mentors"];
      return mentors.filter(mentor => {
        if (this.activeFilters.frontend && mentor.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && mentor.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && mentor.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasMentors() {
      return this.$store.getters["mentors/hasMentors"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>