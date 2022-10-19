import * as constant from "../constants/constants"
const comedyReducer = (state, actions) => {
    switch (actions.type) {
        case constant.VADIVEL_COMEDY:
            return state = "He is Good"
        case constant.GOUNDAMANI_COMEDY:
            return state = "He is Bad"
        default:
            return state = "No Comments"
    }
}
export default comedyReducer;