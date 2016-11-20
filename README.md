# GasBlock
GasBlock

https://rawgit.com/yambal/GasBlock/master/GASBlock/index.html

## Class SpreadsheetApp
| 実装 |	Method							|	Return type		|
| --- |:---:| ---:|
|Yes|	create(name)						|	Spreadsheet		|
|Yes|	create(name, rows, columns)				|	Spreadsheet		|
|Yes|	flush()							|	void			|
|Yes|	getActive()						|	Spreadsheet		|
|Yes|	getActiveRange()					|	Range			|
|Yes|	getActiveSheet()					|	Sheet			|
|Yes|	getActiveSpreadsheet()					|	Spreadsheet		|
|Yes|	getUi()							|	Ui			|
|None|	newDataValidation()					|	DataValidationBuilder	|
|None|	open(file)						|	Spreadsheet		|
|Yes|	openById(id)						|	Spreadsheet		|
|Yes|	openByUrl(url)						|	Spreadsheet		|
|Yes|	setActiveRange(range)					|	Range			|
|Yes|	setActiveSheet(sheet)					|	Sheet			|
|Yes|	setActiveSpreadsheet(newActiveSpreadsheet)		|	void			|

## Class Spreadsheet
| 実装 |	Method									|	Return type		|
| --- |:---:| ---:|
|Yes		|	addEditor(emailAddress)				|	Spreadsheet		|
|None		|	addEditor(user)						|	Spreadsheet		|
|Yes		|	addEditors(emailAddresses)				|	Spreadsheet		|
|None		|	addMenu(name, subMenus)				|	void			|
|Yes		|	addViewer(emailAddress)				|	Spreadsheet		|
|None		|	addViewer(user)					|	Spreadsheet		|
|Yes		|	addViewers(emailAddresses)				|	Spreadsheet		|
|Yes		|	copy(name)						|	Spreadsheet		|
|Yes		|	deleteActiveSheet()					|	Sheet			|
|Yes		|	deleteSheet(sheet)					|	void			|
|Yes		|	duplicateActiveSheet()					|	Sheet			|
|Yes		|	getActiveSheet()					|	Sheet			|
|None		|	getAs(contentType)					|	Blob			|
|None		|	getBlob()						|	Blob			|
|None		|	getEditors()						|	User[]			|
|None		|	getFormUrl()						|	String			|
|Yes		|	getId()							|	String			|
|Yes		|	getName()						|	String			|
|None		|	getNamedRanges()					|	NamedRange[]		|
|Yes		|	getNumSheets()					|	Integer			|
|None		|	getOwner()						|	User			|
|Yes		|	getRange(a1Notation)					|	Range			|
|None		|	getProtections(type)					|	Protection[]		|
|None		|	getRangeByName(name)				|	Range			|
|Yes		|	getSheetByName(name)				|	Sheet			|
|Yes		|	getSheets()						|	Sheet[]			|
|None		|	getSpreadsheetLocale()				|	String			|
|None		|	getSpreadsheetTimeZone()				|	String			|
|Yes		|	getUrl()							|	String			|
|None		|	getViewers()						|	User[]			|
|Yes		|	insertSheet()						|	Sheet			|
|Yes		|	insertSheet(sheetIndex)					|	Sheet			|
|None		|	insertSheet(sheetIndex, options)			|	Sheet			|
|None		|	insertSheet(options)					|	Sheet			|
|Yes		|	insertSheet(sheetName)				|	Sheet			|
|Yes		|	insertSheet(sheetName, sheetIndex)			|	Sheet			|
|None		|	insertSheet(sheetName, sheetIndex, options)		|	Sheet			|
|None		|	insertSheet(sheetName, options)			|	Sheet			|
|None		|	removeEditor(emailAddress)				|	Spreadsheet		|
|None		|	removeEditor(user)					|	Spreadsheet		|
|None		|	removeMenu(name)					|	void			|
|None		|	removeNamedRange(name)				|	void			|
|None		|	removeViewer(emailAddress)				|	Spreadsheet		|
|None		|	removeViewer(user)					|	Spreadsheet		|
|Yes		|	rename(newName)					|	void			|
|Yes		|	renameActiveSheet(newName)				|	void			|
|Yes		|	setActiveSheet(sheet)					|	Sheet			|
|None		|	setNamedRange(name, range)				|	void			|
|None		|	setSpreadsheetLocale(locale)				|	void			|
|None		|	setSpreadsheetTimeZone(timezone)			|	void			|
|None		|	show(userInterface)					|	void			|
|None		|	toast(msg)						|	void			|
|None		|	toast(msg, title)						|	void			|
|None		|	toast(msg, title, timeoutSeconds)			|	void			|
|None		|	updateMenu(name, subMenus)				|	void			|