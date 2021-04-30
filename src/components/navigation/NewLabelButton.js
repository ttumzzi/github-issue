import React from 'react';
import Button from '../common/Button';
import { container } from './NewLabelButton.module.scss';

const NewLabelButton = () => {
  return (
    <div className={container}>
      <Button buttonTitle="New Label" />
    </div>
  );
};

export default NewLabelButton;