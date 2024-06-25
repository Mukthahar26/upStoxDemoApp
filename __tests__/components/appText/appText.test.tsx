import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import AppText from '../../../src/components/baseComponents/AppText';

it('renders App Text Component', () => {
  const result = renderer.create(<AppText>Render Text</AppText>).toJSON();
});
