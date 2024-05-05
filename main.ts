#! /usr/bin/env node
import inquirer from "inquirer";

const ans : { 
    sentence : string 
} = await inquirer.prompt(
    [
        {
            name : "sentence",
            type : "input" ,
            message : "Enter Any Sentence To Count The Words"
        }
    ]
)
// User ka jo ans hoga us me se trim(Whitespace) Khatam kar k split(Array)me store karna
const words = ans.sentence.trim().split(" ");

// Words in Array
console.log(words);

// Word Counting 
console.log(`"There Are ${words.length} words in Your Sentence"`)