import {
  pencilSvg,
  sportsSvg,
  musicSvg,
  businessSvg,
  notSvg,
} from '../assets';

export interface ISelectList {
  type: string;
  base64: string;
}

export const selectList: ISelectList[] = [
  {
    type: 'not',
    base64: notSvg,
  }, {
    type: 'business',
    base64: businessSvg,
  }, {
    type: 'study',
    base64: pencilSvg,
  }, {
    type: 'sports',
    base64: sportsSvg,
  }, {
    type: 'music',
    base64: musicSvg,
  },
];