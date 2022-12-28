<div align="center">
  <img src="https://user-images.githubusercontent.com/36193643/206005971-aa99f0c8-01cb-4495-9ab8-dbf5309628b8.png" />
</div>

<h1 align=center>matija-utils</h1>
<p align=center>My opinionated list of JavaScript utilities.</p>

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i matija-utils
```

## 🚀 Features (work in progress)

### Array functions

<table>
<tr>
<td> Name </td> <td> Description </td> <td> Example </td>
</tr>
<tr>
<tr>
<td> intersect </td>
<td> Finds the common elements of two arrays. </td>
<td>

```javascript
intersect([1, 2, 3], [1, 2]); // [1, 2]
```

</td>
</tr>
<tr>
<td> chunk </td>
<td> Chunks an array into a new array consisting of smaller arrays of a specified size. </td>
<td>

```javascript
chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]
```

</td>
</tr>
<tr>
<td> range </td>
<td> Creates an array of numbers from a specified range. </td>
<td>

```javascript
range(0, 5); // [0, 1, 2, 3, 4, 5]
```

</td>
</tr>
<tr>
<td> splitByValue </td>
<td> Splits and clumps together an array of elements by using a separator. </td>
<td>

```javascript
splitByValue([1, 2, 3, 4, "x", 5, 6, 7, 8], "x"); // [[1, 2, 3, 4], [1, 2, 3, 4]]
```

</td>
</tr>
<tr>
<td> groupBy </td>
<td> Groups values in an array of objects by the provided property. </td>
<td>

```javascript
const x = [{
  name: "Ivan",
  company: "Google"
}, {
  name: "Kenny",
  company: "Google"
}, {
  name: "Joseph",
  company: "Amazon"
}];
groupBy(x, "company");

{
  "Google": [{
    "name": "Ivan",
    "company": "Google"
   },
   {
    "name": "Kenny",
    "company": "Google"
  }],
  "Amazon": [{
    "name": "Joseph",
    "company": "Amazon"
  }]
}

```

</td>
</tr>
<tr>
<td> repeat </td>
<td> Repeats a function a set amount of times. </td>
<td>

```javascript
repeat(3, () => console.log("x")); // xxx
```

</td>
</tr>
<tr>
<td> generateArray </td>
<td> Creates an array of a certain length filled with a specified value. </td>
<td>

```javascript
generateArray(3, []); // [[], [], []]
```

</td>
</tr>
<tr>
<td> end </td>
<td> Returns the last N elements of an array. If 1 is specified, it returns only the last element. </td>
<td>

```javascript
end(2, [1, 2, 3]); // [2, 3]
```

</td>
</tr>
<tr>
<td> sample </td>
<td> Gets a random element of an array. </td>
<td>

```javascript
sample([1, 2, 3]); // 2
```

</td>
</tr>
<tr>
<td> zip </td>
<td> Combines two arrays into one, similar to the Python zip function. </td>
<td>

```javascript
const a = [1, 2, 3];
const b = ["a", "b", "c"];
zip(a, b); // [[1, "a"], [2, "b"], [3, "c"]]
```

</td>
</tr>
<tr>
<td> difference </td>
<td> Gets an array that contains the elements that are present in the array a, but not in the array b. </td>
<td>

```javascript
difference([1, 2, 3], [2, 3, 4]); // [1]
```

</td>
</tr>
<tr>
<td> count </td>
<td> Gets the number of elements in an array that conform to the given condition. </td>
<td>

```javascript
count([1, 2, 3], (x) => x > 2); // 1
```

</td>
</tr>
<tr>
<td> common </td>
<td> Finds the common elements of two arrays. </td>
<td>

```javascript
common([1, 2, 3], [2, 3, 4]); // [2, 3]
```

</td>
</tr>
</table>

### Other functions

<table>
<tr>
<td> Name </td> <td> Description </td> <td> Example </td>
</tr>
<tr>
<tr>
<td> sum </td>
<td> Sums an unspecified amount of inputs. </td>
<td>

```javascript
sum(1, 2, 3); // 6
```

</td>
</tr>
<tr>
<td> product </td>
<td> Multiplies an unspecified amount of inputs. </td>
<td>

```javascript
product(1, 2, 3); // 6
```

</td>
</tr>
<tr>
<td> mod </td>
<td> Performs a modulo operation akin to that of Python. </td>
<td>

```javascript
mod(-2, 20); // 18
```

</td>
</tr>
<tr>
<td> randInt </td>
<td> Gets a random integer between an inclusive range. </td>
<td>

```javascript
randInt(1, 20); // 18
```

</td>
</tr>
<tr>
<td> generateRandomString </td>
<td> Generates a string composed of n random characters. </td>
<td>

```javascript
generateRandomString(5); // "AXRF0"
```

</td>
</tr>
<tr>
<td> abbreviateNumber </td>
<td> Abbreviates large numbers with SI symbols. </td>
<td>

```javascript
abbreviateNumber(14568); // "14.6k"
```

</td>
</tr>
<tr>
<td> acronym </td>
<td> Creates an acronym of a given string. </td>
<td>

```javascript
acronym("Sir Isaac Newton"); // "SIN"
```

</td>
</tr>
<tr>
<td> randomColorHex </td>
<td> Creates a random hex color value. </td>
<td>

```javascript
randomColorHex(); // "#2a30fd"
```

</td>
</tr>
<tr>
<td> textEllipsis </td>
<td> Cuts a text off at a certain length, ending it with three dots. </td>
<td>

```javascript
textEllipsis("hello", 3); // "hel..."
```

</td>
</tr>
<tr>
<td> shadeColor </td>
<td> Lightens or darkens a hex color value by a certain percentage, negatives values for darker and positive ones for lighter tones. </td>
<td>

```javascript
shadeColor("#c72c2c", -40); // "#771a1a"
shadeColor("#c72c2c", 40); // "#ff3d3d"
```

</td>
</tr>
</table>
