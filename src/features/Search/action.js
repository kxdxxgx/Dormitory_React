// features/Search/action.js

export const setKeyword = (payload) => ({
    type: '@search/setKeyword',
    payload
})

export const setDate = (payload) => ({
    type: '@search/setDate',
    payload
})

export const setGuest = (payload) => ({ // 수정된 부분
    type: '@search/setGuest',
    payload
})