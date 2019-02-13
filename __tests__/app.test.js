import Settings from '../src/js/settings';

test('Apply all settings, all ok', () => {
  const inputSettings = new Settings();

  inputSettings.theme = 'gray';
  inputSettings.music = 'chillout';
  inputSettings.difficulty = 'hard';

  const expected = new Map([ // ожидает
    ['theme', 'gray'],
    ['music', 'chillout'],
    ['difficulty', 'hard'],
  ]);
  const received = inputSettings.settings; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('wrong theme = error', () => {
  const inputSettings = new Settings();

  const received = () => { // получает ошибку
    inputSettings.theme = 'simple';
  };
  expect(received).toThrow(); // ждёт ошибку
});

test('wrong music = error', () => {
  const inputSettings = new Settings();

  const received = () => { // получает ошибку
    inputSettings.music = 'reggy';
  };
  expect(received).toThrow(); // ждёт ошибку
});

test('wrong difficulty = error', () => {
  const inputSettings = new Settings();

  const received = () => { // получает ошибку
    inputSettings.difficulty = '0';
  };
  expect(received).toThrow(); // ждёт ошибку
});
