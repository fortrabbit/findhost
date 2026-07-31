import { worldBitmap, worldBitmapBbox, worldBitmapCols, worldBitmapRows } from './world-bitmap';

/**
 * Country-level dots, drawn at build time.
 *
 * `regions` holds ISO country codes, so this is as precise as the data is: a dot
 * sits at a country's centre, not at a data centre. Every caption has to say so.
 * Recording actual locations is the phase-4 upgrade (MR-164).
 */
export const countryPoints: Record<string, { label: string; lat: number; lng: number }> = {
  AU: { label: 'Australia', lat: -33.9, lng: 151.2 },
  BR: { label: 'Brazil', lat: -23.5, lng: -46.6 },
  CA: { label: 'Canada', lat: 43.7, lng: -79.4 },
  DE: { label: 'Germany', lat: 50.1, lng: 8.7 },
  FI: { label: 'Finland', lat: 60.2, lng: 24.9 },
  GB: { label: 'United Kingdom', lat: 51.5, lng: -0.1 },
  IE: { label: 'Ireland', lat: 53.3, lng: -6.2 },
  IN: { label: 'India', lat: 19.1, lng: 72.9 },
  JP: { label: 'Japan', lat: 35.7, lng: 139.7 },
  NL: { label: 'Netherlands', lat: 52.4, lng: 4.9 },
  SG: { label: 'Singapore', lat: 1.35, lng: 103.8 },
  US: { label: 'United States', lat: 38.9, lng: -77.0 },
  AE: { label: 'United Arab Emirates', lat: 25.2, lng: 55.3 },
  AT: { label: 'Austria', lat: 48.2, lng: 16.4 },
  BE: { label: 'Belgium', lat: 50.8, lng: 4.4 },
  CH: { label: 'Switzerland', lat: 47.4, lng: 8.5 },
  CL: { label: 'Chile', lat: -33.4, lng: -70.7 },
  CZ: { label: 'Czechia', lat: 50.1, lng: 14.4 },
  DK: { label: 'Denmark', lat: 55.7, lng: 12.6 },
  ES: { label: 'Spain', lat: 40.4, lng: -3.7 },
  FR: { label: 'France', lat: 48.9, lng: 2.4 },
  HK: { label: 'Hong Kong', lat: 22.3, lng: 114.2 },
  ID: { label: 'Indonesia', lat: -6.2, lng: 106.8 },
  IL: { label: 'Israel', lat: 32.1, lng: 34.8 },
  IT: { label: 'Italy', lat: 45.5, lng: 9.2 },
  KR: { label: 'South Korea', lat: 37.6, lng: 127.0 },
  MX: { label: 'Mexico', lat: 19.4, lng: -99.1 },
  MY: { label: 'Malaysia', lat: 3.1, lng: 101.7 },
  NO: { label: 'Norway', lat: 59.9, lng: 10.8 },
  NZ: { label: 'New Zealand', lat: -36.9, lng: 174.8 },
  PL: { label: 'Poland', lat: 52.2, lng: 21.0 },
  RO: { label: 'Romania', lat: 44.4, lng: 26.1 },
  SE: { label: 'Sweden', lat: 59.3, lng: 18.1 },
  TH: { label: 'Thailand', lat: 13.8, lng: 100.5 },
  TR: { label: 'Türkiye', lat: 41.0, lng: 29.0 },
  ZA: { label: 'South Africa', lat: -26.2, lng: 28.0 },
  TW: { label: 'Taiwan', lat: 25.0, lng: 121.6 },
  PH: { label: 'Philippines', lat: 14.6, lng: 121.0 },
  VN: { label: 'Vietnam', lat: 10.8, lng: 106.7 },
  PK: { label: 'Pakistan', lat: 24.9, lng: 67.1 },
  SA: { label: 'Saudi Arabia', lat: 24.7, lng: 46.7 },
  RU: { label: 'Russia', lat: 55.8, lng: 37.6 },
};

export const spacing = 4;
export const viewBox = `0 0 ${worldBitmapCols * spacing} ${worldBitmapRows * spacing}`;

export const latLngToXY = (lat: number, lng: number) => ({
  x: ((lng - worldBitmapBbox.west) / (worldBitmapBbox.east - worldBitmapBbox.west)) * worldBitmapCols * spacing,
  y: ((worldBitmapBbox.north - lat) / (worldBitmapBbox.north - worldBitmapBbox.south)) * worldBitmapRows * spacing,
});

/**
 * One subpath per horizontal run of land. Round caps on zero-length dashes draw
 * a dot every `spacing`, which is about sixty times smaller than an arc per dot.
 */
export const landPath = (() => {
  const parts: string[] = [];

  for (let row = 0; row < worldBitmapRows; row++) {
    const line = worldBitmap[row]!;
    const cy = row * spacing + spacing / 2;

    for (let col = 0; col < worldBitmapCols; col++) {
      if (line[col] !== '1') continue;
      let end = col;
      while (end + 1 < worldBitmapCols && line[end + 1] === '1') end++;
      parts.push(`M${col * spacing + spacing / 2},${cy}h${(end - col) * spacing}`);
      col = end;
    }
  }

  return parts.join('');
})();
