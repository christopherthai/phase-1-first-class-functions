function receivesAFunction(callBackFunction) {
  return callBackFunction();
}

function returnsANamedFunction() {
  return function f(){

  };
}

function returnsAnAnonymousFunction(){
  return function(){
    
  };
}