import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import { getNotifications } from 'server/fetch'

function NotificationMenu() {

    const [notifications, setNotifications] = useState([])
    const navigate = useNavigate()

    let userData = JSON.parse(sessionStorage.getItem('user'))

    const fetchNotifications = async () => {
        const response = await getNotifications(userData.user_id)
        setNotifications(response.data)
    }

    useEffect(() => {
        fetchNotifications()
    })

    return (
        <div className='flex flex-col items-start gap-9 h-1/2 w-[20%] z-40 top-20 right-24 fixed bg-white font-rubik'>

            <div className='flex flex-col overflow-auto'>
                {
                    notifications.toReversed().map((data) => {
                        return (
                            <div className={`h-24 w-full flex flex-row p-4 items-center justify-center gap-6 border-t border-blu-200 
                            ${data.is_seen ? 'bg-white': `bg-gradient-to-b from-blu-100 to-transparent` }`}>
                                <p className='pi pi-bell buttonIcon'></p>
                                <p>{data.notification_content}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default NotificationMenu