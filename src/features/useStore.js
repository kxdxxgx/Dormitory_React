// features/useStore.js

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import { useMemo } from 'react'

// configureStore 관련 코드는 다음처럼 useMemo 훅을 사용한
// useStore란 이름의 커스텀 훅 형태로 메모리 효율을 생각해서 구현합니다.

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
    const middlewareEnhancer = (getDefaultMiddleware) => {
        let middleware = getDefaultMiddleware().concat(thunk)
        if (useLogger) {
            middleware = middleware.concat(logger)
        }
        return middleware
    }

    const store = configureStore({ reducer: rootReducer, middleware: middlewareEnhancer })
    return store // 이 부분 추가
}

export function useStore() {
    const store = useMemo(() => initializeStore(), [])
    return store
}