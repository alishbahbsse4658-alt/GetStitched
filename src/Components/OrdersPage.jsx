// src/Components/OrdersPage.jsx (CHECK FOR EXACT MATCH)
import React, { useState } from 'react';
import { Package, Clock, CheckCircle } from 'lucide-react';

const OrdersPage = () => { // <--- Check 1: Opening parenthesis {
    const [activeTab, setActiveTab] = useState('current');

    const orders = [
        { id: 'ORD1001', service: 'Custom Suit', date: '2025-12-10', status: 'In Progress', tailor: 'Elite Stitching' },
        { id: 'ORD1002', service: 'Bridal Alteration', date: '2025-11-20', status: 'Completed', tailor: 'Ahmed Tailoring' },
        { id: 'ORD1003', service: 'Shirt Tailoring', date: '2025-12-01', status: 'In Progress', tailor: 'Royal Alterations' },
    ];

    const currentOrders = orders.filter(o => o.status === 'In Progress');
    const pastOrders = orders.filter(o => o.status === 'Completed');

    const statusIcon = (status) => {
        if (status === 'Completed') return <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#10B981' }} />; // Green
        return <Clock style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent-gold)' }} />;
    };

    const tabStyle = (tabName) => ({
        padding: '0.75rem 1.5rem',
        cursor: 'pointer',
        fontWeight: '700',
        borderRadius: '0.5rem 0.5rem 0 0',
        backgroundColor: activeTab === tabName ? 'rgba(18, 58, 94, 0.8)' : 'rgba(11, 28, 45, 0.5)',
        borderBottom: activeTab === tabName ? '3px solid var(--color-accent-gold)' : '3px solid transparent',
        color: activeTab === tabName ? 'var(--color-foreground)' : 'var(--color-muted)',
        transition: 'all 0.3s ease',
    });

    const orderCardStyle = {
        padding: '1.5rem',
        marginBottom: '1rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--color-secondary-bg)',
        border: '1px solid var(--color-card-bg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    return (
        <section style={{ position: 'relative', padding: '10rem 1rem 5rem 1rem', minHeight: '100vh', backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-accent-gold)', textAlign: 'center', marginBottom: '3rem' }}>
                    My Orders & Tracking
                </h1>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--color-card-bg)', marginBottom: '1.5rem' }}>
                    <div style={tabStyle('current')} onClick={() => setActiveTab('current')}>
                        <Package style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} /> Current Orders ({currentOrders.length})
                    </div>
                    <div style={tabStyle('past')} onClick={() => setActiveTab('past')}>
                        <CheckCircle style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} /> Past History ({pastOrders.length})
                    </div>
                </div>

                {/* Order List */}
                <div style={{ minHeight: '300px' }}>
                    {(activeTab === 'current' ? currentOrders : pastOrders).map(order => (
                        <div key={order.id} className="order-card" style={orderCardStyle}
                            onMouseOver={(e) => { e.currentTarget.style.border = '1px solid var(--color-accent-gold)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(230, 182, 92, 0.2)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.border = '1px solid var(--color-card-bg)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            {/* Left Info */}
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-foreground)' }}>{order.service} - <span style={{ color: 'var(--color-accent-blue)', fontWeight: '500' }}>{order.id}</span></h3>
                                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Tailor: {order.tailor} | Booked: {order.date}</p>
                            </div>

                            {/* Right Status */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {statusIcon(order.status)}
                                <span style={{ fontWeight: '600', color: order.status === 'Completed' ? '#10B981' : 'var(--color-accent-gold)' }}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Empty State */}
                    {(activeTab === 'current' && currentOrders.length === 0) && (
                        <p style={{ textAlign: 'center', color: 'var(--color-muted)', padding: '2rem', border: '1px dashed var(--color-card-bg)', borderRadius: '0.5rem' }}>No current orders. Book your first appointment today!</p>
                    )}
                </div>
            </div>
        </section>
    );
}; // <--- Check 2: Closing parenthesis }

export default OrdersPage;