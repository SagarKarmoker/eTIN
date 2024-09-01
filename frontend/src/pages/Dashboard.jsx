import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Welcome from '../components/Welcome'
import MyTin from '../components/MyTin'
import Form from './Form'
import ChangeContact from '../components/ChangeContact'
import DownloadTin from '../components/DownloadTin'
import GenerateTicket from '../components/Ticket/GenerateTicket'
import TicketStatus from '../components/Ticket/TicketStatus'
import ReIssueStatus from '../components/ReIssueStatus'
import VatORBusniess from '../components/VatORBusniess'
import ChangeStatus from '../components/Ticket/ChangeStatus'
import UpdateTin from '../components/UpdateTin'
import RequestStatus from '../components/RequestStatus'

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
        case 'generate-ticket':
            return <GenerateTicket />
        case 'ticket-status':
            return <TicketStatus />
        case 'reissue-status':
            return <ReIssueStatus />
        case 'vat-or-business':
            return <VatORBusniess />
        case 'change-status':
            return <ChangeStatus />
        case 'update-tin':
            return <UpdateTin />
        case 'request-status':
            return <RequestStatus />
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
