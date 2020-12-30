import React from 'react';
import { IhgButton } from '../../../component-library-react/src/components';

export default {
  title: 'Components/ihg-button',
  component: 'ihg-button',
};

const defaultArgs = {
  label: 'button label',
  type: 'primary',
  disabled: false,
};

const Template = (props) => <IhgButton {...props} />

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {...defaultArgs};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {...defaultArgs, type: 'secondary'};

export const DisabledPrimaryButton = Template.bind({});
DisabledPrimaryButton.args = {...defaultArgs, disabled: true};

export const SecondaryDisabledButton = Template.bind({});
SecondaryDisabledButton.args = {...defaultArgs, type: 'secondary', disabled: true};