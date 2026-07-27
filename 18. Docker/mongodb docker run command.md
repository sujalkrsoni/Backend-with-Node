docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=sujal \
  -e MONGO_INITDB_ROOT_PASSWORD=mrcoder123 \
  mongo:latest


  


If you want to **completely remove everything related to Docker** (containers, images, volumes, networks, cache), follow these commands carefully.

## Step 1: Stop all running containers

```bash
docker stop $(docker ps -q)
```

If there are no running containers, you may see an error—that's okay.

---

## Step 2: Remove all containers

```bash
docker rm -f $(docker ps -aq)
```

---

## Step 3: Remove all images

```bash
docker rmi -f $(docker images -aq)
```

---

## Step 4: Remove all volumes

```bash
docker volume rm $(docker volume ls -q)
```

If there are no volumes, that's okay.

---

## Step 5: Remove all custom networks

```bash
docker network prune -f
```

---

## Step 6: Remove build cache

```bash
docker builder prune -af
```

---

## Step 7: Clean up everything

```bash
docker system prune -a --volumes -f
```

---

## Step 8: Verify everything is gone

```bash
docker ps -a
```

Expected:

```text
CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS   NAMES
```

Then:

```bash
docker images
```

Expected:

```text
REPOSITORY   TAG   IMAGE ID   CREATED   SIZE
```

Then:

```bash
docker volume ls
```

Expected:

```text
DRIVER    VOLUME NAME
```

---

## If you want to completely reset Docker (including all Docker data)

This deletes **everything Docker has stored**:

```bash
sudo systemctl stop docker
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
sudo systemctl start docker
```

⚠️ This is a **factory reset** for Docker. Only use it if you're sure you don't need any existing images, containers, or volumes.

---

After running the cleanup, let me know whether your goal is to:

1. **Reinstall Docker completely**, or
2. **Start fresh and run MongoDB again**.

**English correction:**

> **i wanna delete eveerthing**

A more natural version is:

> **I want to delete everything.**






