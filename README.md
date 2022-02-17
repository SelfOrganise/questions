# ⁉️ Questions ⁉️ 

### Tiny project to store and play back questions.
#### Why?
Why not? 

#### Technical
[![CI/CD](https://github.com/bogdbo/questions/actions/workflows/web.yml/badge.svg?branch=master)](https://github.com/bogdbo/questions/actions/workflows/web.yml)

* `api` folder is a nodejs project that exposes a GraphQL API
* `web` folder is a `create-react-app` project built with material-ui and apollo client
* Both projects use typescript (badly as rules haven't been set up properly) 
* Code is built and deployed with GitHub actions
  * `web` is deployed to this repository `gh-pages` branch which is setup as a github page here `https://bogdbo.github.io/questions`
  * `api` is deployed to heroku
* Authentication and authorization are done with Auth0 and it's ootb roles / permissions functionalities
* Data is persisted in a free PostgreSQL database (ElephantSQL)
* Images are from unsplash public API
* There are loads of things missing and the code is questionable quality

Some screenshots (WIP)

v0.0.2

![image](https://user-images.githubusercontent.com/889997/111865259-e14fcf80-895d-11eb-8591-5605a527fc06.png)


#### License
GPLv3

