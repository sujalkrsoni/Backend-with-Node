# Docker Notes (Beginner → Interview Ready)

---

# What is Docker?

**Docker** is a platform that allows developers to **build, package, ship, and run applications** inside lightweight environments called **containers**.

Instead of saying:

> "It works on my machine."

Docker ensures:

> "It works everywhere."

A Docker container contains everything required to run an application:

* Application code
* Runtime (Node.js, Python, Java, etc.)
* Libraries
* Dependencies
* Environment variables
* System tools

This makes applications portable across different environments.

---

# Why is Docker Used?

Without Docker:

```
Developer PC
    ↓
Node.js v18

Server
    ↓
Node.js v16

❌ Application may fail
```

Different environments cause issues.

---

With Docker:

```
Application
      +
Dependencies
      +
Runtime
      +
Configuration
      ↓

Docker Image
      ↓

Runs the same everywhere
```

No dependency conflicts.

---

## Benefits of Docker

* Same environment everywhere
* Faster deployment
* Lightweight
* Easy scaling
* Isolation between applications
* Easy collaboration
* Simple rollback
* Better CI/CD integration

---

# Docker Architecture

```
             Docker Client
                 │
        docker run, build
                 │
                 ▼
          Docker Engine
                 │
     ┌───────────┼───────────┐
     ▼           ▼           ▼
 Images      Containers     Networks
```

---

# What is a Docker Image?

A **Docker Image** is a **read-only blueprint** used to create containers.

Think of it like:

```
Class  →  Object
Image  →  Container
```

OR

```
Recipe → Cake
Image  → Container
```

An image contains:

* Operating System
* Runtime
* Application code
* Dependencies
* Configuration

Example:

```
Node.js
Express
MongoDB Driver
Your App
```

All packaged together.

---

## Docker Image Example

```
FROM node:22

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","start"]
```

This creates an image.

---

# What is a Docker Container?

A **Container** is a **running instance of an Image**.

Example:

```
Image
   │
docker run
   │
   ▼
Container
```

You can create many containers from one image.

Example:

```
Node Image

├── Container 1
├── Container 2
├── Container 3
```

Each runs independently.

---

# Image vs Container

| Docker Image             | Docker Container     |
| ------------------------ | -------------------- |
| Blueprint                | Running application  |
| Read-only                | Read & Write         |
| Cannot execute           | Executes application |
| Created using Dockerfile | Created from Image   |
| Stored locally           | Runs in memory       |

---

# Docker Workflow

```
Dockerfile
      │
docker build
      │
      ▼
Docker Image
      │
docker run
      │
      ▼
Docker Container
```

---

# Docker Image Layers

Every Docker Image is built in **layers**.

Each instruction in a Dockerfile creates a **new layer**.

Example:

```dockerfile
FROM node:22
```

Layer 1

---

```dockerfile
WORKDIR /app
```

Layer 2

---

```dockerfile
COPY package.json .
```

Layer 3

---

```dockerfile
RUN npm install
```

Layer 4

---

```dockerfile
COPY . .
```

Layer 5

---

```dockerfile
CMD ["npm","start"]
```

Final Layer

---

Visualization:

```
-----------------------
CMD npm start
-----------------------
COPY .
-----------------------
npm install
-----------------------
package.json
-----------------------
WORKDIR
-----------------------
Node Image
-----------------------
```

---

## Why Layers are Important?

### 1. Faster Builds

Docker caches every layer.

Example:

```
RUN npm install
```

If package.json doesn't change,

Docker reuses the cached layer.

No reinstall.

Huge time savings.

---

### 2. Smaller Downloads

Suppose:

Version 1:

```
Layer A
Layer B
Layer C
Layer D
```

Version 2:

```
Layer A
Layer B
Layer C
Layer E
```

Docker downloads only:

```
Layer E
```

Not the entire image.

---

### 3. Reusability

Many images share the same base image.

Example:

```
Ubuntu

├── Node Image
├── Python Image
├── Java Image
```

Ubuntu layer is downloaded only once.

---

# Port Binding

Your application runs **inside a container**.

Example:

```
Node App

Listening on:

3000
```

But the outside world **cannot access it** unless you expose the port.

---

Without Port Binding

```
Browser

   ❌

Container
Node App
3000
```

No connection.

---

With Port Binding

```
localhost:8000
        │
        ▼
Container:3000
```

Command:

```bash
docker run -p 8000:3000 image-name
```

Meaning:

```
Host Port : Container Port

8000      : 3000
```

Now visit:

```
http://localhost:8000
```

Docker forwards requests to:

```
Container → 3000
```

---

Example:

```
Express App

app.listen(3000)
```

Run:

```bash
docker run -p 5000:3000 myapp
```

Visit:

```
localhost:5000
```

Docker internally forwards:

```
5000 → 3000
```

---

# Docker Commands

## Check Docker Version

```bash
docker --version
```

---

## Check Docker Information

```bash
docker info
```

---

## Download an Image

```bash
docker pull nginx
```

---

## List Images

```bash
docker images
```

OR

```bash
docker image ls
```

---

## Remove Image

```bash
docker rmi image-name
```

---

## Build Image

```bash
docker build -t myapp .
```

Explanation:

```
-t

Assigns a name (tag)

myapp

Image Name

.

Current Directory
```

---

## Run Container

```bash
docker run myapp
```

---

## Run Container in Background

```bash
docker run -d myapp
```

`-d` = Detached mode

---

## Run with Port Binding

```bash
docker run -p 8000:3000 myapp
```

---

## Give Container a Name

```bash
docker run --name backend myapp
```

---

## Run with Name + Port

```bash
docker run -d \
--name backend \
-p 8000:3000 \
myapp
```

---

## List Running Containers

```bash
docker ps
```

---

## List All Containers

```bash
docker ps -a
```

---

## Stop Container

```bash
docker stop container-id
```

---

## Start Container

```bash
docker start container-id
```

---

## Restart Container

```bash
docker restart container-id
```

---

## Remove Container

```bash
docker rm container-id
```

---

## Remove Stopped Containers

```bash
docker container prune
```

---

## Remove Unused Images

```bash
docker image prune
```

---

## View Logs

```bash
docker logs container-id
```

---

## Execute Command Inside Running Container

```bash
docker exec -it container-id bash
```

If `bash` isn't available:

```bash
docker exec -it container-id sh
```

---

## Show Running Processes

```bash
docker top container-id
```

---

## Inspect Container Details

```bash
docker inspect container-id
```

---

## Show Resource Usage

```bash
docker stats
```

---

## Stop All Containers

```bash
docker stop $(docker ps -q)
```

---

## Remove All Containers

```bash
docker rm $(docker ps -aq)
```

---

## Remove All Images

```bash
docker rmi $(docker images -q)
```

---

# Interview Questions

### What is Docker?

Docker is a platform that packages applications and their dependencies into containers, ensuring they run consistently across different environments.

---

### What is the difference between an Image and a Container?

* **Image:** Read-only blueprint containing the application and its dependencies.
* **Container:** A running instance of an image with its own writable layer.

---

### What are Docker Layers?

Layers are cached, read-only filesystem changes created by each instruction in a Dockerfile. They make image builds faster, reduce storage usage, and allow efficient image sharing.

---

### Why is Port Binding Needed?

Port binding maps a port on the host machine to a port inside the container, allowing external users or applications to access services running within the container.

---

### What does `docker build -t myapp .` do?

It builds a Docker image from the current directory's `Dockerfile` and tags (names) the image as `myapp`.

---

### What does `docker run -d -p 8000:3000 myapp` do?

It starts a container from the `myapp` image in detached mode and maps host port `8000` to container port `3000`.

---

These notes cover the core Docker concepts—what Docker is, why it's used, images, containers, image layers, port binding, and the essential commands you'll use daily as a backend or MERN developer.
