# CRM FOR PHOTOGRAPHERS

## Description

Simple CRM for photography buisness. Allows you to create account, add, manage clients and tasks. Photography and videography are close to my heart and I wanted create something that I can use for my personal needs. Now you can have most important data in one place. It's MERN stack app with sepearte API server and Frontend part - thanks for this solution I will have possiblity to made mobile app and use the same API (awesome). Developing this application boosted my knowledge a lot and give me opportunity to face with React and Node.js on backend side.

**DEMO:** [LIVE LINK](https://mern-crm-photo.herokuapp.com/) \
\
**Demo account**\
login: test@test.com\
password: 12345 

![CRM-screeny](https://user-images.githubusercontent.com/22677833/164290704-b468baa6-3469-415f-9757-75cfc3834b3b.jpg)

## Table of Contents
- [Basic Features](#basicfeatures)
- [Technologies and tools](#technologiesandtools)
- [Installation](#installation)
- [Local usage](#localusage)

## Basic Features

- Register user with validation: e.g. existence of an email address, passwords compare
- Login user with validation: email and password verification with database data - MongoDB
- Dashboard with summary statistics, coming soon activities and earnings chart
- Clients page - add, remove, edit clients, open modal with more specific data
- Tasks page - add, remove tasks
- Settings - allows you to change your password

## Technologies and tools

- ReactJS
- Redux, RTK Query
- React Hook Form
- Styled Components
- Express.js
- MongoDB Database - Mongoose 
- JWT - Auth Tokens


## Installation

### Clone Git Repository
```
git clone https://github.com/rfracer/crm-photo-mern.git
```
### Frontend Part

```
cd frontend
npm install
```

### Backend API Part

```
cd backend
npm install
```

## Local usage

To use App in local enviroment:

### Frontend Part: ###
```
cd frontend
npm run start
```

### API Part: ###
```
cd backend
npm run server
```
