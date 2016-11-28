var samples = [
 	 { "label": "現在アクティブなシートのA1セルに「Hallo World!」を書き込みます", 
 	 "xml": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"procedures_defnoreturn\"><field name=\"NAME\">myFunction</field><comment pinned=\"false\" h=\"80\" w=\"160\">現在アクティブなシートのA1セルに「Hallo World!」を書き込みます</comment><statement name=\"STACK\"><block type=\"js_ext_next\"><value name=\"INPUT\"><block type=\"gas_range_setvalue\"><value name=\"Range\"><block type=\"gas_spreadsheet_getrange_a1notation\"><value name=\"Spreadsheet\"><block type=\"gas_spreadsheetapp_getactivesheet\"></block></value><value name=\"a1Notation\"><block type=\"text\"><field name=\"TEXT\">A1</field></block></value></block></value><value name=\"value\"><block type=\"text\"><field name=\"TEXT\">Hello World!</field></block></value></block></value></block></statement></block></xml>"
 	  }
];
