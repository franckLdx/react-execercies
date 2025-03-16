import { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Collapbible } from './Collapbible';

import styles from './styles.stories.module.scss'

const meta: Meta<typeof Collapbible> = {
  component: Collapbible,
};

export default meta;

type Story = StoryObj<typeof Collapbible>;

export const SimpleText: Story = {
  args: {
    title: 'A simple text',
    children: 'lorem ipsum',
  },
};

interface ItemHourProps {
  day: string
  openHour: string
  closeHour: string
}

const ItemHour: FC<ItemHourProps> = ({ day, openHour, closeHour }) => (<div className={styles.itemHour}>{day}: <span>{openHour} - {closeHour}</span></div>)

export const ComplexContent: Story = {
  render: () => {
    const title = <span className={styles.title}>Horraires du magasin</span>
    return (<Collapbible title={title}><div className={styles.content}>
      <ItemHour day='lundi' openHour='10:00' closeHour='20:30' />
      <ItemHour day='mardi' openHour='10:00' closeHour='20:30' />
      <ItemHour day='merxdredi' openHour='10:00' closeHour='20:30' />
      <ItemHour day='jeudi' openHour='10:00' closeHour='20:30' />
      <ItemHour day='vendredi' openHour='10:00' closeHour='20:30' />
      <ItemHour day='samedi' openHour='10:00' closeHour='20:30' />
      <ItemHour day='dimanche' openHour='10:00' closeHour='19:00' />
    </div></Collapbible>)
  }
};