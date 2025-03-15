import type { Meta, StoryObj } from '@storybook/react';

import { MyAccordion } from './MyAccordion';

const meta: Meta<typeof MyAccordion> = {
  component: MyAccordion,
};

export default meta;

type Story = StoryObj<typeof MyAccordion>;

export const SimpleText: Story = {
  args: {
    title: 'A simple text',
    children: 'lorem ipsum',
  },
};

export const ComplexContent: Story = {
  args: {
    title: 'A simple text',
    children: <div>'lorem ipsum'</div>,
  },
};