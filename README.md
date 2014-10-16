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

#### getLastDate()

Gets the last day of the month. (eg. 31)

#### getLocale()

Gets the locale for the month and day names. The default is "en".

#### setLocale(language)

Sets the locale for the month and day names.

#### format(format_string)

Gets a string representation of the date object based on the format_string. (eg. "DDDD, MMMM DS h:mm TT" = Wednesday, January 1st 12:00 AM)

Format Options
==============


- YYYY: 4 digit yeay
- YY: 2 digit year
- MMMM: Month name
- MMM: Month name abbreviation
- MM: Month 01-12
- M: Month 1-12
- DDDD: Day of the week name
- DDD: Day of the week name abbreviation
- DD: Day of the month 01-31
- D: Day of the month 1-31
- S: Day of the month suffix (st|nd|rd|th)
- HH: Hours 00-23
- H: Hours 0-23
- hh: Hours 01-12
- h: Hours 1-12
- mm: Minutes 00-59
- m: Minutes 0-59
- ss: Seconds 00-59
- s: Seconds 0-59
- f: Tenths of a second
- ff: Hundredths of a second
- fff: Thousandths of a second
- tt: am/pm
- TT: AM/PM
- zzzz: timezone (e.g. -05:00)
- zzz: timezone (e.g. -5:00)
- zz: timezone (e.g. -05)
- z: timezone (e.g. -5)
- ": Start of a literal string. Copies characters between quotes to output or copies rest of string if no closing quote.
- ': Start of a literal string. Copies characters between quotes to output or copies rest of string if no closing quote.
- \\: Copies next character to output
- Any other character will be copied to output

Demo
====

go to http://uzitech.github.io/js-date-format/ for a demo or download the zip and open js-date-format.html
