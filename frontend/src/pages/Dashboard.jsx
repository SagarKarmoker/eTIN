import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Welcome from '../components/Welcome'
import MyTin from '../components/MyTin'
import Form from './Form'
import ChangeContact from '../components/ChangeContact'

const MainContent = ({ activeComponent }) => {
    switch (activeComponent) {
        case 'welcome':
            return <Welcome />
        case 'my-tin':
            return <MyTin />
        case 'form':
            return <Form />
        case 'change-contact':
            return <ChangeContact />
        default:
            return <Welcome />
    }
};

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('welcome')

    return (
        <main className='flex container mx-auto gap-5'>
            {/* sidebar */}
            <div className='w-1/5'>
                <Sidebar setActiveComponent={setActiveComponent} />
            </div>
            {/* main content */}
            <div className='flex-1 mx-auto w-full'>
                <MainContent activeComponent={activeComponent} />
            </div>
        </main>
    )
}

export default Dashboard
