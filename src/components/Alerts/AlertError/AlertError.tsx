import React, {FC} from 'react'
import {Alert} from '../Alert'

export const AlertError: FC = () => {

    return <Alert type={'error'} text={'error'} open={!!'error'} onClose={() => {
    }}/>
}