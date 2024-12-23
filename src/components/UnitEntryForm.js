import React, { useState } from 'react';
import { validateAMI } from '../utils/calculations';

const UnitEntryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    unitType: 'rental',
    subType: '',
    totalUnits: 0,
    affordableUnits: 0,
    amiLevel: 0,
    permitDate: '',
    fundingDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAMI(formData.unitType, formData.amiLevel)) {
      onSubmit({
        ...formData,
        id: Date.now(),
        status: 'Pending'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields will go here */}
    </form>
  );
};

export default UnitEntryForm;
