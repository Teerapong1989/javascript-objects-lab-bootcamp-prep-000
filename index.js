var recipes = {
  egg: '3',
  flour: '4 cups'
}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object.assign
  
}