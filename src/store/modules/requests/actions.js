export default {
    contactMentor(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            mentorId: payload.mentorId,
            userEmail: payload.email,
            message: payload.message
        }
        context.commit('addRequest', newRequest)
    }
}