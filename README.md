js-date-format
==============

Add format method to Date object in javascript to allow string formatting

adds the following methods to a date object:

#### getMonthName([language])

Gets the month name in the specified language. If no language is specified it will default to "en". (eg. January)

#### getMonthNameShort([language])

Gets the abbreviated month name in the specified language. If no language is specified it will default to "en". (eg. Jan)

#### getDayName([language])

Gets the day of the week name in the specified language. If no language is specified it will default to "en". (eg. Sunday)

#### getDayNameShort([language])

Gets the abbreviated day of the week name in the specified language. If no language is specified it will default to "en". (eg. Sun)

#### getDateSuffix([language])

Gets the date suffix for the day of the month in the specified language. If no language is specified it will default to "en". (eg. th)

#### getLocale()

Gets the locale for the month and day names. The default is "en".

#### setLocale(language)

Sets the locale for the month and day names.

#### format(format_string)

Gets a string representation of the date object based on the format_string. (eg. "DDDD, MMMM DS h:mm TT" = Wednesday, January 1st 12:00 AM)

Demo
====

go to http://uzitech.com/files/dateformat.php for a demo or download the zip and open js-date-format.html
