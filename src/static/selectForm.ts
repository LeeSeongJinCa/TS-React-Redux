import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
} from '../assets';

export interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

export const selectList: ISelectList[] = [
  {
    type: 'not',
    key: 1,
    base64: notSvg,
  }, {
    type: 'business',
    key: 2,
    base64: businessSvg,
  }, {
    type: 'study',
    key: 3,
    base64: pencilSvg,
  }, {
    type: 'sports',
    key: 4,
    base64: sportsSvg,
  }, {
    type: 'music',
    key: 5,
    base64: musicSvg,
  },
];