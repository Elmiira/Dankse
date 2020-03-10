// Write a function that takes a string of html, and determines whether the order of html tags is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of these html tags: <div><span><h1>.
//
// A string of html tags is considered valid if all of the tags are closed with a correct closing tag according to standard html rules.
//
//
// Examples:
// "<div></div>"   =>  True
// "<div><span></span></div>"   =>  True
// "<div></span>"       =>  False
// "<div>"     =>  False
// "<div><div><span></span></div></h1>" =>  False

// <div> a </div> 

export default function isHTMLValid(html) {
  const regex = /<\/?[a-z-1-9]*>/gm;
  const tagList = html.match(regex);
  const startingTags = ['<div>', '<h1>', '<span>'];
  const orderStack = [];
  for (let index = 0; index < tagList.length; ++index) {
    if (startingTags.includes(tagList[index])) {
      orderStack.push(tagList[index]);
    }
    else if (tagList[index] == '</div>') {
      if (orderStack.pop() !== '<div>') {
        return false;
      }
    }
    else if (tagList[index] == '</span>') {
      if (orderStack.pop() !== '<span>') {
        return false;
      }
    }
    else if (tagList[index] == '</h1>') {
      if (orderStack.pop() !== '<h1>') {
        return false;
      }
    }
  };
  return orderStack.length == 0;
}
