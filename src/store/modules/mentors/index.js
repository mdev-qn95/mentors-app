import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            mentors: [
                {
                    id: 'm1',
                    firstName: 'Thái',
                    lastName: 'Văn Phú',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Thái Văn Phú and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'm2',
                    firstName: 'Thái',
                    lastName: 'Bảo',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Thái Bảo and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}