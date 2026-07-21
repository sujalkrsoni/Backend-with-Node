# Docker Handbook (Part 1)

## Chapter 1 — Introduction to Docker

---

# What is Docker?

Docker is an **open-source containerization platform** that allows developers to package an application along with all of its dependencies (libraries, runtime, configuration files, operating system packages, etc.) into a **Container**.

Because everything required to run the application is bundled together, the application behaves the same regardless of where it is executed.

> **Definition (Interview):**
>
> Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers, ensuring consistent execution across development, testing, and production environments.

---

# Why Docker?

Before Docker became popular, developers frequently faced the following problem:

> **"It works on my machine, but not on yours."**

Example:

Developer A builds a Node.js application using:

* Node.js v22
* MongoDB v8
* Ubuntu 24.04

Everything works perfectly.

Developer B clones the same project.

But B has:

* Node.js v18
* MongoDB v6
* Windows
* Different environment variables

Now the application fails.

Docker solves this problem by packaging the entire environment.

---

# Problems Docker Solves

* Dependency conflicts
* Different operating systems
* Different runtime versions
* Manual software installation
* Difficult deployments
* Slow environment setup
* Inconsistent production environments

---

# What is a Container?

A **Container** is a lightweight isolated environment that contains:

* Application
* Runtime
* Dependencies
* Libraries
* Configuration
* Required OS packages

Unlike a Virtual Machine, a container **does not include an entire operating system**.

Instead, containers share the host machine's kernel.

---

# What is an Image?

An Image is a **read-only template** used to create containers.

Think of it like a class in Java.

```
Image
   │
docker run
   │
   ▼
Container
```

One Image can create multiple containers.

Example:

```
Node Image
      │
 ┌────┴────┐
 │         │
Container1 Container2
```

---

# Docker Architecture

```
             Docker Hub
                 ▲
                 │ Pull / Push
                 │
+--------------------------------------+
|            Docker Engine             |
|                                      |
| Docker CLI ---> Docker Daemon        |
|                      │               |
|                      ▼               |
|              Images & Containers     |
+--------------------------------------+
```

---

# Components of Docker

## 1. Docker CLI

CLI stands for **Command Line Interface**.

This is what developers use.

Example:

```bash
docker run nginx
docker ps
docker images
```

The CLI sends commands to the Docker Daemon.

---

## 2. Docker Daemon

The Docker Daemon (`dockerd`) is the background service responsible for:

* Building Images
* Creating Containers
* Managing Networks
* Managing Volumes
* Pulling Images
* Pushing Images

Without the daemon, Docker commands cannot work.

---

## 3. Docker Engine

Docker Engine is the core runtime of Docker.

It consists of:

* Docker CLI
* Docker Daemon
* REST API

---

## 4. Docker Hub

Docker Hub is the default cloud registry where Docker images are stored.

Examples:

* nginx
* node
* redis
* mongo
* mysql

Example:

```bash
docker pull node
```

Docker downloads the official Node.js image from Docker Hub.

---

# Docker Workflow

```
Write Code
      │
      ▼
Create Dockerfile
      │
      ▼
docker build
      │
      ▼
Docker Image
      │
docker run
      ▼
Container
      │
Push
      ▼
Docker Hub
      │
Pull
      ▼
Production Server
```

---

# Docker Lifecycle

```
Dockerfile
      │
docker build
      ▼
Image
      │
docker run
      ▼
Container
      │
Stop
      ▼
Stopped Container
      │
Start
      ▼
Running Container
```

---

# Image vs Container

| Image                        | Container                  |
| ---------------------------- | -------------------------- |
| Blueprint                    | Running Instance           |
| Read-only                    | Writable                   |
| Static                       | Dynamic                    |
| Created using `docker build` | Created using `docker run` |
| Can create many containers   | Exists independently       |

Interview Question:

**Can multiple containers use one image?**

**Answer:** Yes.

---

# Docker Advantages

* Fast startup
* Lightweight
* Portable
* Easy deployment
* Version controlled
* Isolated
* Consistent environment
* Excellent CI/CD integration

---

# Docker Limitations

* Containers share the host kernel.
* Less isolated than Virtual Machines.
* Not suitable for every workload.
* Persistent data requires Volumes.

---

# Real-world Use Cases

* Node.js APIs
* React Applications
* Next.js Applications
* MongoDB
* PostgreSQL
* Redis
* Microservices
* CI/CD Pipelines
* Kubernetes

---

# Beginner Interview Questions

### What is Docker?

### What problem does Docker solve?

### What is a Container?

### What is an Image?

### What is Docker Hub?

### Difference between Image and Container?

---

# Advanced Interview Questions

* Explain Docker Architecture.
* What is Docker Engine?
* Why are containers lightweight?
* Why are containers faster than Virtual Machines?
* Explain Docker Workflow.

---

# Quick Revision

* Docker packages applications with dependencies.
* Image = Blueprint.
* Container = Running Image.
* Docker Daemon performs all Docker operations.
* Docker CLI sends commands.
* Docker Hub stores images.

================================================================================

# Chapter 2 — Docker Installation

---

# Installing Docker on Ubuntu

Update packages

```bash
sudo apt update
```

Install prerequisites

```bash
sudo apt install ca-certificates curl
```

Add Docker Repository

```bash
sudo apt install docker-ce docker-ce-cli containerd.io
```

Verify installation

```bash
docker --version
```

---

# Check Docker Service

```bash
systemctl status docker
```

Start Docker

```bash
sudo systemctl start docker
```

Enable Docker on boot

```bash
sudo systemctl enable docker
```

---

# Verify Installation

```bash
docker run hello-world
```

Docker downloads the image and runs it.

If you see:

```
Hello from Docker!
```

Docker is installed correctly.

---

# Install Docker Desktop

Docker Desktop provides:

* GUI
* Extensions
* Docker Compose
* Image Management
* Container Management

---

# Common Installation Errors

## Permission denied

```
permission denied while trying to connect to docker.sock
```

Fix:

```bash
sudo usermod -aG docker $USER
```

Then:

```bash
newgrp docker
```

or logout/login.

---

## Docker Daemon Not Running

```
Cannot connect to the Docker daemon
```

Fix:

```bash
sudo systemctl start docker
```

---

## Docker Login Error

```
pass not initialized
```

Reason:

Credential helper cannot store credentials.

Fix:

* Generate GPG key
* Initialize `pass`
* Login again

---

# Useful Verification Commands

```bash
docker version
```

Shows client and server versions.

---

```bash
docker info
```

Shows Docker Engine information.

---

```bash
docker --help
```

Lists all Docker commands.

---

# Interview Questions

* Difference between Docker Engine and Docker Desktop?
* How do you verify Docker installation?
* Why do we add users to the Docker group?
* What causes `docker.sock` permission errors?

---

# Quick Revision

* Install Docker Engine.
* Verify using `docker run hello-world`.
* Start daemon if required.
* Add your user to the Docker group to avoid `sudo`.

================================================================================

# Chapter 3 — Docker Commands

---

# Docker Command Syntax

```
docker <command> [OPTIONS]
```

Example

```bash
docker run -d -p 3000:3000 --name app node
```

---

# docker images

Lists downloaded images.

```bash
docker images
```

Useful flags

| Flag      | Meaning                  |
| --------- | ------------------------ |
| -a        | Show intermediate images |
| --digests | Show image digest        |
| --format  | Custom output format     |
| -q        | Show only Image IDs      |

---

# docker pull

Downloads an image.

```bash
docker pull nginx
```

Specific version

```bash
docker pull node:22
```

---

# docker run

Creates and starts a new container.

Syntax

```bash
docker run [OPTIONS] IMAGE
```

### Important Flags

## -d

Detached mode.

Runs the container in the background.

```bash
docker run -d nginx
```

---

## -it

Interactive terminal.

Combination of:

* `-i` → Keep STDIN open.
* `-t` → Allocate a pseudo-terminal (TTY).

```bash
docker run -it ubuntu
```

---

## --name

Assign a custom container name.

```bash
docker run --name mongodb mongo
```

---

## -p

Port binding.

```
HostPort:ContainerPort
```

Example

```bash
docker run -p 3000:80 nginx
```

Access application using:

```
localhost:3000
```

---

## -P

Automatically maps all exposed ports to random host ports.

---

## --rm

Automatically removes the container after it exits.

```bash
docker run --rm ubuntu
```

---

## -e

Set environment variables.

```bash
docker run -e NODE_ENV=production node
```

---

## --env-file

Load environment variables from a file.

```bash
docker run --env-file .env node
```

---

## -v

Attach a volume.

```bash
docker run -v myvolume:/data mongo
```

---

## --network

Connect container to a network.

```bash
docker run --network mynetwork nginx
```

---

# docker ps

Shows running containers.

```bash
docker ps
```

Useful flags

| Flag | Meaning        |
| ---- | -------------- |
| -a   | All containers |
| -q   | IDs only       |
| -s   | Show size      |

---

# docker stop

Gracefully stops a container.

```bash
docker stop container_name
```

---

# docker start

Starts an existing stopped container.

```bash
docker start container_name
```

---

# docker restart

Restarts a container.

```bash
docker restart container_name
```

---

# docker rm

Deletes containers.

```bash
docker rm container_name
```

Force remove

```bash
docker rm -f container_name
```

---

# docker rmi

Deletes images.

```bash
docker rmi image_name
```

---

# docker exec

Runs commands inside a running container.

```bash
docker exec -it container bash
```

Preferred over `docker attach`.

---

# docker attach

Attaches your terminal to the main process of a running container.

Detach safely using:

```
Ctrl + P
Ctrl + Q
```

---

# docker logs

View container logs.

```bash
docker logs container
```

Useful flags

| Flag       | Meaning                  |
| ---------- | ------------------------ |
| -f         | Follow logs in real time |
| --tail 100 | Last 100 lines           |
| -t         | Show timestamps          |

---

# docker inspect

Displays detailed JSON metadata about Docker objects.

```bash
docker inspect container_name
```

---

# docker stats

Shows live CPU, memory, network, and disk usage.

```bash
docker stats
```

---

# docker top

Displays running processes inside a container.

```bash
docker top container_name
```

---

# docker system df

Displays Docker disk usage.

```bash
docker system df
```

---

# docker system prune

Removes unused Docker resources.

```bash
docker system prune
```

---

# Common Mistakes

❌ Using `docker rm` to delete an image.

✅ Use:

```bash
docker rmi image_name
```

---

❌ Forgetting `-p`.

Your application starts but cannot be accessed from the browser.

---

❌ Closing a container instead of detaching.

Detach using:

```
Ctrl + P
Ctrl + Q
```

---

# Best Practices

* Always name important containers using `--name`.
* Use image tags (`node:22-alpine`) instead of `latest`.
* Remove temporary containers with `--rm`.
* Use `docker exec` instead of `attach` for debugging.
* Regularly clean unused resources with `docker system prune`.

---

# Interview Questions

### Beginner

* What is the difference between `docker run` and `docker start`?
* Difference between `docker pull` and `docker run`?
* What does `-it` mean?
* What does `-d` do?
* What is the purpose of `--rm`?

### Intermediate

* Difference between `docker exec` and `docker attach`?
* Why do we use `docker inspect`?
* Difference between `docker stop`, `docker kill`, and `docker rm`?
* Explain the `docker run` lifecycle.

### Advanced

* How does Docker allocate ports using `-P`?
* How are environment variables passed to containers?
* Why is `docker exec` preferred for debugging?

---

# Chapter 1–3 Quick Revision

* Docker packages applications into portable containers.
* Images are templates; containers are running instances.
* Docker Engine consists of the CLI, Daemon, and REST API.
* Install Docker, verify with `docker run hello-world`, and ensure the daemon is running.
* Master core commands: `pull`, `run`, `ps`, `exec`, `logs`, `inspect`, `stats`, `rm`, and `rmi`.
* Know the most common `docker run` flags: `-it`, `-d`, `-p`, `--name`, `--rm`, `-e`, `-v`, and `--network`.



# Docker Handbook (Part 2)

# Chapter 4 — Docker Image Layers

---

# What are Docker Image Layers?

A Docker Image is **not a single file**. It is made up of multiple **read-only layers** stacked on top of one another.

Each instruction in a Dockerfile creates a new layer (with a few exceptions such as metadata-only instructions).

Think of an image as a stack of transparent sheets:

```text
+---------------------------+
| Container Writable Layer  |
+---------------------------+
| Layer 5 : COPY . .        |
+---------------------------+
| Layer 4 : RUN npm install |
+---------------------------+
| Layer 3 : COPY package... |
+---------------------------+
| Layer 2 : WORKDIR         |
+---------------------------+
| Layer 1 : FROM node:22    |
+---------------------------+
```

When a container starts, Docker adds one additional **writable layer** on top of the image layers.

---

# Why Docker Uses Layers

Layers provide several advantages:

* Faster builds
* Better caching
* Smaller downloads
* Easier sharing
* Less disk usage

If two images use the same base image, Docker stores that layer only once.

Example:

```text
Image A
----------------
FROM node:22
COPY app1

Image B
----------------
FROM node:22
COPY app2
```

The `node:22` layer is downloaded only once.

---

# Layer Caching

Docker builds images from top to bottom.

If a layer hasn't changed, Docker reuses the cached version instead of rebuilding it.

Example:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node","server.js"]
```

Suppose you modify only `server.js`.

Docker checks each instruction:

```text
FROM node:22          ✅ Cached

WORKDIR /app          ✅ Cached

COPY package*.json    ✅ Cached

RUN npm install       ✅ Cached

COPY . .              ❌ Rebuild

CMD                   Metadata
```

Only the last application layer is rebuilt.

This makes builds significantly faster.

---

# Why COPY package*.json Comes Before COPY . .

This is one of the most common interview questions.

Bad Dockerfile:

```dockerfile
COPY . .

RUN npm install
```

Problem:

Every code change invalidates the `COPY . .` layer.

As a result:

* npm install runs again
* All dependencies reinstall
* Build becomes slow

Correct Dockerfile:

```dockerfile
COPY package*.json ./

RUN npm install

COPY . .
```

Now:

* Dependencies install only when package.json changes.
* Source code changes rebuild only the final layer.

This optimization can save minutes in large projects.

---

# Writable Container Layer

Images are read-only.

Containers receive one writable layer.

Example:

```text
Image
-------------------
Node
Express
Application

Container
-------------------
Temporary Files
Logs
New Files
```

If the container is deleted:

* Writable layer is deleted.
* Image remains unchanged.

---

# Layer Sharing

Suppose you have:

```text
Node Image

Container A
Container B
Container C
```

All three containers share the same image layers.

Only their writable layers are different.

This is one reason Docker uses very little storage.

---

# Viewing Image History

Command:

```bash
docker history IMAGE_NAME
```

Example:

```bash
docker history node
```

Shows:

* Layer size
* Creation time
* Dockerfile instruction

Useful during optimization.

---

# Inspecting Images

```bash
docker image inspect node
```

Displays metadata:

* Architecture
* Environment variables
* Layers
* Working directory
* Entrypoint
* Exposed ports

---

# Multi-stage Builds

Instead of shipping build tools, use multiple stages.

Example:

```dockerfile
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

CMD ["node","dist/index.js"]
```

Advantages:

* Smaller images
* Better security
* Faster deployment

---

# Best Practices

* Use small base images (Alpine where appropriate).
* Keep frequently changing instructions near the bottom.
* Combine related RUN commands to reduce unnecessary layers where it improves readability.
* Use `.dockerignore`.
* Remove unnecessary build files.

---

# Common Mistakes

❌ Copying the entire project before installing dependencies.

❌ Installing unnecessary packages.

❌ Ignoring Docker cache.

❌ Using the `latest` tag in production.

---

# Interview Questions

### Beginner

* What is a Docker layer?
* Why are images lightweight?

### Intermediate

* Explain Docker caching.
* Why should `package.json` be copied before the application code?

### Advanced

* Explain Copy-on-Write.
* What is the writable container layer?
* How do multi-stage builds reduce image size?

---

# Quick Revision

* Every image consists of multiple layers.
* Layers are immutable.
* Containers add one writable layer.
* Docker caches layers.
* Optimize Dockerfiles to maximize cache usage.

================================================================================

# Chapter 5 — Port Binding

---

# Why Port Binding is Needed

Containers run in isolation.

Suppose your Express application listens on:

```text
3000
```

inside the container.

Without port binding:

```text
Browser

      ❌ Cannot Access

Container :3000
```

The application is running, but your computer cannot reach it.

Port binding exposes the container's port to the host machine.

---

# Syntax

```bash
docker run -p HOST_PORT:CONTAINER_PORT IMAGE
```

Example:

```bash
docker run -p 3000:3000 myapp
```

Now:

```text
localhost:3000
        │
        ▼
Host Port 3000
        │
        ▼
Container Port 3000
```

---

# Host Port vs Container Port

Host Port

* Port on your computer.

Container Port

* Port inside the container.

Example:

```bash
docker run -p 5000:3000 myapp
```

Your application still runs on:

```text
Container → 3000
```

But users access:

```text
localhost:5000
```

---

# Multiple Port Mapping

Example:

```bash
docker run \
-p 3000:3000 \
-p 9229:9229 \
myapp
```

Useful when exposing:

* Application
* Debugger
* Metrics endpoint

---

# Random Port Mapping

Command:

```bash
docker run -P nginx
```

`-P` (uppercase) maps all exposed ports to random host ports.

Check assigned ports:

```bash
docker ps
```

Example:

```text
0.0.0.0:49154->80/tcp
```

---

# EXPOSE vs -p

Dockerfile:

```dockerfile
EXPOSE 3000
```

Important:

`EXPOSE` **does not publish the port**.

It only documents that the application listens on port 3000.

Actual publishing requires:

```bash
docker run -p 3000:3000
```

Interview Question:

Does `EXPOSE` make an application accessible?

Answer:

No.

---

# Common Errors

## Error

```text
Bind for 0.0.0.0:3000 failed
```

Reason:

Port already in use.

Solution:

```bash
lsof -i :3000
```

or choose another host port.

---

## Error

Application runs but browser shows nothing.

Possible reasons:

* Forgot `-p`
* Wrong container port
* Application listening only on localhost inside the container instead of `0.0.0.0`

For Node.js:

```javascript
app.listen(3000, "0.0.0.0");
```

or simply:

```javascript
app.listen(3000);
```

---

# Best Practices

* Use meaningful ports.
* Avoid privileged ports unless necessary.
* Don't expose databases publicly unless required.
* Use reverse proxies (Nginx, Traefik) in production.

---

# Interview Questions

* Explain `-p`.
* Difference between `-p` and `-P`.
* Difference between `EXPOSE` and `-p`.
* Why can't the browser access a container without port mapping?

---

# Quick Revision

* Containers are isolated.
* `-p` maps host ports to container ports.
* `-P` maps exposed ports automatically.
* `EXPOSE` is documentation, not publishing.

================================================================================

# Chapter 6 — Troubleshooting Docker

---

# Why Troubleshooting Matters

Containers are isolated.

When something fails, Docker provides several commands to inspect, debug, and monitor the container.

These commands are frequently used in production.

---

# docker logs

Displays container logs.

```bash
docker logs container_name
```

Useful flags:

```bash
docker logs -f container_name
```

Follow logs in real time.

```bash
docker logs --tail 50 container_name
```

Last 50 log lines.

```bash
docker logs -t container_name
```

Show timestamps.

---

# docker exec

Run commands inside a running container.

```bash
docker exec -it myapp bash
```

If Bash is unavailable:

```bash
docker exec -it myapp sh
```

Common commands:

```bash
pwd

ls

env

cat package.json
```

---

# docker inspect

Shows complete JSON information.

```bash
docker inspect myapp
```

Useful for:

* IP Address
* Volumes
* Environment Variables
* Network Settings
* Mounts
* Restart Policy

---

# docker stats

Live resource monitoring.

```bash
docker stats
```

Displays:

* CPU
* Memory
* Network
* Disk I/O
* PIDs

Useful for detecting memory leaks.

---

# docker top

Displays running processes.

```bash
docker top myapp
```

Similar to Linux:

```bash
ps aux
```

---

# docker events

Monitor Docker events.

```bash
docker events
```

Shows:

* Container started
* Container stopped
* Image pulled
* Network created

Useful for debugging.

---

# docker system df

Disk usage.

```bash
docker system df
```

Shows:

* Images
* Containers
* Volumes
* Build Cache

---

# docker system prune

Removes unused resources.

```bash
docker system prune
```

Add `-a` to remove unused images as well.

Be careful: this deletes resources.

---

# docker image prune

Remove unused images.

```bash
docker image prune
```

---

# docker container prune

Remove stopped containers.

```bash
docker container prune
```

---

# docker volume prune

Remove unused volumes.

```bash
docker volume prune
```

---

# docker network prune

Remove unused networks.

```bash
docker network prune
```

---

# Common Errors and Solutions

## Cannot connect to Docker daemon

Reason:

Daemon is not running.

Solution:

```bash
sudo systemctl start docker
```

---

## Permission denied

Reason:

User not in Docker group.

Solution:

```bash
sudo usermod -aG docker $USER
```

---

## Image in use

Reason:

A container is still using the image.

Solution:

```bash
docker ps -a

docker rm CONTAINER_ID

docker rmi IMAGE_ID
```

---

## Port already allocated

Reason:

Host port already in use.

Solution:

Use another port or stop the conflicting process.

---

## Container exits immediately

Possible reasons:

* Main process completed.
* Wrong CMD.
* Application crashed.

Debug:

```bash
docker logs

docker inspect

docker exec
```

---

# Docker Debugging Workflow

```text
Container Failed
       │
       ▼
docker ps -a
       │
       ▼
docker logs
       │
       ▼
docker inspect
       │
       ▼
docker exec
       │
       ▼
Fix Problem
```

---

# Best Practices

* Always check logs first.
* Use `docker exec` instead of `attach` for debugging.
* Monitor CPU and memory with `docker stats`.
* Regularly clean unused resources.

---

# Interview Questions

### Beginner

* How do you see container logs?
* What is `docker exec`?

### Intermediate

* Difference between `docker exec` and `docker attach`?
* What does `docker inspect` provide?

### Advanced

* How would you debug a container that exits immediately?
* How do you investigate high memory usage in a container?
* Explain a systematic Docker troubleshooting workflow.

---

# Chapter 4–6 Quick Revision

* Docker Images are built from immutable layers.
* Docker caching speeds up image builds.
* Containers add a writable layer.
* Use `-p` to publish ports and remember `EXPOSE` only documents ports.
* Troubleshooting starts with `docker ps -a`, followed by `docker logs`, `docker inspect`, and `docker exec`.
* Monitor resources with `docker stats` and clean unused resources with the various `prune` commands.




# Docker Handbook

# Chapter 7 – Docker vs Virtual Machine (VM)

---

# What is a Virtual Machine?

A **Virtual Machine (VM)** is a complete virtual computer that runs on top of a physical machine using a **Hypervisor**. Each VM has its own operating system, libraries, binaries, and applications.

Example:

```
Laptop
│
├── Hypervisor (VirtualBox / VMware / Hyper-V)
│
├── Ubuntu VM
│     ├── Ubuntu OS
│     ├── Libraries
│     └── Application
│
├── Windows VM
│     ├── Windows OS
│     ├── Libraries
│     └── Application
```

Every Virtual Machine includes a complete operating system.

---

# What is Docker?

Docker doesn't virtualize the hardware.

Instead, Docker virtualizes the **Operating System**.

Containers share the host machine's kernel.

```
Laptop
│
├── Host Operating System
│
├── Docker Engine
│
├── Container 1
│     ├── Application
│     └── Libraries
│
├── Container 2
│     ├── Application
│     └── Libraries
```

Notice there is **no separate Operating System** inside every container.

---

# Why Docker is Faster

A Virtual Machine needs to boot an entire operating system.

Example:

```
Ubuntu VM

Boot BIOS
↓

Load Kernel
↓

Start System Services

↓

Launch Application
```

Docker only starts the application.

```
Docker Engine

↓

Start Container

↓

Application Starts
```

This usually takes only a few seconds.

---

# Resource Consumption

## Virtual Machine

```
RAM
├── OS (1–2 GB)
├── Libraries
└── Application
```

Every VM consumes RAM for its own operating system.

---

## Docker

```
RAM
├── Docker Engine
├── App 1
├── App 2
└── App 3
```

All containers share the host kernel.

Much lower memory usage.

---

# Docker vs VM Comparison

| Feature      | Docker        | Virtual Machine |
| ------------ | ------------- | --------------- |
| Virtualizes  | OS            | Hardware        |
| Kernel       | Shared        | Separate        |
| Boot Time    | Seconds       | Minutes         |
| Memory Usage | Low           | High            |
| Performance  | Very Fast     | Slower          |
| Isolation    | Process Level | Full OS         |
| Image Size   | MBs           | GBs             |
| Startup Time | Instant       | Slow            |
| Portability  | Excellent     | Good            |

---

# Advantages of Docker

* Lightweight
* Faster deployment
* Easy scaling
* Smaller image sizes
* Better developer experience
* CI/CD friendly
* Microservice friendly

---

# Advantages of Virtual Machines

* Better isolation
* Can run different operating systems
* Strong security boundaries
* Useful for legacy software

---

# When to Use Docker

Use Docker when:

* Building APIs
* Node.js applications
* React applications
* Microservices
* CI/CD
* Kubernetes
* Cloud deployments

---

# When to Use Virtual Machines

Use Virtual Machines when:

* Running Windows on Linux
* Running Linux on Windows
* Strong isolation is required
* Testing multiple operating systems

---

# Real-world Example

Suppose an e-commerce platform has:

* Authentication Service
* Payment Service
* Notification Service
* Product Service

Instead of installing everything directly on one server, each service runs inside its own Docker container.

Benefits:

* Independent deployment
* Independent scaling
* Easier debugging
* Consistent environments

---

# Common Interview Questions

### Q1. Why is Docker faster than a VM?

Because Docker shares the host OS kernel and doesn't boot a complete operating system.

---

### Q2. Can Docker replace Virtual Machines?

No. They solve different problems. Docker is lightweight application virtualization, while VMs provide complete hardware virtualization.

---

### Q3. Can Docker run Windows and Linux containers together?

Only if the host supports them appropriately (or via virtualization). Containers generally require a compatible kernel.

---

# Chapter Summary

* Docker shares the host kernel.
* Virtual Machines have their own OS.
* Docker starts faster.
* Docker uses fewer resources.
* VMs provide stronger isolation.

---

# Chapter 8 – Developing with Docker

---

# Why Develop with Docker?

Normally:

```
Developer A
Node 20

Developer B
Node 22

Developer C
Node 18
```

The application behaves differently.

Docker solves this by ensuring everyone uses the same environment.

---

# Development Workflow

```
Write Code

↓

Docker Build

↓

Docker Image

↓

Docker Container

↓

Test

↓

Deploy
```

---

# Typical Development Setup

Project:

```
project/

├── package.json
├── server.js
├── Dockerfile
└── .dockerignore
```

---

# Build Image

```
docker build -t myapp .
```

Creates a Docker Image.

---

# Run Container

```
docker run -p 3000:3000 myapp
```

Starts the application.

---

# Live Development Problem

If you edit:

```
server.js
```

Container won't automatically update because the code was copied into the image.

Need to rebuild.

```
docker build

↓

docker run
```

This becomes slow.

---

# Solution – Bind Mount

```
docker run -v $(pwd):/app
```

Current project folder is mounted inside the container.

```
Host

server.js

↓

Container

/app/server.js
```

Any change on your machine appears immediately inside the container.

---

# Environment Variables

Never hardcode secrets.

Bad

```
const DB_PASSWORD="123456";
```

Better

```
docker run -e DB_PASSWORD=123456
```

Inside Node.js

```js
process.env.DB_PASSWORD
```

---

# Using .env Files

Instead of:

```
-e DB_HOST
-e DB_PORT
-e DB_PASSWORD
```

Use

```
docker run --env-file .env
```

Cleaner and easier to manage.

---

# Development Best Practices

* Use bind mounts for source code.
* Store secrets in environment variables.
* Keep images small.
* Use `.dockerignore`.
* Pin image versions (e.g., `node:22-alpine`).
* Don't run containers as root in production.

---

# Common Mistakes

### Rebuilding after every code change

Use bind mounts during development.

---

### Installing dependencies every run

Install dependencies during image build, not every container start.

---

### Forgetting .dockerignore

Large folders (like `node_modules`) make builds slow.

---

# Interview Questions

### Why use Docker during development?

It ensures everyone works in the same environment and eliminates dependency conflicts.

---

### What problem does bind mounting solve?

It syncs local files into the container, avoiding rebuilds after every code change.

---

### Why use environment variables?

To keep configuration and secrets separate from application code.

---

# Chapter Summary

* Docker creates consistent development environments.
* Bind mounts speed up development.
* Environment variables keep configuration flexible.
* `.dockerignore` improves build performance.

---

# Chapter 9 – Docker Compose

---

# What is Docker Compose?

Docker Compose is a tool used to run **multiple containers** using a single configuration file.

Instead of running several `docker run` commands manually, you define your services in one YAML file.

---

# Why Docker Compose?

Without Compose:

```
docker run mongodb

docker run backend

docker run frontend

docker run redis
```

Hard to manage.

With Compose:

```
docker compose up
```

Everything starts together.

---

# Basic Architecture

```
docker-compose.yml

↓

Services

├── Frontend
├── Backend
├── MongoDB
└── Redis
```

---

# Basic docker-compose.yml

```yaml
services:
  backend:
    build: .
    ports:
      - "3000:3000"

  mongodb:
    image: mongo
```

---

# Important Keywords

## services

Defines all containers.

```
services:
```

---

## image

Uses an existing Docker image.

```yaml
image: mongo
```

---

## build

Builds an image from the Dockerfile in the current directory.

```yaml
build: .
```

---

## ports

Maps host ports to container ports.

```yaml
ports:
  - "3000:3000"
```

---

## environment

Passes environment variables.

```yaml
environment:
  DB_HOST: mongodb
```

---

## volumes

Persists or shares data.

```yaml
volumes:
  - data:/data/db
```

---

## depends_on

Starts dependent services first.

```yaml
depends_on:
  - mongodb
```

**Note:** It controls startup order, not application readiness.

---

# Common Docker Compose Commands

Start services

```
docker compose up
```

---

Detached mode

```
docker compose up -d
```

---

Stop services

```
docker compose down
```

---

View logs

```
docker compose logs
```

Follow logs

```
docker compose logs -f
```

---

Rebuild images

```
docker compose up --build
```

---

Specify a different compose file

```
docker compose -f docker-compose.dev.yml up
```

---

# Real-world Example

```
Frontend

↓

Backend API

↓

MongoDB
```

Compose launches all three with a single command and creates a shared network so services can communicate by service name (e.g., `mongodb`).

---

# Best Practices

* Keep one service per container.
* Use named volumes for databases.
* Don't hardcode secrets.
* Use `.env` files for configuration.
* Pin image versions instead of relying on `latest`.

---

# Common Mistakes

* Forgetting port mapping.
* Using `localhost` between containers instead of the service name.
* Assuming `depends_on` waits until the database is fully ready.
* Editing the Compose file without recreating containers when necessary.

---

# Interview Questions

### What is Docker Compose?

A tool that defines and manages multi-container Docker applications using a YAML configuration file.

---

### Why use Compose?

It simplifies running multiple related services and keeps the project configuration reproducible.

---

### Difference between Docker and Docker Compose?

Docker manages individual containers.

Docker Compose manages multiple containers as one application.

---

### What is `depends_on`?

It specifies startup order between services but does not guarantee the dependent service is ready to accept connections.

---

# Chapter Summary

* Docker Compose manages multi-container applications.
* Configuration is stored in a `docker-compose.yml` file.
* `docker compose up` starts all defined services.
* Compose automatically creates a network for service-to-service communication.
* Ideal for local development and testing.





# Docker Notes — Chapter 10 to Chapter 13

---

# Chapter 10 — Dockerizing Our Application

## What is Dockerizing?

Dockerizing an application means packaging the application along with all of its dependencies, libraries, runtime, and configurations into a Docker Image so that it can run consistently on any machine.

Instead of saying:

> "It works on my machine."

Docker allows you to say:

> "It works everywhere."

---

# Why Do We Dockerize Applications?

Without Docker:

* Different Node.js versions
* Missing packages
* Environment configuration issues
* OS differences
* Deployment problems

With Docker:

* Same environment everywhere
* Easy deployment
* Consistent dependency versions
* Better scalability
* Faster onboarding

---

# Dockerizing a Node.js Application

Suppose we have:

```
project/
│
├── server.js
├── package.json
├── package-lock.json
├── .dockerignore
└── Dockerfile
```

---

# Step 1 — Create Dockerfile

Docker looks for a file named:

```
Dockerfile
```

(No extension)

---

## Example Dockerfile

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]
```

---

# Explanation of Every Instruction

## FROM

```dockerfile
FROM node:22-alpine
```

Purpose:

* Selects the base image.

Without a base image Docker cannot build anything.

Examples:

```
FROM node:22
FROM ubuntu
FROM nginx
FROM python:3.12
```

---

## Why Alpine?

```
node:22
```

≈ 1 GB

```
node:22-alpine
```

≈ 150–200 MB

Advantages

* Smaller image
* Faster downloads
* Less storage
* Better security

---

## WORKDIR

```dockerfile
WORKDIR /app
```

Creates the folder if it doesn't exist and sets it as the current working directory.

Equivalent Linux commands:

```
mkdir /app
cd /app
```

---

## COPY

```dockerfile
COPY package*.json ./
```

Copies only package.json and package-lock.json.

Why?

Because dependencies change less frequently than source code.

Docker can reuse cached layers.

---

Later:

```dockerfile
COPY . .
```

Meaning:

```
Host Project
        │
        ▼
Container /app
```

Everything gets copied.

---

## RUN

```dockerfile
RUN npm install
```

Runs during image build.

Installs all dependencies.

Important:

RUN executes only while building the image.

---

## EXPOSE

```dockerfile
EXPOSE 3000
```

Documentation for developers.

It tells Docker:

"My application listens on port 3000."

It DOES NOT publish the port.

Actual publishing is done using:

```
docker run -p 3000:3000 image
```

---

## CMD

```dockerfile
CMD ["node","server.js"]
```

Runs when the container starts.

Only one CMD should exist.

If multiple CMD instructions exist, Docker uses the last one.

---

# Docker Build Process

```
Dockerfile
      │
      ▼
docker build
      │
      ▼
Docker Image
      │
docker run
      │
      ▼
Container
```

---

# Build Image

```
docker build -t my-app:1.0 .
```

Explanation

```
docker build
```

Creates an image.

```
-t
```

Assigns a tag.

```
my-app
```

Repository name.

```
1.0
```

Version tag.

```
.
```

Current directory is the build context.

---

# Run Container

```
docker run -d -p 3000:3000 my-app:1.0
```

Flags

-d

Runs in background.

-p

Maps host port to container port.

---

# .dockerignore

Purpose

Prevents unnecessary files from being copied.

Example

```
node_modules
.git
.env
README.md
npm-debug.log
```

Benefits

* Smaller images
* Faster builds
* Better security

---

# Docker Build Cache

Docker builds layer by layer.

```
FROM
↓

WORKDIR
↓

COPY package.json

↓

RUN npm install

↓

COPY source code

↓

CMD
```

If only source code changes

Docker skips:

```
npm install
```

This makes builds much faster.

---

# Best Practices

✅ Use official images

✅ Use Alpine images

✅ Create .dockerignore

✅ Copy package.json first

✅ Don't run as root

✅ Use specific image versions

Example:

```
node:22-alpine
```

Instead of

```
node:latest
```

---

# Common Mistakes

❌ COPY . . before npm install

Result:

Every source code change reinstalls all dependencies.

---

❌ Using latest tag

```
FROM node:latest
```

Can introduce unexpected breaking changes.

---

❌ Forgetting .dockerignore

Huge image sizes.

---

# Interview Questions

1. What is Dockerizing an application?

2. Why is COPY package.json before COPY . .?

3. Difference between RUN and CMD?

4. What is EXPOSE?

5. What is Build Context?

6. Why use Alpine images?

7. What is .dockerignore?

8. Why should we avoid latest tag?

---

# Chapter 11 — Publishing Images to Docker Hub

## What is Docker Hub?

Docker Hub is a cloud registry where Docker Images are stored and shared.

Similar to GitHub.

GitHub stores source code.

Docker Hub stores Docker Images.

---

# Workflow

```
docker build

↓

docker tag

↓

docker login

↓

docker push

↓

Docker Hub
```

---

# Login

```
docker login
```

Or

```
docker login -u username
```

---

# Tag Image

```
docker tag my-app:1.0 username/my-app:1.0
```

Format

```
username/repository:tag
```

---

# Push Image

```
docker push username/my-app:1.0
```

Uploads image to Docker Hub.

---

# Pull Image

```
docker pull username/my-app:1.0
```

Downloads image.

---

# Run Pulled Image

```
docker run username/my-app:1.0
```

---

# Versioning

Good

```
v1.0
v1.1
v2.0
```

Bad

```
latest
```

Use latest only for development.

---

# Common Errors

## Authentication Failed

Reason

Not logged in.

Solution

```
docker login
```

---

## Access Denied

Reason

Repository doesn't belong to you.

---

## Repository Name Must Be Lowercase

Wrong

```
My_App
```

Correct

```
my-app
```

---

# Best Practices

Use semantic versions.

Never overwrite production images.

Keep repositories private for company projects.

---

# Interview Questions

1. What is Docker Hub?

2. Difference between Pull and Push?

3. What is Tagging?

4. Why shouldn't production rely on latest?

---

# Chapter 12 — Docker Volumes

## Why Volumes?

Containers are temporary.

When a container is deleted,

its data is also deleted.

Volumes provide persistent storage.

---

# Problem Without Volume

```
MongoDB Container

↓

Save Data

↓

Delete Container

↓

Data Lost
```

---

# With Volume

```
Container

↓

Volume

↓

Delete Container

↓

Data Still Exists
```

---

# Types of Storage

## 1. Anonymous Volume

Docker creates the volume automatically.

```
docker run -v /data nginx
```

Harder to manage.

---

## 2. Named Volume

Recommended.

```
docker volume create mongo-data
```

Attach:

```
docker run -v mongo-data:/data/db mongo
```

Benefits

* Easy backup
* Easy reuse
* Persistent

---

## 3. Bind Mount

```
docker run -v $(pwd):/app node
```

Maps local folder.

Best for development.

---

# Volume Commands

Create

```
docker volume create my-volume
```

List

```
docker volume ls
```

Inspect

```
docker volume inspect my-volume
```

Remove

```
docker volume rm my-volume
```

Remove unused

```
docker volume prune
```

---

# Best Practices

Named volumes

→ Databases

Bind mounts

→ Development

Never store database files inside the container itself.

---

# Interview Questions

1. Why do we need Docker Volumes?

2. Anonymous vs Named Volume?

3. Bind Mount vs Volume?

4. Why are volumes important for databases?

---

# Chapter 13 — Docker Networks

## Why Networks?

Containers are isolated.

Networking allows containers to communicate.

Example

```
Node App

↓

MongoDB

↓

Redis

↓

Nginx
```

---

# Default Network Types

## Bridge Network

Default.

Containers on the same bridge can communicate.

Example

```
docker network ls
```

---

## Host Network

Shares host networking.

No network isolation.

Mostly used on Linux.

---

## None Network

No networking.

Container has no internet access.

Useful for security.

---

# Custom Bridge Network

Create

```
docker network create app-network
```

Run container

```
docker run --network app-network mongo
```

Attach another

```
docker run --network app-network backend
```

Now backend can connect using:

```
mongodb://mongo:27017
```

Notice

Use the container name instead of an IP address.

Docker provides built-in DNS.

---

# Useful Commands

List

```
docker network ls
```

Inspect

```
docker network inspect bridge
```

Create

```
docker network create my-network
```

Connect container

```
docker network connect my-network container-name
```

Disconnect

```
docker network disconnect my-network container-name
```

Delete

```
docker network rm my-network
```

---

# Bridge vs Host vs None

| Bridge      | Host              | None               |
| ----------- | ----------------- | ------------------ |
| Default     | Uses host network | No networking      |
| Isolated    | Fast              | Maximum isolation  |
| Most common | Linux only        | Security use cases |

---

# Best Practices

Use custom bridge networks for applications.

Avoid hardcoding IP addresses.

Use container names for communication.

Separate frontend, backend, and database into different services using Docker Compose.

---

# Common Mistakes

❌ Connecting containers using container IP addresses.

Use container names instead.

❌ Exposing unnecessary ports to the host.

Expose only the ports users actually need.

---

# Interview Questions

1. What is Docker Networking?

2. Explain Bridge, Host, and None networks.

3. What is a Custom Bridge Network?

4. How do two containers communicate?

5. Why should we use container names instead of IP addresses?

6. What happens if two containers are on different networks?

7. How do you inspect a Docker network?

8. What is Docker's built-in DNS?

---

# Quick Revision

* Dockerizing packages an application with all dependencies into an image.
* Dockerfile instructions are executed layer by layer.
* Docker Hub stores and distributes Docker images.
* Volumes provide persistent storage beyond the lifecycle of a container.
* Bind mounts are ideal for development; named volumes are ideal for production data.
* Networks allow containers to communicate securely.
* Bridge is the default network, Host shares the host stack, and None disables networking.
* Use custom bridge networks and container names for service-to-service communication.
