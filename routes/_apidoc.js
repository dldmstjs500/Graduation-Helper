// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------

/**
*@api {get} /schedule/generate Get generated schedules for classes
*@apiName GenerateSchedules
*@apiGroup Schedule
*@apiVersion 0.1.0
*
*@apiParam {String} year The specific school year
*@apiParam {String} semester The specific semester year
*@apiParam {String[]} courses List of courses to generate schedules
*
*@apiParamExample {json} Request-Example:
*   {
*     "year": "2018",
*     "semester": "Spring",
*     "courses": ["CS125", "CS173"]
*   }
*
*@apiSuccessExample {json} Success-Response:
*   HTTP/1.1 200 OK
*   [
*     [
*       {
*         "subjectId": "CS",
*         "courseId": "173",
*         "sectionId": "39311",
*         "sectionNumber": "AL1",
*         "enrollmentStatus": "Open (Restricted)",
*         "type": "LEC",
*         "startTime": "09:30 AM",
*         "endTime": "10:45 AM",
*         "daysOfWeek": "TR"
*       }, {
*         "subjectId": "CS",
*         "courseId": "173",
*         "sectionId": "31187",
*         "sectionNumber": "ADA",
*         "enrollmentStatus": "Closed",
*         "type": "DIS",
*         "startTime": "01:00 PM",
*         "endTime": "01:50 PM",
*         "daysOfWeek": "R"
*       }, {
*         "subjectId": "CS",
*         "courseId": "125",
*         "sectionId": "31152",
*         "sectionNumber": "AL1",
*         "enrollmentStatus": "Open (Restricted)",
*         "type": "LEC",
*         "startTime": "08:00 AM",
*         "endTime": "08:50 AM",
*         "daysOfWeek": "MWF"
*       }, {
*         "subjectId": "CS",
*         "courseId": "125",
*         "sectionId": "31159",
*         "sectionNumber": "AYB",
*         "enrollmentStatus": "Open",
*         "type": "LBD",
*         "startTime": "11:00 AM",
*         "endTime": "12:50 PM",
*         "daysOfWeek": "T"
*       }
*     ]
*   ]
*
*
*@apiErrorExample Error-Response:
*   HTTP/1.1 500 Internal Server Error
*   {
*     "error": "Could not generate schedules"
*   }
*/
