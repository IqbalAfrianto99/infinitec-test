const test2 = [
    {
      property: "email",
      constraints: {
        isNotEmpty: "email should not be empty",
        minLength: "email must be longer than or equal to 3 characters",
        maxLength: "email must be shorter than or equal to 50 characters",
      },
    },
    {
      property: "name",
      constraints: {
        isNotEmpty: "name should not be empty",
        maxLength: "name must be shorter than or equal to 30 characters",
        isString: "name must be a string",
      },
    },
  ]


  let result = {} //Initial result variable

  test2.map((val, index) => {
    let objConstraint = []  
    //   Map object keys
    Object.keys(val.constraints).map(function(key) {
        // Get constraint value
        objConstraint.push(test2[index].constraints[key])
    });
    result[val.property] = objConstraint;
  })
    
  console.log('result', result) //Output