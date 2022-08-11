import { LineBreak } from '../interfaces';

export const dataToLineBreaks = (data: any): LineBreak[] => {
   return Object.keys(data).map((key) => {
      let nameText = key.split('_').join(' ') + ': ';
      let text = data[key];
      return {
         nameText,
         text,
      };
   });
};
