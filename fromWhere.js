function fromWhere (item){
    if (item.startsWith("CY")) {
      return "Bellville"; }
    else if (item.startsWith("CJ")) {
        return "Paarl"; }
      else if (item.startsWith ("CA")) {
      return "Cape Town"; }
      else if (item.startsWith("ZN")) {
      return "Some other place!"; }
      }
  
  assert.equal(fromWhere('CY 567489'), 'Bellville'); 
  assert.equal(fromWhere('CJ 343502'), 'Paarl');
  assert.equal(fromWhere('CA 987504'), 'Cape Town');
  assert.equal(fromWhere('ZN 568593'), 'Some other place!');