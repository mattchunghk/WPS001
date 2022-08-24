import axios from 'axios';
import fs from 'fs';
import {lib} from './lib';
import Cls from './Cls';
import {func} from './func';
/* lib is a name exported object from the module lib.*/
console.log(typeof(axios))
console.log(typeof(fs))
console.log(lib.someObject); /* should print "Hello World"*/
console.log(lib.someFunction()); /* should print "Foobar"*/
console.log(Cls()); /* Cls is a function which is exported as the default export of the module Cls*/
console.log(func()); /* func is a function which is exported as the named export of the module func */


