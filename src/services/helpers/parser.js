import React from "react";

const htmlStringToArray = (html) => {
  let newHTML = html;
  newHTML = html.replace(/\n{1,}/g, "");

  newHTML = newHTML.replace(/\s{2,}/g, "");

  const regEx = /<(?<tag>\w*)>[\s\S]*?<\/\k<tag>*>/g;
  if (!regEx.test(html)) {
    newHTML = "<div>" + newHTML + "</div>";
  }

  return newHTML.match(regEx);
};

const htmlToObject = (html) => {
  const openingTag = /<\w*>/g;

  return html.map((group) => {
    const openingTags = group.match(openingTag);

    return {
      tag: openingTags[0].slice(1, -1),
      content: openingTags[1]
        ? group.slice(openingTags[0].length, group.indexOf(openingTags[1]))
        : group.slice(
            openingTags[0].length,
            group.length - openingTags[0].length - 1
          ),
      children: group.slice(
        group.indexOf(openingTags[1]),
        group.indexOf(group.length - openingTags[0].length - 1)
      ),
    };
  });
};

const getFinalElements = (htmlArray) => {
  const result = [];

  let element;
  htmlArray.forEach((group, i) => {
    element = group;

    const openingTag = /<\w*>/g;
    const openingTags = element.children.match(openingTag);

    if (openingTags && openingTags.length >= 1) {
      let newContentChild = htmlStringToArray(element.children);

      newContentChild = htmlToObject(newContentChild);

      element.children = getFinalElements(newContentChild);
      element = React.createElement(
        element.tag,
        { key: i },
        element.content,
        element.children !== "" ? element.children : null
      );
    } else {
      if (element.tag === "br") {
        element = React.createElement(element.tag, { key: i });
      } else {
        element = React.createElement(
          element.tag,
          { key: i },
          element.content,
          element.children !== "" ? element.children : null
        );
      }
    }

    result.push(element);
  });
  return result;
};

export const parseHTML = (html) => {
  const newArray = htmlStringToArray(html);

  const arrayWithObject = htmlToObject(newArray);

  return getFinalElements(arrayWithObject);
};
