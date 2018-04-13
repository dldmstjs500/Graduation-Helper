define({ "api": [
  {
    "type": "get",
    "url": "/course",
    "title": "Get courses in a subject",
    "name": "GetCourses",
    "group": "Class",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course",
            "description": "<p>The course abbreviation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "course",
            "description": "<p>The subject course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Course ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n      \"course\": \"Intro Asian American Studies\",\n      \"id\": \"100\"\n    },\n    {\n      \"course\": \"U.S. Race and Empire\",\n      \"id\": \"200\"\n    },\n    {\n      \"course\": \"US Racial & Ethnic Politics\",\n      \"id\": \"201\"\n    }\n]",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not make request to the course website\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "/sectionDetails",
    "title": "Get section details",
    "name": "GetSectionDetails",
    "group": "Class",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course",
            "description": "<p>The course abbreviation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>The specific course ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sectionId",
            "description": "<p>The specific section ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sectionId",
            "description": "<p>The section ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sectionNumber",
            "description": "<p>The section number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enrollmentStatus",
            "description": "<p>Enrollment Status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Section Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>Section Start Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>Section End Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "daysOfWeek",
            "description": "<p>The days the classes occur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"sectionId\": \"30107\",\n  \"sectionNumber\": \"AD1\",\n  \"enrollmentStatus\": \"Open\",\n  \"type\": \"DIS\",\n  \"startTime\": \"09:00 AM\",\n  \"endTime\": \"09:50 AM\",\n  \"daysOfWeek\": \"F      \"\n}",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not make request to the course website\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "/section",
    "title": "Get sections in a specific course",
    "name": "GetSections",
    "group": "Class",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course",
            "description": "<p>The course abbreviation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>The specific course ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "section",
            "description": "<p>The sections in a course</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>section ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n      \"section\": \"AD1\"\n      \"id\": \"30107\"\n    },\n    {\n      \"section\": \"AD2\",\n      \"id\": \"41729\"\n    },\n    {\n      \"section\": \"AD3\",\n      \"id\": \"43832\"\n    },\n    {\n      \"section\": \"AD4\",\n      \"id\": \"48232\"\n    }\n]",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not make request to the course website\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "/semester",
    "title": "Get semesters for year",
    "name": "GetSemester",
    "group": "Class",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The specific school year</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  \"Spring\",\n  \"Summer\",\n  \"Fall\",\n  \"Winter\"\n]",
          "type": "String[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not make request to the course website\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "/subject",
    "title": "Get all subjects",
    "name": "GetSubjects",
    "group": "Class",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>The school subject</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Subject ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n      \"subject\": \"Asian American Studies\",\n      \"id\": \"AAS\"\n    },\n    {\n      \"subject\": \"Agricultural and Biological Engineering\",\n      \"id\": \"ABE\"\n    },\n    {\n      \"subject\": \"Accountancy\",\n      \"id\": \"ACCY\"\n    }\n]",
          "type": "Object[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not make request to the course website\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "/years",
    "title": "Get all years",
    "name": "GetYears",
    "group": "Class",
    "version": "0.2.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  \"2018\",\n  \"2017\",\n  \"2016\",\n  \"2015\",\n  \"2014\"\n]",
          "type": "String[]"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not make request to the course website\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api.js",
    "groupTitle": "Class"
  },
  {
    "type": "post",
    "url": "/schedule/generate",
    "title": "Get generated schedules for classes",
    "name": "GenerateSchedules",
    "group": "Schedule",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The specific school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester year</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "courses",
            "description": "<p>List of courses to generate schedules</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "preferences",
            "description": "<p>User preferences information</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"M\"",
              "\"T\"",
              "\"W\"",
              "\"R\"",
              "\"F\""
            ],
            "optional": false,
            "field": "preferences.noClassDays",
            "description": "<p>List of days the user does not want classes</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"morning\"",
              "\"lunch\"",
              "\"evening\""
            ],
            "optional": false,
            "field": "preferences.noClassOptions",
            "description": "<p>List of not prefered times of the day</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "preferences.noClassTime",
            "description": "<p>List of times the user does not want classes</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "preferences.noClassTime.start",
            "description": "<p>Start time</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "preferences.noClassTime.end",
            "description": "<p>End time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"year\": \"2017\",\n  \"semester\": \"Spring\",\n  \"courses\": [\"PHYS211\",\"CS125\"],\n  \"preferences\": {\n    \"noClassDays\": [\"M\",\"W\"],\n    \"noClassOptions\": [\"morning\",\"lunch\",\"evening\"],\n    \"noClassTime\": [{\"start\": 14, \"end\": 16}],\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"numOfSchedules\": 21,\n  \"metAllPreferences\": false,\n  \"schedules\": [\n    {\n      \"score\": 80,\n      \"sections\": [\n        {\n          \"subjectId\": \"CS\",\n          \"courseId\": \"461\",\n          \"sectionId\": \"48199\",\n          \"sectionNumber\": \"AL4\",\n          \"enrollmentStatus\": \"CrossListOpen\",\n          \"type\": \"LCD\",\n          \"startTime\": \"12:30 PM\",\n          \"endTime\": \"01:45 PM\",\n          \"daysOfWeek\": \"MW\"\n        },\n        {\n          \"subjectId\": \"CS\",\n          \"courseId\": \"425\",\n          \"sectionId\": \"31384 56315\",\n          \"sectionNumber\": \"T3 T4\",\n          \"enrollmentStatus\": \"CrossListOpen\",\n          \"type\": \"LCD\",\n          \"startTime\": \"09:30 AM\",\n          \"endTime\": \"10:45 AM\",\n          \"daysOfWeek\": \"TR\"\n        },\n        {\n          \"subjectId\": \"CS\",\n          \"courseId\": \"461\",\n          \"sectionId\": \"63508\",\n          \"sectionNumber\": \"AY2\",\n          \"enrollmentStatus\": \"CrossListOpen\",\n          \"type\": \"DIS\",\n          \"startTime\": \"11:00 AM\",\n          \"endTime\": \"11:50 AM\",\n          \"daysOfWeek\": \"R\"\n        },\n        {\n          \"subjectId\": \"CHLH\",\n          \"courseId\": \"243\",\n          \"sectionId\": \"65894 57812\",\n          \"sectionNumber\": \"ON ONL\",\n          \"enrollmentStatus\": \"Closed\",\n          \"type\": \"ONL\",\n          \"startTime\": \"ARRANGED\"\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not generate schedules\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/generateSchedule.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "/schedule/generate",
    "title": "Get generated schedules for classes",
    "name": "GenerateSchedules",
    "group": "Schedule",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The specific school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester year</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "courses",
            "description": "<p>List of courses to generate schedules</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"year\": \"2018\",\n  \"semester\": \"Spring\",\n  \"courses\": [\"CS125\", \"CS173\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  [\n    {\n      \"subjectId\": \"CS\",\n      \"courseId\": \"173\",\n      \"sectionId\": \"39311\",\n      \"sectionNumber\": \"AL1\",\n      \"enrollmentStatus\": \"Open (Restricted)\",\n      \"type\": \"LEC\",\n      \"startTime\": \"09:30 AM\",\n      \"endTime\": \"10:45 AM\",\n      \"daysOfWeek\": \"TR\"\n    }, {\n      \"subjectId\": \"CS\",\n      \"courseId\": \"173\",\n      \"sectionId\": \"31187\",\n      \"sectionNumber\": \"ADA\",\n      \"enrollmentStatus\": \"Closed\",\n      \"type\": \"DIS\",\n      \"startTime\": \"01:00 PM\",\n      \"endTime\": \"01:50 PM\",\n      \"daysOfWeek\": \"R\"\n    }, {\n      \"subjectId\": \"CS\",\n      \"courseId\": \"125\",\n      \"sectionId\": \"31152\",\n      \"sectionNumber\": \"AL1\",\n      \"enrollmentStatus\": \"Open (Restricted)\",\n      \"type\": \"LEC\",\n      \"startTime\": \"08:00 AM\",\n      \"endTime\": \"08:50 AM\",\n      \"daysOfWeek\": \"MWF\"\n    }, {\n      \"subjectId\": \"CS\",\n      \"courseId\": \"125\",\n      \"sectionId\": \"31159\",\n      \"sectionNumber\": \"AYB\",\n      \"enrollmentStatus\": \"Open\",\n      \"type\": \"LBD\",\n      \"startTime\": \"11:00 AM\",\n      \"endTime\": \"12:50 PM\",\n      \"daysOfWeek\": \"T\"\n    }\n  ]\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not generate schedules\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "/getschedule",
    "title": "Get saved user schedules",
    "name": "getschedule",
    "group": "Schedule",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>user ID that the schedule is associated with</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "year",
            "description": "<p>The specific school year</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"userId\": 9,\n  \"year\": \"2018\",\n  \"semester\": \"Spring\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n [\n   [\n     {\n         \"subjectId\": \"CS\",\n         \"courseId\": \"425\",\n         \"sectionId\": \"31384\",\n         \"type\": \"LCD\",\n         \"startTime\": \"09:30 AM\",\n         \"endTime\": \"10:45 AM\",\n         \"daysOfWeek\": \"TR\",\n         \"semester\": \"Spring\",\n         \"year\": 2018\n     },\n     {\n         \"subjectId\": \"CS\",\n         \"courseId\": \"429\",\n         \"sectionId\": \"41483\",\n         \"type\": \"LCD\",\n         \"startTime\": \"02:00 PM\",\n         \"endTime\": \"03:15 PM\",\n         \"daysOfWeek\": \"TR\",\n         \"semester\": \"Spring\",\n         \"year\": 2018\n     }\n   ]\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": \"Incorrect parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "post",
    "url": "/saveschedule",
    "title": "Save user schedule",
    "name": "saveschedule",
    "group": "Schedule",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>user ID that the schedule is to be associated with</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The school year</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "sections",
            "description": "<p>List of class sections to save</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"year\": \"2017\",\n  \"semester\": \"Spring\",\n  \"sections\": [\n    {\n      \"subjectId\": \"CS\",\n      \"courseId\": \"425\",\n      \"sectionId\": \"31384\",\n      \"type\": \"LCD\",\n      \"startTime\": \"09:30 AM\",\n      \"endTime\": \"10:45 AM\",\n      \"daysOfWeek\": \"TR\",\n      \"semester\": \"Spring\",\n      \"year\": 2018\n    },\n    {\n      \"subjectId\": \"CS\",\n      \"courseId\": \"429\",\n      \"sectionId\": \"41483\",\n      \"type\": \"LCD\",\n      \"startTime\": \"02:00 PM\",\n      \"endTime\": \"03:15 PM\",\n      \"daysOfWeek\": \"TR\",\n      \"semester\": \"Spring\",\n      \"year\": 2018\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": \"Incorrect parameters\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/schedule.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "post",
    "url": "/saveschedule",
    "title": "save the user schedule to the database",
    "name": "saveschedule",
    "group": "Schedule",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>user ID that the schedule is to be associated with</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>The specific semester</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>The school year</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "crns",
            "description": "<p>List of the course CRN values from schedule</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "subjects",
            "description": "<p>List of the course subject codes from schedule</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "courseNumbers",
            "description": "<p>List of the course numbers from schedule</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "getUserInfo",
    "url": "/userlogin",
    "title": "return the user information given the userid",
    "name": "GetUserInfo",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User's unique id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 250 OK\n{\n    userId: user_id,\n    username: username,\n    email: email\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userlogin.js",
    "groupTitle": "User"
  },
  {
    "type": "login",
    "url": "/userlogin",
    "title": "User login",
    "name": "Login",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Entered password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 250 OK\n{\n    \"user login sucessfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422\n{\n  \"Email does not exist\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422\n{\n  \"Email and password does not match\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userlogin.js",
    "groupTitle": "User"
  },
  {
    "type": "register",
    "url": "/userlogin",
    "title": "Register a new user",
    "name": "Register",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User entered password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 250 OK\n{\n    \"user registered sucessfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422\n{\n  \"Email already registered!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userlogin.js",
    "groupTitle": "User"
  },
  {
    "type": "resetpassword",
    "url": "/userlogin",
    "title": "Update password after verificating",
    "name": "Resetpassword",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aucode",
            "description": "<p>User entered authentication code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"jwu108@illinois.edu\",\n  \"password\": \"12345678\",\n  \"aucode\": \"Ml7eX4Q85L\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 250 OK\n{\n    \"Reset successfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "authentication code exipried:",
          "content": "HTTP/1.1 422\n{\n  \"aucode expired!\"\n}",
          "type": "json"
        },
        {
          "title": "authentication code exipried:",
          "content": "HTTP/1.1 422\n{\n  \"aucode unmatched!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userlogin.js",
    "groupTitle": "User"
  },
  {
    "type": "sendemail",
    "url": "/userlogin",
    "title": "Send reset information and record verification information",
    "name": "Sendemail",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 250 OK\n{\n    \"Email sended successfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422\n{\n  \"Email does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userlogin.js",
    "groupTitle": "User"
  }
] });
