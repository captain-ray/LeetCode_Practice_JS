/* Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level. For more information, see: Absolute path vs relative path in Linux/Unix

Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the shortest string representing the absolute path.

 

Example 1:

Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
Example 2:

Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
Example 3:

Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
Example 4:

Input: "/a/./b/../../c/"
Output: "/c"
Example 5:

Input: "/a/../../b/../c//.//"
Output: "/c"
Example 6:

Input: "/a//b////c/d//././/.."
Output: "/a/b/c" */


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {

    let dirs = path.split(/\/+/); //split by '/' or '//' or '//...'
    let filteredDirs = [];
    let i;

    for (i = 0; i < dirs.length; i++) {
        if (dirs[i] === '' || dirs[i] === '.') continue; //ignore '.' and ''
        filteredDirs.push(dirs[i]);
    }


    let resultStack = []; //stack data structure
    for (i = 0; i < filteredDirs.length; i++) {
        if (filteredDirs[i] === "..") {
            if (resultStack.length > 0) {
                resultStack.pop(); //if nothing in the stack, already in the root, cannot move up a level
            }
        } else {
            resultStack.push(filteredDirs[i]);
        }
    }

    let result = resultStack.join('/');
    result = '/' + result;

    return result;
};

// test
simplifyPath("/home/");
simplifyPath("/../");
simplifyPath("/home//foo/");
simplifyPath("/a/./b/../../c/");
simplifyPath("/a/../../b/../c//.//");
simplifyPath("/a//b////c/d//././/..");