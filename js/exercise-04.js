/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    The `&&` operator checks if both operands are true. In this case, the first operand is `true`,
     so it evaluates the second operand `console.log("moo");`. The `console.log` statement is executed, 
     resulting in "moo" being printed to the console.

    2. false && console.log("moo moo?")
    The `&&` operator checks if both operands are true. Since the first operand is `false`, 
    it short-circuits and does not evaluate the second operand. Therefore, `console.log("moo moo?");` 
    is not executed, and there is no output.

    3. true || console.log("hello friend");
    The `||`  operator checks if at least one operand is true. In this case, the first operand is `true`,
    so it short-circuits and does not evaluate the second operand. Therefore, `console.log("helloJaume");`
    is not executed, and there is no output.

    4. false || console.log("bye friend");
    The `||` operator checks if at least one operand is true. Since the first operand is `false`, 
    it evaluates the second operand `console.log("HelloJaume");`. The `console.log` statement is 
    executed, resulting in "bye friend" being printed to the console.
    
    Once you see the results, write in a comment why it works that way
*/
