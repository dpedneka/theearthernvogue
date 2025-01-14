// Helper Functions

// Converts <br /> to newline (\n) for display in TextField
export const convertHtmlToText = (html: string) => {
  console.log(html);
  return html?.replace(/<br\s*\/?>/gm, "\n");
};

// Converts newline (\n) to <br /> for storing in HTML format
export const convertTextToHtml = (text: string) => {
  console.log(text);
  return text?.replace(/\n/g, "<br />");
};
