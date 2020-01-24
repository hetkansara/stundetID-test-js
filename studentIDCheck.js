function checkHumbrId(humberID) {
  "use strict";
  let valid = false;
  if(typeof humberID != 'string'){
    valid = false;
  } else if(humberID.match(/^[nN][0-9]{8}$/)) {
    valid = true;
  }
  return valid;
}