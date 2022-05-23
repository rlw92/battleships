import hit from './hit'

let coord = ['a1','a2','a3'];


test('Takes coordinates out of the array that has been hit', () => {    
    hit("a1",coord);
    expect(coord).toEqual(['a2','a3']);
  });

  test('Takes coordinates out of the array that has been hit', () => {    
    hit("a3",coord);
    expect(coord).toEqual(['a2']);
  });

