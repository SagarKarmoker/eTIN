import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Welcome from '../components/Welcome'
import MyTin from '../components/MyTin'
import Form from './Form'
import ChangeContact from '../components/ChangeContact'
import DownloadTin from '../components/DownloadTin'

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
        case 'view-tin':
            return <DownloadTin />
        default:
            return <Welcome />
    }
};

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('welcome')

    return (
        <main className='container mx-auto'>
            <section className='flex space-x-12'>
                {/* sidebar */}
                <div className='w-1/5'>
                    <Sidebar setActiveComponent={setActiveComponent} />
                </div>
                {/* main content */}
                <div className='flex-1 mx-auto w-full'>
                    <MainContent activeComponent={activeComponent} />
                </div>
            </section>
        </main>
    )
}

export default Dashboard
