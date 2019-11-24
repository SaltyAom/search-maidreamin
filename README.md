# Search Maidreamin Menu
## Search menu from Maidreamin MBK with Maidreamin API.
![Preview of Maidreamin Menu](https://search-maidreamin.now.sh/static/img/cover.jpg)
  
### Apollo GraphQL
Using Apollo GraphQL to implement simple text search with [Maidreamin API](https://maidreamin.now.sh/menu).

##### *Note: This is highly over-engineered. This is meant to be used as testing and playing area for new stack which I'm going to implement on other projects.

### Serverless on now
With serverless architecture deploy on now.sh, divided into 2 part:
* apollo
* client
  
#### Apollo Part
Simple express server for request management on GraphQL link with Apollo.
  
#### Client Part
Simple Next.js client side for search, fire request to Apollo part to proceed the request and update.
  
Both two part has seperate server and URL, using CORs and add exception for client URL origin only solve the problem.
  
#### Offline support
Actually, PWA support and service worker is added for caching request and app shell.

#### Add to Homescreen
Also can actually add to homescreen for personal usage.