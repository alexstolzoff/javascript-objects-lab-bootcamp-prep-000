var recipes = {
  ingredient1:"flour",
  ingredient2:"appple",
  ingredient3:"sugar"
};

function updateObjectWithKeyAndValue(object, key, value){
var newObject = object.assign({},object);
newObject[key]=value;
return newObject;
}

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
//   object.key = value;
//   return object;
// }

 updateObjectWithKeyAndValue(recipes,ingredient4,"cinnamon");
// destructivelyUpdateObjectWithKeyAndValue(recipe,"ingredient5","lemon");
