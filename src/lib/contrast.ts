/**
 * WCAG contrast between two CSS colours, for the figures every record and note
 * carries. Only the two spellings the data uses: `rgb(r, g, b)` and `#rrggbb`.
 */

const channels = (color: string): number[] | undefined => {
  const hex = color.trim().match(/^#([0-9a-f]{6})$/i);
  if (hex) return [0, 2, 4].map((at) => parseInt(hex[1]!.slice(at, at + 2), 16));

  const rgb = color.trim().match(/^rgb\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)\s*\)$/);
  return rgb ? rgb.slice(1, 4).map(Number) : undefined;
};

const luminance = (rgb: number[]) => {
  const [r, g, b] = rgb.map((value) => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
};

/** The ratio, or undefined where either colour is spelled some other way. */
export const contrast = (a: string, b: string): number | undefined => {
  const [x, y] = [channels(a), channels(b)];
  if (!x || !y) return undefined;

  const [light, dark] = [luminance(x), luminance(y)].sort((p, q) => q - p);
  return (light! + 0.05) / (dark! + 0.05);
};
