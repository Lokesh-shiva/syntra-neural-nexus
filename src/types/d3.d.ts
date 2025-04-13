declare module 'd3-array' {
  export function min<T>(array: T[], accessor?: (datum: T, index: number, array: T[]) => number | null | undefined): number | undefined;
  export function max<T>(array: T[], accessor?: (datum: T, index: number, array: T[]) => number | null | undefined): number | undefined;
  export function extent<T>(array: T[], accessor?: (datum: T, index: number, array: T[]) => number | null | undefined): [number, number] | [undefined, undefined];
  export function range(start: number, stop?: number, step?: number): number[];
}

declare module 'd3-color' {
  export interface RGBColor {
    r: number;
    g: number;
    b: number;
    opacity: number;
    toString(): string;
  }
  
  export function rgb(r: number, g: number, b: number, opacity?: number): RGBColor;
  export function rgb(color: string): RGBColor;
}

declare module 'd3-ease' {
  export function easeLinear(t: number): number;
  export function easeQuad(t: number): number;
  export function easeCubic(t: number): number;
  export function easeSin(t: number): number;
  export function easeExp(t: number): number;
  export function easeCircle(t: number): number;
  export function easeElastic(t: number): number;
  export function easeBack(t: number): number;
  export function easeBounce(t: number): number;
} 