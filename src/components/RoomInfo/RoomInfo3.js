import React, { useContext } from 'react'
import Column from '../Common/Column'
import RoomInfoContext from '../../context/RoomInfo_Context'
import Box from '../Common/Box'

export default function RoomInfo4() {
    const { roomInfos } = useContext(RoomInfoContext)
    let roomInfo6 = null
    let roomInfo7 = null
    if (roomInfos && roomInfos.roomInfos6) {
        roomInfo6 = roomInfos.roomInfos6
    }
    if (roomInfos && roomInfos.roomInfos7) {
        roomInfo7 = roomInfos.roomInfos7
    }

    return (
        <div className="col-start-3 col-end-11 w-full">
            <Box className="flex mt-16 p-10">
                <div className="flex-1">
                    {' '}
                    {/* flex-1을 사용하여 두 div가 동일한 공간을 차지하도록 설정 */}
                    <div className="text-lg font-semibold">[ 비품 정보 ]</div>
                    {roomInfo7 &&
                        roomInfo7.map((e, i) => (
                            <div key={i} className=" text-base font-medium">
                                {e.a_name}
                            </div>
                        ))}
                </div>
                <div className="flex-1">
                    {' '}
                    {/* flex-1을 사용하여 두 div가 동일한 공간을 차지하도록 설정 */}
                    <div className="text-lg font-semibold">[ 환불 규정 ]</div>
                    <Column className="mt-4 text-base font-medium">{roomInfo6 && roomInfo6.policy0}</Column>
                    <Column className="mt-4 text-base font-medium">{roomInfo6 && roomInfo6.policy1}</Column>
                </div>
            </Box>
        </div>
    )
}
