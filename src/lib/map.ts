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
