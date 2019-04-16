[![star this repo](http://githubbadges.com/star.svg?user=vishnuroshan&repo=express-helmet-headers&style=flat)](https://github.com/vishnuroshan/express-helmet-headers)
[![fork this repo](http://githubbadges.com/fork.svg?user=vishnuroshan&repo=express-helmet-headers&style=flat)](https://github.com/vishnuroshan/express-helmet-headers/fork)

# Express-helmet-headers
Express app with essential security headers from helmetjs. its a learnig project. not for production.

### Installing and using

```
npm i express-helmet-headers
```  
Express app is already created in the package itself. You just need to import into your app.js and start using it.

```
...
const app = require('express-helmet-headers')
app.use(...)
...
```

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the GNU public License - see the LICENSE file for details


## Dependencies

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Helmet](https://helmetjs.github.io/docs/) - Helmet is a collection of 13 middleware functions to help set some HTTP response headers.

## Acknowledgments

* To express and helmet
