var recipes = {
  ingredient1:"flour",
  ingredient2:"appple",
  ingredient3:"sugar"
};

function updateObjectWithKeyAndValue(object, key, value){
var newObject = Object.assign({},object);
newObject[key]=value;
return newObject;
return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  // var newObject = object;
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({},object);
  delete newObject.key;
  return object;
}

 updateObjectWithKeyAndValue(recipes,"ingredient4","cinnamon");
 destructivelyUpdateObjectWithKeyAndValue(recipes,"ingredient5","lemon");
 deleteFromObjectByKey(recipes,"ingredient1");
