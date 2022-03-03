export const uniqueId = () => Math.random().toString(36).substring(2, 9);

export const limitDecimals = (value: number, decimals = 2): string => value.toFixed(decimals);

export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
