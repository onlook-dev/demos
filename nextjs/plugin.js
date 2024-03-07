module.exports = function yourPlugin(options) {
  return {
    visitor: {
      // Define your visitor methods here
      // e.g., fold_jsx_element, fold_jsx_opening_element, fold_jsx_closing_element
      fold_jsx_element(node, state) {
        // Your transformation logic
        return node;
      },
    },
  };
};