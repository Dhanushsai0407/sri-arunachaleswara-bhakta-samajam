import fs from 'fs';
import path from 'path';

// Generates a simple, beautiful 440Hz / 136.1Hz (sacred Om frequency) sinusoidal WAV file
function createSacredBellWav(filename, durationSec = 3, freq = 136.1) {
  const sampleRate = 22050;
  const numSamples = Math.floor(sampleRate * durationSec);
  const buffer = Buffer.alloc(44 + numSamples * 2);

  // RIFF identifier
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write('WAVE', 8);

  // format chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // format chunk size
  buffer.writeUInt16LE(1, 20);  // PCM format
  buffer.writeUInt16LE(1, 22);  // mono
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28); // byte rate
  buffer.writeUInt16LE(2, 32);  // block align
  buffer.writeUInt16LE(16, 34); // bits per sample

  // data chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // Harmonic bell envelope (attack + slow decay)
    const envelope = Math.exp(-t * 0.9);
    // Fundamental + gentle octave overtone
    const sample = 0.7 * Math.sin(2 * Math.PI * freq * t) + 0.3 * Math.sin(2 * Math.PI * freq * 2 * t);
    const intSample = Math.floor(sample * envelope * 24000);
    buffer.writeInt16LE(Math.max(-32768, Math.min(32767, intSample)), 44 + i * 2);
  }

  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, buffer);
  console.log('Created audio sample:', filename);
}

const audioFiles = [
  'public/audio/veera-brahmam/song1.mp3',
  'public/audio/veera-brahmam/song2.mp3',
  'public/audio/veera-brahmam/song3.mp3',
  'public/audio/tatvalu/tatva1.mp3',
  'public/audio/tatvalu/tatva2.mp3',
  'public/audio/tatvalu/tatva3.mp3',
  'public/audio/ammavari/song1.mp3',
  'public/audio/ammavari/song2.mp3',
  'public/audio/ammavari/song3.mp3',
  'public/audio/shirdi-sai/song1.mp3',
  'public/audio/shirdi-sai/song2.mp3',
  'public/audio/shirdi-sai/song3.mp3',
];

audioFiles.forEach((file, index) => {
  // Sacred frequencies: 136.1Hz (Om), 216Hz, 256Hz, 432Hz
  const freqs = [136.1, 163.3, 204.1, 272.2];
  createSacredBellWav(file, 4, freqs[index % freqs.length]);
});
