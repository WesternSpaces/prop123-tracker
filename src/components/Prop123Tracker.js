import React, { useState } from 'react';
import { Tab } from '@/components/ui/tabs';

const Prop123Tracker = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Proposition 123 Unit Tracking</h1>
      
      <div className="mb-6">
        <Tab value={activeTab} onSelect={setActiveTab}>
          <Tab.List>
            <Tab.Trigger value="overview">Overview</Tab.Trigger>
            <Tab.Trigger value="units">Unit Tracker</Tab.Trigger>
            <Tab.Trigger value="requirements">Requirements</Tab.Trigger>
            <Tab.Trigger value="reports">Reports</Tab.Trigger>
          </Tab.List>
        </Tab>
      </div>
    </div>
  );
};

export default Prop123Tracker;
