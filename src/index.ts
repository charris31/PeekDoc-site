import {
  CordovaCheck,
  CordovaInstance,
  InstanceCheck,
  InstanceProperty,
  IonicNativePlugin,
  Plugin,
  checkAvailability,
  getPromise
} from '@ionic-native/core';
import { Observable } from 'rxjs';

const TARGET_ELEMENT_FINDING_QUERYS: string[] = [
  '.show-page #',
  'ion-router-outlet[main] #',
  '#'
];

export type MapType =
  'MAP_TYPE_NORMAL'
  | 'MAP_TYPE_ROADMAP'
  | 'MAP_TYPE_SATELLITE'
  | 'MAP_TYPE_HYBRID'
  | 'MAP_TYPE_TERRAIN'
  | 'MAP_TYPE_NONE';

export interface ILatLng {
  lat: number;
  lng: number;
}

/**
 * @hidden
 */
export class LatLng implements ILatLng {

  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  equals(other: ILatLng): boolean {
    return this.lat === other.lat && this.lng === other.lng;
  }

  toString(): string {
    return this.lat + ',' + this.lng;
  }

  toUrlValue(precision?: number): string {
    precision = precision || 6;

    return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
  }
}

export interface ILatLngBounds {
  northeast: ILatLng;
  southwest: ILatLng;
}

/**
 * @hidden
 */
export class LatLngBounds implements ILatLngBounds {

  @InstanceProperty() northeast: ILatLng;
  @InstanceProperty() southwest: ILatLng;
  @InstanceProperty() type: string;
  private _objectInstance: any;

  constructor(points?: ILatLng[]) {
    this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string {
    return;
  }

  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string {
    return;
  }

  /**
   * Extends this bounds to contain the given point.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  extend(LatLng: ILatLng): void {
  }

  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean {
    return;
  }

  /**
   * Computes the center of this LatLngBounds
   * @return {LatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): LatLng {
    return;
  }
}