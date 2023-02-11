function doGet() {
  // SpreadsheetApp.getUi();
  // DriveApp.getRootFolder();
  // UrlFetchApp.fetch("")
  return HtmlService.createTemplateFromFile("index").evaluate()

Con ese codigo me aseguro de conseguir los permisos de google al correr el script en consola

Puedo crear el proyecto en consola y despues usar el script id en gclone

Para que parcel no ponga cada modulo separado (html, js y css) porque necesito todo embebido en html para google apps script, uso el plugin parcel-plugin-inliner

util.js es porque estoy usando node/js llano

si voy a https://script.google.com/home/usersettings puedo poner on la api de scripts

hay que hacer glogin para empezar un nuevo proyecto