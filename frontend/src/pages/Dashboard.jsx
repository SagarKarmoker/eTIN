import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Welcome from '../components/Welcome';
import MyTin from '../components/MyTin';
import Form from './Form';
import ChangeContact from '../components/ChangeContact';
import DownloadTin from '../components/DownloadTin';
import GenerateTicket from '../components/Ticket/GenerateTicket';
import TicketStatus from '../components/Ticket/TicketStatus';
import ReIssueStatus from '../components/ReIssueStatus';
import VatORBusniess from '../components/VatORBusniess';
import ChangeStatus from '../components/Ticket/ChangeStatus';
import UpdateTin from '../components/UpdateTin';
import RequestStatus from '../components/RequestStatus';

const MainContent = ({ activeComponent }) => {
    switch (activeComponent) {
        case 'welcome':
            return <Welcome />;
        case 'my-tin':
            return <MyTin />;
        case 'form':
            return <Form />;
        case 'change-contact':
            return <ChangeContact />;
        case 'view-tin':
            return <DownloadTin />;
        case 'generate-ticket':
            return <GenerateTicket />;
        case 'ticket-status':
            return <TicketStatus />;
        case 'reissue-status':
            return <ReIssueStatus />;
        case 'vat-or-business':
            return <VatORBusniess />;
        case 'change-status':
            return <ChangeStatus />;
        case 'update-tin':
            return <UpdateTin />;
        case 'request-status':
            return <RequestStatus />;
        default:
            return <Welcome />;
    }
};

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('welcome');

    return (
        <div className='min-h-screen bg-gray-50'>
            <main className='container mx-auto'>
                <section className='flex'>
                    {/* sidebar */}
                    <div className='fixed w-1/5 top-0 left-0 px-20 h-screen mt-20 border-r border-gray-200 shadow-lg'>
                        <Sidebar setActiveComponent={setActiveComponent} />
                    </div>
                    {/* main content */}
                    <div className='ml-[20%] flex-1 p-6'>
                        <MainContent activeComponent={activeComponent} />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
