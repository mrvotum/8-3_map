export default class Settings {
  constructor() {
    this.vailableSettings = new Map([
      ['theme', new Set(['dark', 'light', 'gray'])],
      ['music', new Set(['trance', 'pop', 'rock', 'chillout', 'off'])],
      ['difficulty', new Set(['easy', 'normal', 'hard', 'nightmare'])],
    ]);

    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  set theme(newTheme) {
    if (this.vailableSettings.get('theme').has(newTheme)) {
      this.defaultSettings.set('theme', newTheme);
    } else {
      throw TypeError('Нужно выбрать тему из доступных');
    }
  }

  set music(newMusic) {
    if (this.vailableSettings.get('music').has(newMusic)) {
      this.defaultSettings.set('music', newMusic);
    } else {
      throw TypeError('Нужно выбрать музыку из доступных');
    }
  }

  set difficulty(newDifficulty) {
    if (this.vailableSettings.get('difficulty').has(newDifficulty)) {
      this.defaultSettings.set('difficulty', newDifficulty);
    } else {
      throw TypeError('Нужно выбрать уровень сложности из доступных');
    }
  }

  get settings() {
    return this.defaultSettings;
  }
}
