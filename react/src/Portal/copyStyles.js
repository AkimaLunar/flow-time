// Inspiration:
// https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202

function copyStyles(sourceDoc, targetDoc) {
  const styleEl = sourceDoc.createElement('style')
  const baseStyles = `
    * { box-sizing: border-box }
    html {height: 100%}
  `
  styleEl.appendChild(sourceDoc.createTextNode(baseStyles))

  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    let styles
    try {
      let styles = styleSheet.cssRules
    } catch (err) {
      console.log(err)
    }
    if (styles) { // for <style> elements
      Array.from(styles).forEach(cssRule => {
        styleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText))
      });

    } else if (styleSheet.href) { // for <link> elements loading CSS from a URL
      const links = sourceDoc.createElement('link')

      links.rel = 'stylesheet'
      links.href = styleSheet.href
      targetDoc.head.appendChild(links)
    }
  });
  targetDoc.head.appendChild(styleEl);
}

export default copyStyles
