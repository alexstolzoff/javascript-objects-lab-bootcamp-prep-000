var recipes = {
  ingredient1:"flour",
  ingredient2:"appple",
  ingredient3:"sugar"
};

// function updateObjectWithKeyAndValue(object, key, value){
// var newObject = Object.assign({},object);
// newObject[key]=value;
// return newObject;
// return object;
// }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key = value;
  return object;
}

 // updateObjectWithKeyAndValue(recipes,"ingredient4","cinnamon");
 destructivelyUpdateObjectWithKeyAndValue(recipe,ingredient5,"lemon");
