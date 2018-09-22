$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TemperaturConverter.feature");
formatter.feature({
  "name": "I want to convert the given centigrade temperature value into",
  "description": "Fahrenheit value through a standard java program and an online converter application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TemperatureConverter"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "open convertor and give \u003ccentigradeValue\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.step({
  "name": "check \u003cFahrenheitValue\u003e in output",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "centigradeValue",
        "FahrenheitValue"
      ]
    },
    {
      "cells": [
        "45.0",
        "113.0"
      ]
    },
    {
      "cells": [
        "22.0",
        "71.6"
      ]
    },
    {
      "cells": [
        "40.0",
        "104.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "open convertor and give 45.0",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.open_convertor_and_give(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.convert_the_centigrade_value_into_fahrenheit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 113.0 in output",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.checkConvertedValue(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "open convertor and give 22.0",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.open_convertor_and_give(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.convert_the_centigrade_value_into_fahrenheit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 71.6 in output",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.checkConvertedValue(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "open convertor and give 40.0",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.open_convertor_and_give(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.convert_the_centigrade_value_into_fahrenheit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 104.0 in output",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConvertorStepDef.checkConvertedValue(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.step({
  "name": "lanuch \"\u003cconvertorApplication\u003e\" Application",
  "keyword": "Given "
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.step({
  "name": "provide \u003ccentigradeValue\u003e value",
  "keyword": "When "
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.step({
  "name": "check \u003cFahrenheitValue\u003e in output box",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "convertorApplication",
        "centigradeValue",
        "FahrenheitValue"
      ]
    },
    {
      "cells": [
        "https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html",
        "45.0",
        "113.0"
      ]
    },
    {
      "cells": [
        "https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html",
        "22.0",
        "71.6"
      ]
    },
    {
      "cells": [
        "https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html",
        "40.0",
        "104.0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lanuch \"https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html\" Application",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.lanuch_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.page_should_contains_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide 45.0 value",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.provide_value(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.click_on_convert_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 113.0 in output box",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.check_in_output_box(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lanuch \"https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html\" Application",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.lanuch_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.page_should_contains_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide 22.0 value",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.provide_value(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.click_on_convert_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 71.6 in output box",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.check_in_output_box(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lanuch \"https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html\" Application",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.lanuch_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.page_should_contains_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide 40.0 value",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.provide_value(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.click_on_convert_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 104.0 in output box",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConvertorApplicationStepDef.check_in_output_box(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/rest-api.feature");
formatter.feature({
  "name": "I want to search the Github Repositories so that can use them for my project purpose",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Github"
    }
  ]
});
formatter.scenarioOutline({
  "name": "search github repositories using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Keyword"
    }
  ]
});
formatter.step({
  "name": "I search repository by \"\u003ckeyword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "name": "response should contain: \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword",
        "code"
      ]
    },
    {
      "cells": [
        "cucumber",
        "200"
      ]
    },
    {
      "cells": [
        "Anuglar4",
        "200"
      ]
    },
    {
      "cells": [
        "Java",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "search github repositories using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Github"
    },
    {
      "name": "@Keyword"
    }
  ]
});
formatter.step({
  "name": "I search repository by \"cucumber\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepDef.i_search_repository_by(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepDef.i_make_the_rest_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain: 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepDef.response_should_contain(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search github repositories using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Github"
    },
    {
      "name": "@Keyword"
    }
  ]
});
formatter.step({
  "name": "I search repository by \"Anuglar4\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepDef.i_search_repository_by(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepDef.i_make_the_rest_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain: 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepDef.response_should_contain(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search github repositories using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Github"
    },
    {
      "name": "@Keyword"
    }
  ]
});
formatter.step({
  "name": "I search repository by \"Java\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepDef.i_search_repository_by(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepDef.i_make_the_rest_call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain: 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepDef.response_should_contain(Integer)"
});
formatter.result({
  "status": "passed"
});
});