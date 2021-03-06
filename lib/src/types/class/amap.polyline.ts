import { Map } from './amap.map';
import { PolylineOptions } from '../interface/polyline-options.interface';

export interface CPolyline {
  new (opts: PolylineOptions): Polyline;
}

export declare class Polyline {
  constructor(opts: PolylineOptions);
  setPath(path: number[][]): void;
  getPath(): number[][];
  setOptions(opt: PolylineOptions): void;
  getOptions(): PolylineOptions;
  getLength(): number;
  getBounds(): any; // TODO: Bounds
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
}
