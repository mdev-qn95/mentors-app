<template>
  <section>Bộ lọc</section>
  <section>
    <div class="controls">
      <button>Làm mới</button>
      <router-link to="/register">Đăng ký khóa học</router-link>
    </div>
    <ul v-if="hasCourses">
      <course-item
        v-for="course in filteredCourses"
        :key="course.id"
        :id="course.id"
        :firstName="course.firstName"
        :lastName="course.lastName"
        :rate="course.hourlyRate"
        :areas="course.areas"
      ></course-item>
    </ul>
    <h3 v-else>Không tìm thấy khóa học nào.</h3>
  </section>
</template>

<script>
import CourseItem from "../../components/courses/CourseItem";
export default {
  components: {
    CourseItem,
  },
  computed: {
    filteredCourses() {
      return this.$store.getters["courses/courses"];
    },
    hasCourses() {
      return this.$store.getters["courses/hasCourses"];
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