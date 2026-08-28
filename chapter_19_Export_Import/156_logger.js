import log from './logs/logger.js'; // This is default
log('Starting');

// Linux Commands - naviagte -> .. / ./ .. cd, dir, ls, pwd.
// SDET Masterclass - Sperate Session 30+ Commands Watch

// If we want specific, then we can use like this - 
import { logBetter } from './logs/logger.js';
logBetter("Starting the TC of the app.vwo.com");

/** 

When we use curly braces, we have to find the exact named export called 
logBetter from ./logs/logger.js file.

If there is no default, then we have to use curly braces. If there is default
then no need to use curly braces
**/

