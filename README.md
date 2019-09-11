# movie-search
Simple movie search site for Case Study

Movie search project is simple web site which is uses OMDB RestAPI's.  

### How to UP 
- `cd server` -> `npm install`(./movie-search/server)
- `cp .env.dev.example .env` (./movie-search)
- `cd client` -> `cp .env.dev.example .env` (./movie-search/client)
- `docker-compose up -d --build`

## API s
### Search Movie Endpoint 
GET : http://localhost:8000/api/search?keyword=foo

### Clear Cache Endpoint
DELETE : http://localhost:8000/api/clear  

### Frontend
URL : http://localhost:3000/


## Project Notes

### Time spent for project
- A week spent on project completion.

### Desired improvements
- Unit and Functional test improvement.
- Database integration.
- More informaiton in Movie Poster (Year, Director etc.)
- Docker improvemet for all enviroment. (Integratin, Staging, PRodcution etc.)


