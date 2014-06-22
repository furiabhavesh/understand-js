/* Variables */
  var fruit; /* Declaring variable */

  var fruit = "Apple"; /* Declaring variable and assigning value i.e. initializing it */

  var fruit, color; /* Declaring multiple variables */

  var fruit = color = "Orange"; /* Initializing same value to multiple variables */

  var fruit = "Banana"; color = "Orange"; /* Incorrect way of initializing value to multiple variables in single line */

  var fruit = "Banana"; var color = "Orange"; /* Correct way of initializing value to multiple variables in single line */

/* Scope of variables : Local and Global*/
  var my_var = "global";
  function test_var_scope(){
    var my_var = "local"; /* This variable is available ONLY inside test_var_scope function*/
    console.log(my_var); /* This will output 'local' */
  }
  console.log(my_var); /* This will output 'global' */