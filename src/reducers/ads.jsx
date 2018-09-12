import C from '../constans';


export const ads = (state = [], action) => {
    switch (action.type) {
        case C.DELETE_AD:
            return [...state.slice(0, action.ad_id),
                ...state.slice(action.ad_id + 1)];
        case C.ADD_NEW_AD:
            return [...state,
                {
                    title: action.title,
                    description: action.description,
                    phone: action.phone,
                }];
        default:
            return state;
    }
};