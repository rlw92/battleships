import chooseCrdnts from './coordinates'

test('Simple laying down a 3 cell length ship on the a1 tile', () => {
   let dir = "V"
    expect(chooseCrdnts("a",1,3,dir)).toStrictEqual(['a1','a2','a3']);
  });

  test('laying down a 5 cell length ship on the b4 tile', () => {
    expect(chooseCrdnts("b",4,5,"V")).toStrictEqual(['b4','b5','b6','b7','b8']);
  });

  test('laying down a 4 cell length ship on the b8 tile which should throw the starter tile to b7 to fit', () => {
    expect(chooseCrdnts("b",8,4,"V")).toStrictEqual(['b7','b8','b9','b10']);
  });

  test('laying down a 5 cell length ship on the f9 tile which should throw the starter tile to f6 to fit', () => {
    expect(chooseCrdnts("f",9,5,"V")).toStrictEqual(['f6','f7','f8','f9','f10']);
  });
  test('laying down a 5 cell length ship with horizontal in place on the a2 tile', () => {

    let dir = "H"
    expect(chooseCrdnts("a",2,5,dir)).toStrictEqual(['a2','b2','c2','d2','e2']);
  });
  test('laying down a 5 cell length ship with horizontal in place on the I3 tile, which should throw it back ', () => {

    let dir = "H"
    expect(chooseCrdnts("i",2,5,dir)).toStrictEqual(['f2','g2','h2','i2','j2']);
  });
  



