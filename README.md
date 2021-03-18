# ⁉️ Questions ⁉️

### Tiny project to store and play back questions.
#### Why?
Why not?

#### Technical
[![CI/CD](https://github.com/bogdbo/questions/actions/workflows/web.yml/badge.svg?branch=master)](https://github.com/bogdbo/questions/actions/workflows/web.yml)

* `api` folder is a nodejs project that exposes a GraphQL API
* `web` folder is a `create-react-app` project built with material-ui and apollo client
* Both projects use typescript (badly as rules haven't been set up properly) 
* Auth0 is used for authentication
* Code is built and deployed with GitHub actions
  * `web` is deployed to this repository `gh-pages` branch which is setup as a github page here `https://bogdbo.github.io/questions`
  * `api` is deployed to heroku
* Authentication and authorization are done with Auth0 and it's ootb roles / permissions functionalities
* Data is persisted in a free PostgreSQL database (ElephantSQL)
* There are loads of things missing and the code is of poor quality

Some screenshots (WIP)

![image](https://user-images.githubusercontent.com/889997/111705038-f599ac80-8837-11eb-9c05-7d92dfe08e25.png)

![image](https://user-images.githubusercontent.com/889997/111704995-e581cd00-8837-11eb-92fe-2fb91a814b5e.png)



