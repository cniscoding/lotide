# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cniscoding/lotide`

**Require it:**

`const _ = require('@cniscoding/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the head of an array (value at index 0)
* `tail(array)`: Returns the tail of an array (all values except index 0)
* `middle(array)` : Returns the middle value of an array
* `eqArrays(arrOne, arrTwo)`: Returns a boolean for matching two arrays
* `assertArraysEqual(actual, expected)` : This function takes two arrays and returns a string stating whether they are strictly equal or not strictly equal.
* `assertEqual(actual, expected)` : This function takes in 2 values and returns a string stating whether they are strictly equal or not strictly equal.