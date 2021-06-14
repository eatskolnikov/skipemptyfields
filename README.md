# Skip form empty fields submission

## What is this?

This is a script that makes it so your Form doesn't submit the empty fields.

Useful for filter forms when you have several fields but want the URL to remain readable.

## Usage

- Include the `skipEmptyFieldsSubmission.js` script.
- Call the following function in your code:

```JS
    skipEmptyFieldsSubmission("skipFieldsFormClassName");
```

- In this call the paremeter `skipFieldsFormClassName` will be the class name you assigned to your Form. 

> Important: This parameter is not optional.

## Visual aids

![images/skipemptyinputs.gif](images/skipemptyinputs.gif)