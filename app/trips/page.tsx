
import React from 'react'
import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'
import TripsClient from './TripsClient';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '../actions/getReservations';

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
        <ClientOnly >
            <EmptyState 
                title="Unauthorized"
                subtitle="Please login"
            />
        </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No trips found"
                    subtitle="Looks like you haven't resreved any trips."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient 
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
        
}

export default TripsPage;
