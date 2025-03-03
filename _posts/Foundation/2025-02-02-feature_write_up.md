---
layout: post
title: Tri 2 Final Blog - Feature Write Up
description: Feature Write Up
type: issues
comments: True
---

### Posts Feature (Simple Overview)

The Posts feature was created so that users could share pictures and descriptions of their cars to collaborate and share their love for cars with each other.
So, the main intended features for Posts are...
  - Page to view all posts and see/make comments on posts
  - Page to create posts and add personalized data and images to your post

#### Technical Overview of Posts

From a technical view, the posts should be stored in a database table titled "carPosts" and each post should have coorsponding information:
  - Unique Id
  - Title
  - Description
  - Post Creator's UID
  - Reference to Post's Images
  - Date Posted

In the database, I created a schema to store each post entry similarly to the structure I mentioned above. An API is used to query the database and send requested data to the client.

### Running the backend on the AWS EC2 Server

A big learning point for me was the use of an API on an actual running server with muliple occupied routes. So I decided to write about the following:
  - The EC2 Server
  - Routing (Reverse Proxy/nginx)
  - DNS
  - Docker + Docker-Compose
