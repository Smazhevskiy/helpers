import React, {FC} from 'react'
import s from './Alerts.module.css'
import {AlertInfo} from './AlertInfo/AlertInfo'
import {AlertError} from './AlertError/AlertError'

export const Alerts: FC = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <AlertError/>
                <AlertInfo/>
            </div>
        </div>
    )
}