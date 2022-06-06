import hit from './hit'

let coord = ['a1','a2','a3']; 
let objectcoord = [
                   {name:"Carrier",coordinates:['a1','a2','a3']},
                   {name:"destroyer",coordinates:['b1','b2','b3']}
                  ];

/*just testing a single array
test('Takes coordinates out of the array that has been hit', () => {   
    hit('a3',coord);
    expect(coord).toEqual(['a1','a2']);
  });

  test('Takes coordinates out of the array that has been hit', () => {    
    hit("a1",coord);
    expect(coord).toEqual(['a2']);
  });

 */

  test('Takes coordinates out of the array that has been hit', () => {    
    hit('b1',objectcoord);
    expect(objectcoord[0].coordinates).toEqual(['b2','b3']);
  });
