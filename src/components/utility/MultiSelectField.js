import React from 'react';
import Select from 'react-select';

const MultiSelect = ({options, handleSelectChange, removeSelected, value, message}) => {

  return (
    <Select
      name="form-field-name"
      removeSelected={removeSelected}
      onChange={handleSelectChange}
      options={options}
      value={value}
      multi
      matchPos="start"
      placeholder=" -- Select a skill -- "
    />
  );
};

export default MultiSelect;
