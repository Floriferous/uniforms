// @flow

import * as uniformsJSONSchema from 'uniforms-bridge-json-schema';

it('exports everything', () => {
  expect(uniformsJSONSchema).toEqual({
    JSONSchemaBridge: expect.any(Function)
  });
});
