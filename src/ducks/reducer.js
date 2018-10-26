const initialState = {
    username: '',
    id: 0,
    profilePic: ''
};

const UPDATE_USERNAME = "UPDATE_USERNAME"
const UPDATE_ID = "UPDATE_ID"
const UPDATE_PROFILEPIC = "UPDATE_PROFILEPIC"

export default function reducer(state=initialState, action){
    switch (action.type){
        case UPDATE_USERNAME:
            return {...state, username: action.payload};
        case UPDATE_ID:
            return {...state, id: action.payload};
        case UPDATE_PROFILEPIC:
            return {...state, profilePic: action.payload};
        default:
            return state;
    }
}

export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updateId(id) {
    return {
        type: UPDATE_ID,
        payload: id
    }
}

export function updateProfilePic(profilePic) {
    return {
        type: UPDATE_PROFILEPIC,
        payload: profilePic
    }
}