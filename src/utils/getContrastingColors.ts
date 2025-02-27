const getContrastingColors = (bgColor: string) => {
    // Parse the RGB values from the background color
    const rgbMatch = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!rgbMatch) return ['#FE6B8B', '#FF8E53'];

    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness > 128) {
        // Dark gradient for light backgrounds
        return ['#3f51b5', '#9c27b0']; // Blue to purple
    } else {
        // Light gradient for dark backgrounds
        return ['#ff9800', '#f44336']; // Orange to red
    }
};

export default getContrastingColors;