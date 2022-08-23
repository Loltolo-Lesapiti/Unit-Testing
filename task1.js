function stringLength(name) {
  if(name.length>0 && name.length<= 10){
    return name.length;
  }else{
    throw new Error('The name is too long');

  }  
  }
  module.exports = stringLength;