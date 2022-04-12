import React from "react";

export const htmlStringToArray = (html) => {
  let newHTML = html.replace(/\n/g, "<br></br>");
  newHTML = newHTML.replace(/\s{2,}/g, "");

  const regEx = /<(?<tag>\w*)>[\s\S]*?<\/\k<tag>*>/g;
  const splitHTML = newHTML.match(regEx);

  const info = splitHTML.map((tag, i) => {
    const contentLength = tag.length;
    const openTag = tag.match(/(<\w*>)/g);
    const tagLength = openTag[0].length;
    let contentInfo = tag.slice(tagLength, contentLength - tagLength - 1);

    const hasChildren = openTag.length > 1 ? true : false;

    return {
      id: i,
      tag: openTag[0].slice(1, -1),
      contentInfo,
      hasChildren: hasChildren,
    };
  });

  return info;
};

export const newReactElement = (toParse) => {
  console.log("AAAAAAA", toParse);
  const elements = toParse.map((e) => {
    let children;

    if (e.hasChildren) {
      const regEx = /<(?<tag>\w*)>[\s\S]*?<\/\k<tag>*>/g;

      const childrenContent = htmlStringToArray(e.contentInfo);

      const child = newReactElement(childrenContent);
      console.log(child);
      children = React.createElement(
        child.tag,
        { key: child.id },
        child.contentInfo === "" ? null : child.contentInfo
      );

      children = child;
    }

    return React.createElement(
      e.tag,
      { key: e.id, children },
      e.contentInfo === "" ? null : e.contentInfo
    );
  });

  return elements;
};

// newReactElement(htmlStringToArray(db))
