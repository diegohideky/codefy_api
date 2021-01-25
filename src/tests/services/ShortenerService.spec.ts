import { Codefy } from '@models/codefy';

test('it should be ok', () => {
  const codefy = new Codefy();
  codefy.active = true;

  expect(codefy.active).toEqual(true);
});
