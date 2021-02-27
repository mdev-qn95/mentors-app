<template>
  <section>Bộ lọc</section>
  <section>
    <div class="controls">
      <button>Làm mới</button>
      <router-link to="/register">Đăng ký khóa học</router-link>
    </div>
    <ul v-if="hasCourses">
      <li v-for="course in filteredCourses" :key="course.id">
        {{ course.lastName }}
      </li>
    </ul>
    <h3 v-else>Không tìm thấy khóa học nào.</h3>
  </section>
</template>

<script>
export default {
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