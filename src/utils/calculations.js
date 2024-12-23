// AMI and unit counting calculations
export const calculateProgress = (units, baseline, commitmentPercent) => {
  const totalUnits = units.reduce((sum, unit) => 
    sum + (unit.status === 'Ready to Count' ? unit.affordableUnits : 0), 0);
  
  const targetUnits = baseline * (commitmentPercent / 100);
  return (totalUnits / targetUnits) * 100;
};

export const validateAMI = (unitType, amiLevel) => {
  if (unitType === 'rental' && amiLevel > 60) return false;
  if (unitType === 'ownership' && amiLevel > 100) return false;
  return true;
};
