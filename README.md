# Skip form empty fields submission

## What is this?

This is a script that makes it so your form doesn't submit the fields that are empty. 

Useful for filter forms if you have many fields but want the url to remain readable.

## Usage

- Include the `skipEmptyFieldsSubmission.js` script.
- Call the following function in your code:

```JS
    skipEmptyFieldsSubmission("skipFieldsFormClassName");
```

- In this call `skipFieldsFormClassName` can be whatever class name you assign to your form. This parameter is not optional.

## Visual aids

![images/skipemptyinputs.gif](images/skipemptyinputs.gif)