// Bell Codes data for Block Working Manual
export type BellCode = {
  id: string;
  code: string;
  indication: string;
  signalled: string;
  acknowledged: string;
};

export const bellCodes: BellCode[] = [
  {
    id: '1',
    code: '0',
    indication: 'Call attention or attend telephone',
    signalled: 'One stroke or beat',
    acknowledged: 'One stroke or beat',
  },
  {
    id: '2',
    code: '00',
    indication: 'Is Line Clear or Line Clear enquiry',
    signalled: 'Two strokes',
    acknowledged: 'Two strokes',
  },
  {
    id: '3',
    code: '000',
    indication: 'Train entering block section',
    signalled: 'Three strokes',
    acknowledged: 'Three strokes',
  },
  {
    id: '4',
    code: '0000',
    indication: 'Train out of block section / Obstruction removed',
    signalled: 'Four strokes',
    acknowledged: 'Four strokes',
  },
  {
    id: '5',
    code: '00000',
    indication: 'Cancel last signal / Signal given in error',
    signalled: 'Five strokes',
    acknowledged: 'Five strokes',
  },
  {
    id: '6',
    code: '000000',
    indication: 'Obstruction danger signal (General)',
    signalled: 'Six strokes',
    acknowledged: 'Six strokes',
  },
  {
    id: '7',
    code: '000000-0',
    indication: 'Stop and examine train',
    signalled: 'Six strokes, pause, one stroke',
    acknowledged: 'Six strokes, pause, one stroke',
  },
  {
    id: '8',
    code: '000000-00',
    indication: 'Train passed without tail lamp or tail board',
    signalled: 'Six strokes, pause, two strokes',
    acknowledged: 'Six strokes, pause, two strokes',
  },
  {
    id: '9',
    code: '000000-000',
    indication: 'Train divided',
    signalled: 'Six strokes, pause, three strokes',
    acknowledged: 'Six strokes, pause, three strokes',
  },
  {
    id: '10',
    code: '000000-0000',
    indication: 'Vehicles running away into the block section on Single line',
    signalled: 'Six strokes, pause, four strokes',
    acknowledged: 'Six strokes, pause, four strokes',
  },
  {
    id: '11',
    code: '000000000',
    indication: 'Testing',
    signalled: 'Sixteen strokes',
    acknowledged: 'Sixteen strokes',
  },
];

