var recipes = {
  ingredient1:"flour",
  ingredient2:"appple",
  ingredient3:"sugar"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object;
  newObject.key = value;
  return newObject;
}


updateObjectWithKeyAndValue(recipes,ingredient4,"cinnamon");
