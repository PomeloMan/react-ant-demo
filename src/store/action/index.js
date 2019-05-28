import {
    TOGGLE_COLLAPSED,
    SELECT,
    SELECT_ODD,
    SELECT_EVEN
} from './action-type';

export const actions = (page) => ({
    select: (selectedRowKeys) => ({
        type: SELECT,
        page: page,
        selectedRowKeys: selectedRowKeys
    }),
    selectOdd: (changableRowKeys) => ({
        type: SELECT_ODD,
        page: page,
        selectedRowKeys: changableRowKeys
    }),
    selectEven: (changableRowKeys) => ({
        type: SELECT_EVEN,
        page: page,
        selectedRowKeys: changableRowKeys
    })
})

export default {
    toggleCollapse: (collapsed) => {
        return {
            type: TOGGLE_COLLAPSED,
            collapsed: !collapsed
        }
    },
    // select: (selectedRowKeys) => ({
    //     type: SELECT,
    //     selectedRowKeys: selectedRowKeys
    // }),
    // selectOdd: (changableRowKeys) => ({
    //     type: SELECT_ODD,
    //     selectedRowKeys: changableRowKeys
    // }),
    // selectEven: (changableRowKeys) => ({
    //     type: SELECT_EVEN,
    //     selectedRowKeys: changableRowKeys
    // })
}
