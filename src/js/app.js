import Settings from './settings';

const playerSettings = new Settings();
playerSettings.theme = 'light';
playerSettings.music = 'off';
playerSettings.difficulty = 'nightmare';
console.log(playerSettings.settings);
