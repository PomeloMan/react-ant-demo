import {
    TOGGLE_COLLAPSED,
    SELECT,
    SELECT_ODD,
    SELECT_EVEN
} from './action/action-type'

const _state = {
    collapsed: true,
    user: {},
    role: {}
}

const reducer = (state = _state, action) => {
    let current = state[action.page];
    if (current) {
        state[action.page] = pageReducer(current, action);
        return Object.assign({}, state);
    } else {
        switch (action.type) {
            case TOGGLE_COLLAPSED:
                return {
                    ...state,
                    collapsed: action.collapsed
                };
            default:
                return state;
        }
    }
}

const pageReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT:
            return {
                ...state,
                selectedRowKeys: selectionReducer(action.selectedRowKeys, action)
            };
        case SELECT_ODD:
            return {
                ...state,
                selectedRowKeys: selectionReducer(action.selectedRowKeys, action)
            };
        case SELECT_EVEN:
            return {
                ...state,
                selectedRowKeys: selectionReducer(action.selectedRowKeys, action)
            };
        default:
            return state;
    }
}

const selectionReducer = (state = [], action) => {
    switch (action.type) {
        case SELECT:
            return state;
        case SELECT_ODD:
            return state.filter((key, index) => {
                if (index % 2 !== 0) {
                    return false;
                }
                return true;
            });
        case SELECT_EVEN:
            return state.filter((key, index) => {
                if (index % 2 !== 0) {
                    return true;
                }
                return false;
            });
        default:
            return state
    }
}
export default reducer;