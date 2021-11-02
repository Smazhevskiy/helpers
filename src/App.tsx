import React from 'react'
import './App.css'
import {Button} from './components/Button/Button'
import {Checkbox} from './components/Checkbox/Checkbox'
import {Input} from './components/Input/Input'
import {Pagination} from './components/Pagination/Pagination'
import {Progress} from './components/Progress/Progress'
import {AlertError} from './components/Alerts/AlertError/AlertError'
import {AlertInfo} from './components/Alerts/AlertInfo/AlertInfo'
import {ScrollToTop} from './components/ScrollToTop/ScrollToTop'

function App() {
    return (
        <div className="App">

            <Button>Button</Button>
            <Checkbox name={'checkbox'}/>
            <Input placeholder={'some input'}/>
            <Pagination totalCount={123} countPerPage={10} currentPage={1} onChangePage={ ()=> {} }/>
            <Progress/>
            <AlertError />
            <AlertInfo/>
            <ScrollToTop/>
        </div>
    )
}

export default App
