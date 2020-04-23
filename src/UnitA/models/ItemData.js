// eslint-disable-next-line no-unused-vars
class ItemVo  {
    name = "";
    type = 1;
    imgSrc = "";
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class ViewItemType {
    TYPE_BUTTON = 1;
    TYPE_TEXT = 2;
    TYPE_IMAGE = 3
  }

 
module.exports = {
    ItemVo,
    ViewItemType
}