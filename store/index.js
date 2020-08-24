export const state = () => ({
    userId: null,
    screen_name: null
})

export const mutations = {
    setUserId(state, userId){
        state.userId = userId
    },
    setScreenName(state, screen_name){
        state.screen_name = screen_names
    }
}
