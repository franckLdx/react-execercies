import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@chakra-ui/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'Example/MyButton',
  component: Button,
};

export default buttonMeta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Brand = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Brand.args = {
  variant: "brand",
}
