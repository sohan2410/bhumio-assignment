
# Bhumio Assignment

## Features
1. Load the pdf from server
2. Update and save the pdf back to server

## Installation

1. Clone the repository: ```git clone https://github.com/sohan2410/bhumio-assignment```
2. Change directory: ```cd bhumio-assignment```
3. Install dependencies
```
cd client && npm install
cd server && npm install
```

## Usage
### Frontend
1. Run the development client: npm run start
2. Open your browser and navigate to http://localhost:3000
### Backend
1. Run the development server: npm run start:dev

## Backend
1. ```GET /pdf```
To get ```example.pdf``` which is stored in the database
2. ```PATCH /pdf```
To update ```example.pdf``` in the database

## Database
### pdf
| column | datatype  |
| ------ | ------ |
|id| integer auto increment  |
|name|character varying|
|data|bytea|

## Screenshots
<img src="https://github.com/sohan2410/bhumio-assignment/blob/main/assets/frontend-1.png"></img>
<img src="https://github.com/sohan2410/bhumio-assignment/blob/main/assets/frontend-2.png"></img>
