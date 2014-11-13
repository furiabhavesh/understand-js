/* Data types : Primary, Composite, Special*/
  /* Primary > Number */
    var age = 23;
    var temperature = 30.65;

  /* Primary > String */
    var first_name = "Dhaval";
    var last_name = 'Furia';

  /* Primary > Boolean */
    var is_allowed = true; /* Possible values are true and false */

  /* Composite > Array */
    var students_ver1 = new Array("Amit", "Anoop", "Arun", "Sridhar", "Nitesh"); /* Creating Array using 'new' keyword */
    console.log(students_ver1[2]);
    var students_ver2 = ["Amit", "Anoop", "Arun", "Sridhar", "Nitesh"]; /* Short hand method of creating Array */
    console.log(students_ver2[2]);

  /* Composite > Object */
    var person1 = new Object(); /* Creating object using 'new' keyword */
    person1.name = "Kishor";
    console.log(person1.name); /* Access object properties using . operator */
    person1["age"] = 50;
    console.log(person1["age"]); /* Access object properties like associative array */

    var person2 = { name : "Haresh", age : 20 }; /* Creating object using Object literal syntax */
    console.log(person2.name);
    console.log(person2["name"]);
    /* Notice way of accessing properties using '.' and '[]' in above Objects */

  /* Special > Null */
    var newVar = null; /* Null datatype has only one value i.e. null. Can be used to reset a variable's value */

  /* Special > Undefined */
    var my_var_whose_value_is_never_set;
    console.log(my_var_whose_value_is_never_set);
