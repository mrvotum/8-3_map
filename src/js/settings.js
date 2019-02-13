const vailableSettings = new Map([
  ['theme', new Set(['dark', 'light', 'gray'])],
  ['music', new Set(['trance', 'pop', 'rock', 'chillout', 'off'])],
  ['difficulty', new Set(['easy', 'normal', 'hard', 'nightmare'])],
]);

const defaultSettings = new Map([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

export default class Settings {
  set theme(newTheme) {
    if (vailableSettings.get('theme').has(newTheme)) {
      defaultSettings.set('theme', newTheme);
    } else {
      throw TypeError('Нужно выбрать тему из доступных');
    }
  }

  set music(newMusic) {
    if (vailableSettings.get('music').has(newMusic)) {
      defaultSettings.set('music', newMusic);
    } else {
      throw TypeError('Нужно выбрать музыку из доступных');
    }
  }

  set difficulty(newDifficulty) {
    if (vailableSettings.get('difficulty').has(newDifficulty)) {
      defaultSettings.set('difficulty', newDifficulty);
    } else {
      throw TypeError('Нужно выбрать уровень сложности из доступных');
    }
  }

  get settings() {
    return defaultSettings;
  }
}
