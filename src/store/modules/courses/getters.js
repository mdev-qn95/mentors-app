export default {
    courses(state) {
        return state.courses
    },
    hasCourses(state) {
        return state.courses && state.courses.length > 0
    }
}