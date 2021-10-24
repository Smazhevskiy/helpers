import React, {FC} from 'react'


import {Alert} from '../Alert'

export const AlertInfo: FC = () => {



    return <Alert type={'success'} text={'test'} open={!!'success'} onClose={ ()=> {} }/>
}