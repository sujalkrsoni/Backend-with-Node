Perfect. We'll build this as a **professional Git & GitHub Handbook**.

> **Book Title:** Git & GitHub Complete Notes (Backend Developer Edition)
>
> **Part 1:** Chapter 1

---

# Chapter 1 - Introduction to Git & GitHub

---

# Learning Objectives

After completing this chapter, you will understand:

* What is Version Control?
* Why Version Control is important
* Problems before Git existed
* What is Git?
* What is GitHub?
* Difference between Git and GitHub
* Why companies use Git
* Advantages of Git
* Centralized vs Distributed Version Control System
* Complete Git Workflow
* Real-world examples
* Interview Questions

---

# What is Version Control?

Imagine you are creating a Node.js project.

Day 1

```text
app.js
```

Day 2

You added Login API.

Day 3

You added JWT Authentication.

Day 4

You accidentally deleted Login API.

Now what?

Can you recover yesterday's code?

Normally...

No.

You lose everything.

---

Now imagine this.

Every time you finish a feature, you save a snapshot.

```
Version 1
↓

Version 2
↓

Version 3
↓

Version 4
```

Now if Version 4 breaks...

You can go back to Version 3 within seconds.

This process is called **Version Control**.

---

# Definition

**Version Control System (VCS)** is a system that records changes made to files over time so you can:

* Track changes
* Restore previous versions
* Compare versions
* Collaborate with others
* Know who changed what and when

---

Think of it as...

> "Google Docs Version History" for your entire project.

---

# Real-Life Example

Suppose you're writing your resume.

Without Version Control

```
Resume.pdf

Resume-final.pdf

Resume-final-new.pdf

Resume-final-updated.pdf

Resume-final-latest.pdf

Resume-final-final.pdf
```

Sound familiar?

Most beginners do this.

---

With Version Control

```
Resume

↓

Version 1

↓

Version 2

↓

Version 3

↓

Latest
```

No duplicate files.

Everything is organized.

---

# Why Do We Need Version Control?

Without Version Control

Imagine five developers working on one project.

Developer A edits

```
server.js
```

Developer B edits

```
server.js
```

Developer C edits

```
server.js
```

Now...

Whose file is correct?

Nobody knows.

---

Someone overwrites another person's work.

Someone deletes code.

Someone introduces bugs.

Nobody knows who changed it.

Chaos.

---

Version Control solves this problem.

---

# Problems Before Git

Before Git became popular, developers used manual backups.

```
Project_New

Project_New_Final

Project_New_Final2

Project_New_Final_Last

Project_New_Final_Last_Updated
```

Finding the correct project became impossible.

Developers wasted hours.

---

Another problem...

If one developer accidentally deleted the project...

Everything was gone.

---

No history.

No recovery.

No collaboration.

---

Git solved all these problems.

---

# What is Git?

Git is a **Distributed Version Control System (DVCS)**.

It helps developers

* Track changes
* Save versions
* Restore previous code
* Collaborate with teams
* Merge code safely

Git was created by

**Linus Torvalds**

(the creator of Linux)

in **2005**.

---

# Simple Definition

Git is software installed on your computer that keeps track of every change you make in your project.

---

Git lives on

YOUR COMPUTER

Not on GitHub.

This is one of the biggest interview questions.

---

# What Can Git Do?

Git can

✅ Save project history

✅ Restore deleted code

✅ Compare changes

✅ Create branches

✅ Merge branches

✅ Track every developer's work

✅ Recover old versions

✅ Work offline

---

# Example

Suppose today your project looks like this

```
Login

Signup

Dashboard
```

Tomorrow

You add

```
Payment

Notification
```

Later...

Payment feature breaks everything.

Git lets you restore yesterday's working code.

---

# What is GitHub?

GitHub is a **cloud platform** where Git repositories are stored.

Think of GitHub as

Google Drive

for Git repositories.

---

GitHub allows developers to

Store code online

Share projects

Collaborate

Review code

Create Pull Requests

Manage issues

Deploy projects

---

Without GitHub

Git still works.

This is important.

Git does NOT require GitHub.

---

# Git vs GitHub

| Git                  | GitHub                        |
| -------------------- | ----------------------------- |
| Software             | Website/Cloud Platform        |
| Installed on your PC | Runs on the Internet          |
| Tracks versions      | Stores repositories           |
| Works offline        | Requires Internet for syncing |
| Free & Open Source   | Built on top of Git           |

---

Easy way to remember

Git = Engine

GitHub = Garage

Git does the work.

GitHub stores the work.

---

# Other Git Hosting Platforms

GitHub is not the only platform.

Popular alternatives include:

* GitLab
* Bitbucket
* Azure Repos
* AWS CodeCommit

Interviewers sometimes ask this.

---

# Why Companies Use Git

Imagine Google.

Thousands of developers work on one project.

Without Git

Impossible.

Git allows every developer to

Create their own branch

↓

Develop independently

↓

Merge code

↓

Deploy safely

---

Companies use Git because it provides

* Code history
* Team collaboration
* Easy rollback
* Branching
* Code reviews
* Backup
* Deployment integration

---

# Advantages of Git

### 1. Tracks History

Every change is recorded.

---

### 2. Easy Recovery

Recover deleted code anytime.

---

### 3. Team Collaboration

Multiple developers can work together.

---

### 4. Branching

Develop features independently.

---

### 5. Fast

Git is extremely fast because most operations happen locally.

---

### 6. Distributed

Every developer has a complete copy of the project.

---

### 7. Secure

Git uses SHA-based hashes to identify commits, helping detect changes to project history.

---

# Centralized Version Control System (CVCS)

Example

SVN

Developers connect to one central server.

```
Developer A

↓

Server

↑

Developer B
```

Problem

If the server crashes...

Nobody can work.

---

# Distributed Version Control System (DVCS)

Git uses this model.

```
Developer A

↓

Complete Repository

↓

GitHub

↓

Complete Repository

↓

Developer B
```

Every developer has the entire repository.

Even if GitHub goes down...

Developers can continue working locally.

---

# CVCS vs DVCS

| CVCS                    | DVCS                          |
| ----------------------- | ----------------------------- |
| Central Server          | Every developer has full copy |
| Slower                  | Faster                        |
| Internet often required | Most work offline             |
| Single point of failure | Highly reliable               |
| Less flexible           | More flexible                 |

---

# Complete Git Workflow

Every Git project follows this flow:

```
Working Directory
        │
        ▼
 Staging Area
        │
        ▼
 Local Repository
        │
        ▼
 Remote Repository (GitHub)
```

We'll study each stage in detail in later chapters.

For now, remember the flow.

---

# Real-World Example

You build an e-commerce API.

Step 1

Write code.

```
Working Directory
```

↓

Step 2

Select files to commit.

```
Staging Area
```

↓

Step 3

Create a commit.

```
Local Repository
```

↓

Step 4

Upload to GitHub.

```
Remote Repository
```

---

# Common Misconceptions

### Git and GitHub are the same.

❌ Wrong

Git is software.

GitHub is a hosting platform.

---

### Git needs Internet.

❌ Wrong

Git works completely offline.

Internet is only needed to sync with remote repositories.

---

### GitHub automatically saves my code.

❌ Wrong

You must push your commits.

---

### Git is only for teams.

❌ Wrong

Even solo developers should use Git.

---

# Interview Questions

### 1. What is Version Control?

A system that records changes to files over time so developers can track, restore, and collaborate on code.

---

### 2. What is Git?

Git is a distributed version control system that tracks changes in source code and enables collaboration.

---

### 3. What is GitHub?

GitHub is a cloud-based platform used to host Git repositories and collaborate on projects.

---

### 4. Difference between Git and GitHub?

Git is the version control tool.

GitHub is the online platform that hosts Git repositories.

---

### 5. Can Git work without GitHub?

Yes.

Git works entirely on your local machine. GitHub is optional.

---

### 6. Why do companies use Git?

To manage source code, collaborate with teams, track history, create branches, review code, and safely deploy changes.

---

### 7. Who created Git?

Linus Torvalds in 2005.

---

### 8. What is DVCS?

A Distributed Version Control System where every developer has a complete copy of the repository.

---

### 9. Name some Git hosting services.

* GitHub
* GitLab
* Bitbucket
* Azure Repos
* AWS CodeCommit

---

### 10. Explain the Git workflow.

Working Directory → Staging Area → Local Repository → Remote Repository.

---

# Chapter Summary

By the end of this chapter, you should be able to explain:

* ✅ What Version Control is
* ✅ Why Git exists
* ✅ What Git does
* ✅ What GitHub does
* ✅ Git vs GitHub
* ✅ Centralized vs Distributed Version Control
* ✅ Why companies use Git
* ✅ Complete Git workflow at a high level

---





# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 2 – Installing & Configuring Git

---

# 🎯 Learning Objectives

After completing this chapter, you will learn:

* How to install Git
* How to verify Git installation
* What is Git Configuration?
* Local vs Global Configuration
* System Configuration
* What is `.gitconfig`?
* Configure Username & Email
* Configure Default Editor
* View Git Configuration
* Edit Git Configuration
* Remove Configuration
* Configuration Hierarchy
* Real-world Examples
* Interview Questions

---

# What is Git Configuration?

After installing Git, it doesn't know **who you are**.

Git needs some basic information before it can create commits.

For example,

* Your Name
* Your Email
* Preferred Text Editor
* Default Branch Name
* Line Ending Behavior

All of these settings are stored in Git Configuration.

---

# Why Do We Configure Git?

Whenever you create a commit,

```bash
git commit -m "Added Login API"
```

Git automatically stores information like:

```text
Commit ID : 89ab123
Author    : Sujal Soni
Email     : sujal@example.com
Date      : 21 July 2026
Message   : Added Login API
```

Without configuration,

Git doesn't know who created the commit.

---

# Installing Git

## Windows

1. Download Git from the official website.
2. Install it using the default settings.
3. Open Git Bash or Command Prompt.
4. Verify the installation.

---

## Linux (Ubuntu)

```bash
sudo apt update
sudo apt install git
```

---

## macOS

Using Homebrew:

```bash
brew install git
```

---

# Verify Git Installation

## Command

```bash
git --version
```

---

## Example

```bash
git --version
```

Output

```text
git version 2.50.1
```

This confirms Git is installed correctly.

---

# Git Configuration Levels

Git has **three levels of configuration**.

```text
System

↓

Global

↓

Local
```

The nearest configuration has the highest priority.

---

# 1. System Configuration

Applies to

✔ Every user

✔ Every repository

Usually managed by the system administrator.

You rarely modify this.

---

# 2. Global Configuration

Applies to

✔ Current user

✔ All repositories created by that user

Most developers use Global Configuration.

---

# 3. Local Configuration

Applies only to

✔ Current repository

Useful when working on different projects with different identities.

---

# Configuration Priority

Suppose

System

```text
Username = Admin
```

Global

```text
Username = Sujal
```

Local

```text
Username = Company Developer
```

Git will use

```text
Company Developer
```

because Local has the highest priority.

---

# Viewing Global Username

## Command

```bash
git config --global user.name
```

---

## Example

```bash
git config --global user.name
```

Output

```text
Sujal Soni
```

---

# Setting Global Username

## Syntax

```bash
git config --global user.name "Your Name"
```

---

## Example

```bash
git config --global user.name "Sujal Soni"
```

Now every commit will use this name.

---

# Viewing Global Email

## Command

```bash
git config --global user.email
```

---

Example

```bash
git config --global user.email
```

Output

```text
sujal@gmail.com
```

---

# Setting Global Email

## Syntax

```bash
git config --global user.email "example@gmail.com"
```

---

Example

```bash
git config --global user.email "sujal@gmail.com"
```

---

# Why Email is Important

GitHub identifies commits using your email address.

If the email in Git matches the email on your GitHub account,

your commits will appear under your GitHub profile.

Otherwise,

GitHub cannot associate those commits with your account.

---

# View All Global Configuration

## Command

```bash
git config --global --list
```

---

Example Output

```text
user.name=Sujal Soni
user.email=sujal@gmail.com
core.editor=code --wait
init.defaultBranch=main
```

---

# View Local Configuration

Inside any Git repository

```bash
git config --local --list
```

---

# View System Configuration

```bash
git config --system --list
```

Administrator permission may be required.

---

# View All Configurations

```bash
git config --list
```

This displays the merged configuration from:

* System
* Global
* Local

Remember:

If the same setting exists in multiple places, the highest-priority one is used.

---

# Open Git Configuration File

One of the most useful commands.

## Command

```bash
git config --global -e
```

---

What happens?

Git opens the global configuration file in your default editor.

Example

```text
[user]
    name = Sujal Soni
    email = sujal@gmail.com

[core]
    editor = code --wait

[init]
    defaultBranch = main
```

---

# What is `.gitconfig`?

Git stores all configuration inside a file named

```text
.gitconfig
```

Linux

```text
~/.gitconfig
```

Windows

```text
C:\Users\<Username>\.gitconfig
```

You normally don't edit it manually.

Instead, use

```bash
git config
```

commands.

---

# Change Default Editor

Example

Visual Studio Code

```bash
git config --global core.editor "code --wait"
```

---

Why `--wait`?

It tells Git to wait until VS Code is closed before continuing the Git operation.

---

Other Popular Editors

```text
VS Code
Vim
Nano
Notepad++
Sublime Text
```

---

# Change Default Branch Name

Older versions of Git created repositories with

```text
master
```

Modern Git uses

```text
main
```

Set it globally:

```bash
git config --global init.defaultBranch main
```

Now every new repository starts with

```text
main
```

---

# Remove a Configuration

Suppose you entered the wrong email.

Remove it:

```bash
git config --global --unset user.email
```

Remove username:

```bash
git config --global --unset user.name
```

---

# Local Configuration Example

Imagine

Company Project

Use

```text
company@gmail.com
```

Personal Project

Use

```text
sujal@gmail.com
```

Inside the company repository

```bash
git config --local user.email "company@gmail.com"
```

Now

Only this repository uses the company email.

Every other project still uses your global email.

---

# Real-World Example

You contribute to an open-source project.

Open Source

```text
Email:
opensource@gmail.com
```

Office

```text
company@gmail.com
```

Personal

```text
sujal@gmail.com
```

Instead of changing your global configuration repeatedly,

set a **local configuration** for each repository.

---

# Common Mistakes

## Mistake 1

Using the wrong email.

GitHub won't show your commits on your profile.

---

## Mistake 2

Editing `.gitconfig` manually without understanding the format.

Prefer using

```bash
git config
```

commands.

---

## Mistake 3

Thinking Global Configuration applies to everyone.

It only applies to the current user on that computer.

---

## Mistake 4

Assuming Local Configuration changes every repository.

It affects only the current repository.

---

# Best Practices

✔ Use your GitHub email in the global configuration.

✔ Set the default branch to `main`.

✔ Use VS Code as the default editor (if that's your primary editor).

✔ Use local configuration for work projects if required.

✔ Check your configuration after installation using:

```bash
git config --list
```

---

# Interview Questions

## 1. How do you verify Git is installed?

```bash
git --version
```

---

## 2. How do you set your Git username?

```bash
git config --global user.name "Sujal Soni"
```

---

## 3. How do you set your Git email?

```bash
git config --global user.email "sujal@gmail.com"
```

---

## 4. Difference between Local and Global configuration?

**Global**

* Applies to all repositories for the current user.

**Local**

* Applies only to the current repository and overrides global settings.

---

## 5. Which configuration has the highest priority?

```text
Local

↓

Global

↓

System
```

Local configuration overrides the others.

---

## 6. Where is Git configuration stored?

Inside the `.gitconfig` file.

---

## 7. How do you edit the global configuration?

```bash
git config --global -e
```

---

## 8. Why is email important in Git?

GitHub uses the commit email to associate commits with your account. If the email doesn't match one verified on GitHub, the commit may not appear under your profile.

---

## 9. How do you display all Git configurations?

```bash
git config --list
```

---

## 10. How do you remove a Git configuration?

Example:

```bash
git config --global --unset user.email
```

---

# Quick Revision

| Command                                               | Purpose                                        |
| ----------------------------------------------------- | ---------------------------------------------- |
| `git --version`                                       | Check installed Git version                    |
| `git config --global user.name "Name"`                | Set global username                            |
| `git config --global user.email "Email"`              | Set global email                               |
| `git config --global --list`                          | View global configuration                      |
| `git config --list`                                   | View all effective configurations              |
| `git config --global -e`                              | Open global `.gitconfig` in the default editor |
| `git config --global core.editor "code --wait"`       | Set VS Code as the default editor              |
| `git config --global init.defaultBranch main`         | Set `main` as the default branch               |
| `git config --global --unset user.email`              | Remove global email                            |
| `git config --local user.email "company@example.com"` | Set a repository-specific email                |

---

# Chapter Summary

In this chapter, you learned:

* ✅ How to install Git
* ✅ How to verify the installation
* ✅ The three Git configuration levels: System, Global, and Local
* ✅ How to configure your username and email
* ✅ How Git uses `.gitconfig`
* ✅ How to set the default editor and default branch
* ✅ How to view, edit, and remove configuration values
* ✅ Common configuration mistakes and best practices








# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 3 – Git Repository Basics

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is a Git Repository?
* Local Repository vs Remote Repository
* What is `git init`?
* What is `git clone`?
* What happens when a repository is created?
* What is the `.git` folder?
* Repository structure
* How Git stores project history
* Best practices
* Common mistakes
* Interview questions

---

# What is a Repository?

A **Repository (Repo)** is a storage location where Git keeps your project's source code, history, commits, branches, tags, and configuration.

In simple words,

> A Repository is your project along with its complete version history.

Unlike a normal folder, a Git repository remembers **every change** made to your project.

---

## Example

Suppose you create a project called:

```text
E-Commerce API
```

Normal Folder

```text
E-Commerce API/

app.js
server.js
package.json
```

Git Repository

```text
E-Commerce API/

.git/
app.js
server.js
package.json
```

The only difference is the hidden **`.git`** folder.

This hidden folder turns a normal folder into a Git repository.

---

# Types of Repository

Git mainly uses two types of repositories.

## 1. Local Repository

Stored on your own computer.

Example:

```text
/home/sujal/projects/ecommerce-api
```

or

```text
C:\Users\Sujal\Projects\Ecommerce
```

You can:

* Create commits
* Create branches
* View history
* Restore files
* Work completely offline

Everything happens locally.

---

## 2. Remote Repository

Stored on an online server.

Examples:

* GitHub
* GitLab
* Bitbucket
* Azure Repos

Example

```text
https://github.com/sujalsoni/ecommerce-api
```

Remote repositories allow multiple developers to work together.

---

# Local Repository vs Remote Repository

| Local Repository        | Remote Repository                 |
| ----------------------- | --------------------------------- |
| Stored on your computer | Stored on cloud/server            |
| Works offline           | Internet required for syncing     |
| Used for development    | Used for collaboration and backup |
| Faster                  | Slightly slower due to network    |

---

# What is `git init`?

The `git init` command initializes a new Git repository inside an existing project.

It creates a hidden `.git` directory where Git stores all repository data.

---

## Syntax

```bash
git init
```

---

## Example

Suppose you create a project.

```text
calculator/

index.js
package.json
```

Move into the project.

```bash
cd calculator
```

Run

```bash
git init
```

Output

```text
Initialized empty Git repository in /calculator/.git/
```

Now your project becomes a Git repository.

---

# Before and After `git init`

Before

```text
calculator/

index.js
package.json
```

After

```text
calculator/

.git/
index.js
package.json
```

The `.git` folder is hidden by default.

---

# What is the `.git` Folder?

The `.git` folder is the heart of every Git repository.

It contains:

* Commit history
* Branches
* Tags
* Configuration
* References
* Objects
* Logs

Without this folder,

Git cannot track your project.

---

## Never Delete `.git`

If you remove

```text
.git
```

Your project becomes an ordinary folder.

You lose:

* Commit history
* Branches
* Tags
* Repository settings

Your code files remain, but Git tracking is completely removed.

---

# Viewing Hidden Files

Linux/macOS

```bash
ls -la
```

Windows (PowerShell)

```powershell
dir -Force
```

You will see:

```text
.git
```

---

# Internal Structure of `.git`

Example

```text
.git/

HEAD
config
description
hooks/
objects/
refs/
logs/
index
```

You don't need to edit these files manually.

Git manages them automatically.

---

# What is `git clone`?

The `git clone` command copies an existing remote repository to your local machine.

Unlike downloading a ZIP file, cloning also copies the complete Git history.

---

## Syntax

```bash
git clone <repository-url>
```

---

## Example

```bash
git clone https://github.com/sujalsoni/ecommerce-api.git
```

Git downloads:

* Source code
* Commit history
* Branches
* Tags
* Remote configuration

Everything is copied.

---

# What Happens During `git clone`?

Suppose GitHub has:

```text
ecommerce-api
```

Running

```bash
git clone https://github.com/user/ecommerce-api.git
```

creates

```text
ecommerce-api/

.git/
src/
package.json
README.md
```

Git also automatically connects the remote repository as:

```text
origin
```

You can verify it later using:

```bash
git remote -v
```

---

# `git init` vs `git clone`

| git init                       | git clone                              |
| ------------------------------ | -------------------------------------- |
| Creates a new empty repository | Copies an existing repository          |
| Used for new projects          | Used for existing projects             |
| No remote repository is added  | Remote `origin` is added automatically |
| No commit history              | Complete history is copied             |

---

# Repository Lifecycle

Every Git project generally follows this flow:

```text
Create Project
        │
        ▼
git init
        │
        ▼
Write Code
        │
        ▼
Commit Changes
        │
        ▼
Push to GitHub
```

Or, if the project already exists:

```text
GitHub Repository
        │
        ▼
git clone
        │
        ▼
Start Development
```

---

# Real-World Scenario 1

You are starting a brand-new Node.js backend project.

Steps:

```bash
mkdir ecommerce-api

cd ecommerce-api

git init
```

Now begin writing your code.

---

# Real-World Scenario 2

You join a company.

The project already exists on GitHub.

You do **not** run:

```bash
git init
```

Instead,

```bash
git clone https://github.com/company/project.git
```

because the repository already exists.

---

# Common Mistakes

## Mistake 1

Running

```bash
git init
```

inside an already cloned repository.

This creates unnecessary confusion.

A cloned project is **already** a Git repository.

---

## Mistake 2

Downloading ZIP instead of cloning.

Downloading ZIP gives only the source code.

It does **not** include:

* Commit history
* Branches
* Git metadata

---

## Mistake 3

Deleting the `.git` folder.

This removes Git tracking from the project.

---

## Mistake 4

Editing files inside `.git`.

Never modify the `.git` directory manually unless you fully understand Git internals.

---

# Best Practices

* Use `git init` only for new projects.
* Use `git clone` when the repository already exists.
* Never delete the `.git` folder accidentally.
* Do not commit the `.git` directory itself.
* Avoid manually editing files inside `.git`.

---

# Interview Questions

## 1. What is a Git Repository?

A Git repository is a project that Git tracks, including its complete version history, branches, commits, and configuration.

---

## 2. What is the difference between a normal folder and a Git repository?

A normal folder stores only files.

A Git repository stores both files and their version history using the hidden `.git` directory.

---

## 3. What does `git init` do?

It initializes a new Git repository by creating the hidden `.git` folder.

---

## 4. What does `git clone` do?

It copies an existing repository, including its source code, history, branches, tags, and remote configuration.

---

## 5. What is stored inside the `.git` folder?

Git stores:

* Commit history
* Branch information
* Tags
* Configuration
* Objects
* References
* Logs
* Index

---

## 6. Can Git work without the `.git` folder?

No.

Without the `.git` folder, Git cannot track the project.

---

## 7. When should you use `git init`?

When creating a brand-new project that is not yet under Git version control.

---

## 8. When should you use `git clone`?

When an existing repository already exists on GitHub (or another remote server) and you want a local copy.

---

## 9. Does `git clone` copy commit history?

Yes.

It copies the complete repository history along with branches and tags.

---

## 10. What remote name does Git create automatically after cloning?

Git automatically creates a remote named:

```text
origin
```

---

# Quick Revision

| Command           | Purpose                                |
| ----------------- | -------------------------------------- |
| `git init`        | Initialize a new Git repository        |
| `git clone <url>` | Copy an existing repository            |
| `ls -la`          | View hidden files (Linux/macOS)        |
| `dir -Force`      | View hidden files (Windows PowerShell) |

---

# Chapter Summary

* A **Git Repository** is a project managed by Git.
* The hidden **`.git`** directory stores all Git metadata.
* **Local repositories** exist on your computer and support offline work.
* **Remote repositories** (such as GitHub) enable collaboration and backup.
* Use **`git init`** for new projects.
* Use **`git clone`** for existing projects.
* Never delete or manually modify the `.git` directory.
* A cloned repository already includes complete history, branches, and a remote named **`origin`**.








# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 4 – Git Workflow (Working Directory → Staging Area → Local Repository)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is the Git Workflow?
* Working Directory
* Staging Area (Index)
* Local Repository
* Remote Repository
* How Git tracks changes
* `git status`
* `git add`
* `git commit`
* `git commit -am`
* File States in Git
* Complete Git Lifecycle
* Common mistakes
* Interview questions

---

# What is Git Workflow?

Git follows a fixed workflow for saving your code.

Whenever you make changes, Git moves your code through different stages before it becomes part of the project history.

The complete workflow is:

```text
Working Directory
        │
        ▼
 Staging Area
        │
        ▼
 Local Repository
        │
        ▼
 Remote Repository (GitHub)
```

Every Git project follows this workflow.

---

# Understanding the Workflow

Suppose you're building an E-Commerce API.

Initially

```text
ecommerce-api/

server.js
app.js
package.json
```

You start working.

* Added Login API
* Fixed Authentication
* Added JWT

At this moment...

Nothing has been saved in Git.

These changes exist only in your project folder.

This stage is called the **Working Directory**.

---

# Step 1 – Working Directory

The **Working Directory** is the folder where you write and edit your code.

Everything you create or modify first appears here.

Example

```text
project/

app.js
server.js
routes/
models/
package.json
```

If you modify

```text
server.js
```

Git notices that something changed.

But...

Git does **not** automatically save it.

---

## Characteristics

* Where developers write code
* Files can be modified
* Files can be deleted
* Files can be created
* Changes are not yet committed

---

# Step 2 – Staging Area

The **Staging Area** is a temporary area where Git stores the changes you want to include in the next commit.

Think of it as a **waiting room** before creating a commit.

Working Directory

↓

Staging Area

↓

Commit

---

## Why Does Git Have a Staging Area?

Imagine you changed five files.

```text
app.js

server.js

auth.js

README.md

package.json
```

But today you only want to commit

```text
auth.js

server.js
```

Git allows you to choose exactly which files should become part of the next commit.

This is the purpose of the staging area.

---

# Step 3 – Local Repository

A commit stores a permanent snapshot of all staged files.

After committing,

Git saves those changes inside the local repository.

Now your project history grows.

Example

```text
Commit A

↓

Commit B

↓

Commit C
```

Every commit has

* Commit ID
* Author
* Date
* Time
* Commit Message

---

# Step 4 – Remote Repository

Your commits are still stored only on your computer.

To share them with teammates,

you upload them to GitHub.

```text
Local Repository

↓

GitHub
```

This is done using

```bash
git push
```

We will study this in detail later.

---

# Complete Git Lifecycle

```text
Write Code
     │
     ▼
Working Directory
     │
git add
     ▼
Staging Area
     │
git commit
     ▼
Local Repository
     │
git push
     ▼
GitHub
```

This is the most important diagram in Git.

---

# File States in Git

Every file in Git exists in one of these states.

```text
Untracked

↓

Tracked

↓

Modified

↓

Staged

↓

Committed
```

Let's understand each one.

---

# Untracked File

A newly created file that Git has never seen before.

Example

You create

```text
login.js
```

Git doesn't track it yet.

Run

```bash
git status
```

Output

```text
Untracked files:

login.js
```

---

# Tracked File

A file becomes tracked after you add it to Git once.

Example

```bash
git add login.js
```

Now Git remembers this file forever.

---

# Modified File

Suppose

```text
server.js
```

already exists.

You edit it.

Now Git marks it as

```text
Modified
```

because it differs from the last commit.

---

# Staged File

Run

```bash
git add server.js
```

Now

```text
server.js
```

moves into the staging area.

It is ready for commit.

---

# Committed File

Run

```bash
git commit -m "Added Login API"
```

Now

Git permanently stores this snapshot.

---

# Git Status

The most frequently used Git command.

It shows:

* Current branch
* Modified files
* Staged files
* Untracked files
* Files ready for commit

---

## Syntax

```bash
git status
```

---

## Example

```bash
git status
```

Output

```text
On branch main

Modified:

server.js

Untracked:

login.js
```

---

# Understanding `git add`

The `git add` command moves files from the Working Directory to the Staging Area.

---

## Add a Specific File

```bash
git add server.js
```

Only

```text
server.js
```

is staged.

---

## Add Multiple Files

```bash
git add server.js auth.js
```

Both files become staged.

---

## Add All Files

```bash
git add .
```

Stages

* Modified files
* New files
* Deleted tracked files

inside the current directory.

---

## Example

Before

```text
Working Directory

✓ app.js

✓ auth.js

✓ login.js
```

Run

```bash
git add .
```

After

```text
Staging Area

✓ app.js

✓ auth.js

✓ login.js
```

---

# Does `git add` Commit Code?

No.

This is one of the biggest beginner misconceptions.

```bash
git add .
```

Only stages files.

Nothing is saved permanently until you commit.

---

# Understanding `git commit`

A commit creates a permanent snapshot of all staged files.

Think of a commit as a checkpoint.

---

## Syntax

```bash
git commit -m "Your Message"
```

---

## Example

```bash
git commit -m "Added Authentication API"
```

Git creates

```text
Commit ID

Author

Date

Message
```

---

# Writing Good Commit Messages

Bad

```text
Update
```

```text
Fix
```

```text
Changes
```

Good

```text
Added JWT Authentication

Fixed Login Validation

Created User Model

Implemented Payment API
```

A commit message should clearly describe what changed.

---

# Understanding `git commit -am`

Syntax

```bash
git commit -am "Updated Authentication"
```

This command combines two operations:

1. Automatically stages **tracked modified files**
2. Creates a commit

---

# Limitation of `git commit -am`

Suppose

```text
login.js
```

is a newly created file.

Run

```bash
git commit -am "Added Login"
```

Git ignores

```text
login.js
```

because it is **untracked**.

You must first run

```bash
git add login.js
```

Then commit.

---

# Difference Between `git add .` and `git commit -am`

| `git add .`                      | `git commit -am`                                          |
| -------------------------------- | --------------------------------------------------------- |
| Stages new files                 | ❌ Does not stage new files                                |
| Stages modified files            | ✅ Stages modified tracked files                           |
| Does not create a commit         | Creates a commit                                          |
| Requires a separate `git commit` | Performs staging (tracked files only) and commit together |

---

# Complete Example

Project

```text
project/

server.js

app.js
```

Step 1

Modify

```text
server.js
```

Create

```text
login.js
```

---

Step 2

Check status

```bash
git status
```

Output

```text
Modified:

server.js

Untracked:

login.js
```

---

Step 3

Stage everything

```bash
git add .
```

---

Step 4

Commit

```bash
git commit -m "Added Login API"
```

---

Step 5

Git creates

```text
Commit

↓

Project History Updated
```

---

# Common Mistakes

## Mistake 1

Thinking

```bash
git add .
```

uploads code to GitHub.

Wrong.

It only stages files.

---

## Mistake 2

Using

```bash
git commit -am
```

for newly created files.

Git ignores untracked files.

---

## Mistake 3

Creating commits with messages like

```text
Update

Changes

Done
```

These messages are meaningless.

---

## Mistake 4

Never checking

```bash
git status
```

before committing.

Always verify what will be committed.

---

# Best Practices

* Run `git status` before every commit.
* Write meaningful commit messages.
* Stage only related changes in a single commit.
* Avoid huge commits with unrelated features.
* Use `git commit -am` only when you understand its limitation.

---

# Interview Questions

## 1. Explain the Git workflow.

The Git workflow is:

Working Directory → Staging Area → Local Repository → Remote Repository.

---

## 2. What is the Working Directory?

The project folder where developers create and modify files.

---

## 3. What is the Staging Area?

A temporary area where selected changes are prepared before creating a commit.

---

## 4. Why does Git have a Staging Area?

It allows developers to choose exactly which changes should be included in the next commit.

---

## 5. What does `git status` do?

It displays the current state of the repository, including modified, staged, and untracked files.

---

## 6. What does `git add .` do?

It stages all new, modified, and deleted tracked files from the current directory.

---

## 7. Does `git add .` create a commit?

No.

It only moves changes into the staging area.

---

## 8. What does `git commit` do?

It creates a permanent snapshot of the staged changes and stores it in the local repository.

---

## 9. What is the limitation of `git commit -am`?

It only stages and commits **tracked modified files**. It does not include newly created untracked files.

---

## 10. Explain the file states in Git.

A file moves through these states:

```text
Untracked
      ↓
Tracked
      ↓
Modified
      ↓
Staged
      ↓
Committed
```

---

# Quick Revision

| Command                    | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `git status`               | Show repository status                       |
| `git add file`             | Stage a specific file                        |
| `git add .`                | Stage all changes in the current directory   |
| `git commit -m "message"`  | Create a new commit                          |
| `git commit -am "message"` | Stage tracked modified files and commit them |

---

# Chapter Summary

* Git follows a four-step workflow: **Working Directory → Staging Area → Local Repository → Remote Repository**.
* The **Working Directory** is where you write and edit code.
* The **Staging Area** lets you select which changes will be included in the next commit.
* A **Commit** is a permanent snapshot stored in the local repository.
* `git status` helps you inspect the current state of your repository.
* `git add` stages changes, while `git commit` permanently records them.
* `git commit -am` is a shortcut for tracked modified files only and does **not** include new untracked files.




# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 5 – Viewing Commit History (`git log`)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Commit History?
* Why commit history is important
* What is `git log`?
* Understanding Commit IDs (Hashes)
* Understanding `HEAD`
* `git log`
* `git log --oneline`
* `git log --all --oneline --graph`
* Reading commit history
* Real-world examples
* Common mistakes
* Interview questions

---

# What is Commit History?

Every time you create a commit, Git saves a snapshot of your project.

Over time, these snapshots form a complete history of your project.

Example

```text
Commit 1 → Initial Project

↓

Commit 2 → Added Login API

↓

Commit 3 → Added JWT Authentication

↓

Commit 4 → Fixed Login Bug

↓

Commit 5 → Added Payment Gateway
```

This sequence is called **Commit History**.

Git stores every commit permanently unless you explicitly remove or rewrite history.

---

# Why is Commit History Important?

Commit history helps developers:

* Track project progress
* Find bugs
* Restore old versions
* Understand who changed the code
* Review previous features
* Debug production issues

Without commit history,

finding when a bug was introduced becomes very difficult.

---

# What is `git log`?

`git log` displays the complete commit history of the current branch.

It shows:

* Commit Hash
* Author
* Email
* Date
* Commit Message

---

# Syntax

```bash
git log
```

---

# Example

```bash
git log
```

Output

```text
commit c7d6f6f4cb9b31b6b2a58c7c0f6e2ef93b9d87e

Author: Sujal Soni <sujal@gmail.com>

Date: Tue Jul 21 12:40:11 2026

    Added Authentication API

commit a38d7ac92af40ec6e8ef3c25b0f4fbc8f5e8d222

Author: Sujal Soni

Date: Mon Jul 20 09:12:03 2026

    Initial Commit
```

The newest commit always appears at the top.

---

# Understanding Commit Hash

Every commit has a unique identifier called a **Commit Hash**.

Example

```text
c7d6f6f4cb9b31b6b2a58c7c0f6e2ef93b9d87e
```

This hash uniquely identifies a commit.

Git uses it to:

* Restore commits
* Reset commits
* Cherry-pick commits
* Compare commits

No two commits share the same hash.

---

# Short Commit Hash

Instead of writing

```text
c7d6f6f4cb9b31b6b2a58c7c0f6e2ef93b9d87e
```

Git often accepts

```text
c7d6f6f
```

because the first few characters are usually enough to uniquely identify the commit.

---

# Understanding `HEAD`

`HEAD` is a pointer that refers to the current commit.

Example

```text
Commit A

↓

Commit B

↓

Commit C (HEAD)
```

Currently,

your project is using **Commit C**.

Whenever you create a new commit,

HEAD automatically moves.

```text
Commit A

↓

Commit B

↓

Commit C

↓

Commit D (HEAD)
```

HEAD always points to the latest commit of the current branch.

---

# Visualizing Commit History

Suppose your project evolves like this.

Day 1

```text
Initial Project
```

↓

Day 2

```text
Added Login
```

↓

Day 3

```text
Added JWT
```

↓

Day 4

```text
Fixed Login Bug
```

Git stores

```text
● Fixed Login Bug (HEAD)

↓

● Added JWT

↓

● Added Login

↓

● Initial Project
```

The latest commit appears first.

---

# `git log --oneline`

Sometimes,

the default `git log` output is too detailed.

Git provides a shorter version.

---

## Syntax

```bash
git log --oneline
```

---

## Example

```bash
git log --oneline
```

Output

```text
8a76bf2 Added Authentication API

1d67ef3 Added Login API

ca72de5 Initial Commit
```

This format is much easier to read.

---

# Why Use `--oneline`?

Advantages

* Cleaner output
* Easy to copy commit IDs
* Great for everyday development
* Used frequently in interviews

---

# `git log --all --oneline --graph`

One of the most useful Git commands.

---

## Syntax

```bash
git log --all --oneline --graph
```

---

## Example

```text
* 9d7ab42 Added Payment API

* e37ac21 Added Authentication

|\
| * 5fa72c1 Login Improvements

|/

* 7bc3aa9 Initial Commit
```

---

# What Does It Show?

* Every branch
* Commit history
* Merge commits
* Branch structure

This command is extremely useful while working with multiple branches.

---

# Difference Between the Three Commands

## `git log`

Shows complete commit information.

Example

```text
Commit Hash

Author

Date

Message
```

---

## `git log --oneline`

Shows only

```text
Commit Hash

Message
```

Much shorter.

---

## `git log --all --oneline --graph`

Shows

* All branches
* Merge history
* Branch graph
* Short hashes

Best for visualizing project history.

---

# Reading Commit History

Suppose

```text
a92d72f Added Login

↓

bd67fa1 Added JWT

↓

8cb27aa Fixed Authentication Bug (HEAD)
```

This means

1. Login feature was created.
2. JWT authentication was added.
3. Authentication bug was fixed later.

Reading commit messages helps developers understand how the project evolved.

---

# Real-World Example

You deployed your project.

Today,

users report that login is broken.

Using

```bash
git log
```

you find

```text
Added JWT

↓

Fixed Login

↓

Refactored Auth Middleware
```

Now you know which commits may have introduced the issue.

This makes debugging much easier.

---

# Best Practices for Commit Messages

A good commit message should describe **what changed**, not **how hard you worked**.

Good examples

```text
Added User Authentication

Fixed Payment Validation

Implemented Forgot Password

Refactored Auth Middleware
```

Bad examples

```text
Update

Done

Fix

Changes

asdf

Final

Last Update
```

Meaningful commit messages save hours during debugging.

---

# Common Mistakes

## Mistake 1

Creating meaningless commit messages.

```text
Update
```

Six months later,

nobody remembers what was updated.

---

## Mistake 2

Ignoring commit history.

Many beginners never check

```bash
git log
```

Understanding history is one of the most valuable Git skills.

---

## Mistake 3

Copying the full commit hash every time.

Usually,

the short hash is enough.

---

## Mistake 4

Thinking commits are automatically uploaded to GitHub.

They are not.

Commits exist only in the local repository until you push them.

---

# Best Practices

* Write meaningful commit messages.
* Use `git log --oneline` for daily work.
* Use `git log --all --oneline --graph` when working with branches.
* Check commit history before using `git reset` or `git cherry-pick`.
* Never create commits with unrelated changes.

---

# Interview Questions

## 1. What is commit history?

Commit history is the chronological record of all commits made in a Git repository.

---

## 2. What does `git log` do?

It displays the complete commit history of the current branch.

---

## 3. What information does `git log` show?

* Commit Hash
* Author
* Date
* Commit Message

---

## 4. What is a Commit Hash?

A unique identifier generated by Git for every commit.

It is used to identify and reference commits.

---

## 5. What is `HEAD`?

HEAD is a pointer that refers to the current (latest checked-out) commit.

---

## 6. What is the difference between `git log` and `git log --oneline`?

| `git log`             | `git log --oneline`               |
| --------------------- | --------------------------------- |
| Detailed output       | Compact output                    |
| Shows author and date | Shows short hash and message only |
| More information      | Easier to read                    |

---

## 7. What does `git log --all --oneline --graph` do?

It displays the commit history of **all branches** along with a graphical representation of branch and merge relationships.

---

## 8. Why are good commit messages important?

They make it easier to understand project history, debug issues, review changes, and collaborate with other developers.

---

## 9. Can two commits have the same hash?

No.

Every commit hash is unique.

---

## 10. Why is commit history useful?

It helps developers:

* Restore previous versions
* Find bugs
* Track changes
* Understand project evolution
* Collaborate effectively

---

# Quick Revision

| Command                           | Purpose                                      |
| --------------------------------- | -------------------------------------------- |
| `git log`                         | Show detailed commit history                 |
| `git log --oneline`               | Show compact commit history                  |
| `git log --all --oneline --graph` | Show all branches with a visual commit graph |

---

# Chapter Summary

* A **commit history** is the chronological record of every commit in a repository.
* Every commit has a unique **Commit Hash** that Git uses for identification.
* `HEAD` is a pointer to the current commit.
* `git log` displays detailed commit information.
* `git log --oneline` provides a concise view of the history.
* `git log --all --oneline --graph` visualizes commits across all branches, making it easier to understand branching and merging.
* Clear commit messages are essential for maintainable and collaborative development.





# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 6 – Undoing Changes & Restoring Files

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* Why we need to undo changes
* Difference between restoring a file and resetting commits
* `git restore`
* `git restore --staged`
* `git checkout <commit-id> <file>`
* Recovering deleted files
* Real-world examples
* Common mistakes
* Best practices
* Interview questions

---

# Why Do We Need to Undo Changes?

While working on a project, mistakes are common.

For example:

* You accidentally modified a file.
* You deleted an important file.
* You staged the wrong files.
* You want to discard unwanted changes.

Git provides different commands for different situations.

**Remember:**

> Not every mistake should be fixed using `git reset`.

Sometimes, `git restore` is the correct command.

---

# Types of Changes You Can Undo

Git allows you to undo changes at different stages.

```text
Working Directory
        │
        ▼
 Staging Area
        │
        ▼
 Local Repository
```

Depending on where the mistake happened, Git provides different commands.

| Situation                                 | Command                           |
| ----------------------------------------- | --------------------------------- |
| Discard changes in a file                 | `git restore <file>`              |
| Unstage files                             | `git restore --staged <file>`     |
| Recover a deleted file from an old commit | `git checkout <commit-id> <file>` |

---

# Understanding `git restore`

The `git restore` command restores a file to the last committed version.

Suppose you accidentally changed a file and want to discard those changes.

---

## Syntax

```bash
git restore <filename>
```

---

## Example

Current project

```text
project/

server.js
app.js
package.json
```

Suppose you modified

```text
server.js
```

and now it contains unwanted code.

Run

```bash
git restore server.js
```

Git restores

```text
server.js
```

to its last committed state.

---

# Before & After

Before

```text
server.js

✓ Modified
```

Run

```bash
git restore server.js
```

After

```text
server.js

✓ Same as last commit
```

All uncommitted changes are discarded.

---

# Important Note

`git restore`

**only affects the Working Directory.**

It does **not**

* delete commits
* change commit history
* remove branches

It simply restores files.

---

# Restoring Multiple Files

You can restore multiple files at once.

Example

```bash
git restore app.js server.js
```

Both files return to their last committed version.

---

# Restore All Modified Files

```bash
git restore .
```

This restores **all modified tracked files** in the current directory.

Use this command carefully because the discarded changes cannot be recovered easily.

---

# Understanding `git restore --staged`

Suppose you accidentally staged the wrong files.

Example

```bash
git add .
```

Now everything is inside the staging area.

But you don't want to commit all of them.

Instead of deleting your work,

simply unstage the files.

---

## Syntax

```bash
git restore --staged <filename>
```

---

## Example

```bash
git restore --staged server.js
```

Result

```text
Before

Staging Area

✓ server.js
```

↓

```text
After

Working Directory

✓ server.js
```

The file is removed from the staging area.

Your code remains safe.

---

# Unstage All Files

```bash
git restore --staged .
```

This command removes **all staged files** from the staging area.

Nothing is deleted.

Everything goes back to the Working Directory.

---

# `git restore` vs `git restore --staged`

| Command                     | Effect                                                       |
| --------------------------- | ------------------------------------------------------------ |
| `git restore file`          | Discards changes in the Working Directory                    |
| `git restore --staged file` | Removes the file from the Staging Area but keeps the changes |

---

# Recovering a Deleted File

Suppose

```text
server.js
```

was deleted.

You already committed that file yesterday.

Now you want it back.

---

## Step 1

Find the commit.

```bash
git log
```

Suppose the commit ID is

```text
8f73bc1
```

---

## Step 2

Restore the file.

```bash
git checkout 8f73bc1 server.js
```

Git copies

```text
server.js
```

from that commit into your current Working Directory.

---

# How Does It Work?

Suppose

Commit

```text
A

↓

B

↓

C
```

`server.js` existed in Commit B.

Current project

```text
server.js

❌ Deleted
```

Run

```bash
git checkout B server.js
```

Result

```text
server.js

✓ Restored
```

Only the file is restored.

Your current branch and commits remain unchanged.

---

# Does `git checkout` Change the Entire Project?

No.

When you specify a filename,

```bash
git checkout <commit-id> <file>
```

Git restores **only that file**.

It does **not** move your HEAD.

---

# Real-World Scenario 1

You accidentally deleted

```text
.env.example
```

It existed yesterday.

Find the commit

```bash
git log
```

Restore it

```bash
git checkout 1d72fa2 .env.example
```

File recovered.

---

# Real-World Scenario 2

You wrote

500 lines of code,

then realized it was the wrong implementation.

Discard it.

```bash
git restore server.js
```

Instantly returns to the last committed version.

---

# Real-World Scenario 3

You accidentally ran

```bash
git add .
```

and staged

20 files.

You only wanted to commit

```text
auth.js
```

Run

```bash
git restore --staged .
```

Everything becomes unstaged.

Now stage only

```bash
git add auth.js
```

---

# Common Mistakes

## Mistake 1

Thinking

```bash
git restore --staged
```

deletes code.

Wrong.

It only removes files from the staging area.

---

## Mistake 2

Using

```bash
git restore
```

after committing.

`git restore` works on uncommitted changes.

It does not remove commits.

---

## Mistake 3

Confusing

```bash
git restore
```

with

```bash
git reset
```

They solve different problems.

---

## Mistake 4

Restoring the wrong file.

Always verify the filename before running the command.

---

# Best Practices

* Run `git status` before restoring files.
* Use `git restore --staged` instead of `git reset HEAD` for unstaging (modern Git).
* Restore only the files you intend to discard.
* Never use `git restore .` unless you're sure you want to discard **all** uncommitted changes.

---

# Interview Questions

## 1. What does `git restore` do?

It restores a file in the Working Directory to its last committed state.

---

## 2. Does `git restore` remove commits?

No.

It only affects uncommitted changes.

---

## 3. What does `git restore --staged` do?

It removes files from the Staging Area while preserving their changes in the Working Directory.

---

## 4. How do you unstage all files?

```bash
git restore --staged .
```

---

## 5. How do you recover a deleted file from an old commit?

```bash
git checkout <commit-id> <filename>
```

---

## 6. What is the difference between `git restore` and `git checkout <commit-id> <file>`?

| `git restore`                         | `git checkout <commit-id> <file>`           |
| ------------------------------------- | ------------------------------------------- |
| Restores the latest committed version | Restores the version from a specific commit |
| Works with the current commit         | Works with any commit in history            |

---

## 7. Will `git restore --staged` delete my changes?

No.

It only unstages the file.

---

## 8. Can `git restore` recover deleted committed files?

Not directly.

To recover a file from a previous commit, use:

```bash
git checkout <commit-id> <filename>
```

---

## 9. When should you use `git restore`?

When you want to discard uncommitted changes in the Working Directory.

---

## 10. Why was `git restore` introduced?

To separate file restoration from branch switching, making Git commands clearer and easier to understand.

---

# Quick Revision

| Command                           | Purpose                               |
| --------------------------------- | ------------------------------------- |
| `git restore file`                | Discard changes in a file             |
| `git restore .`                   | Discard all modified tracked files    |
| `git restore --staged file`       | Unstage a specific file               |
| `git restore --staged .`          | Unstage all files                     |
| `git checkout <commit-id> <file>` | Restore a file from a specific commit |

---

# Chapter Summary

* `git restore` is used to discard **uncommitted** changes in the Working Directory.
* `git restore --staged` removes files from the Staging Area without deleting your work.
* `git checkout <commit-id> <file>` restores a specific file from any previous commit.
* Restoring a file does **not** change commit history or branches.
* Understanding the difference between restoring files and resetting commits is essential for using Git safely.







# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 7 – Git Reset (Soft, Mixed & Hard)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is `git reset`?
* Why do we use `git reset`?
* What is `HEAD`?
* What is `HEAD~1`, `HEAD~2`?
* `git reset --soft`
* `git reset --mixed`
* `git reset --hard`
* Reset using Commit ID
* Reset using `HEAD`
* Reset using `HEAD~n`
* Difference between Soft, Mixed, and Hard Reset
* Real-world examples
* Best practices
* Common mistakes
* Interview questions

---

# What is Git Reset?

`git reset` is a command used to **move the current branch (HEAD)** to another commit.

Depending on the option (`--soft`, `--mixed`, or `--hard`), it can also move or remove changes from the **Staging Area** and **Working Directory**.

Think of `git reset` as moving your project back to an earlier point in time.

---

# Why Do We Need Git Reset?

Suppose you made three commits.

```text
Commit A → Initial Project

↓

Commit B → Added Login API

↓

Commit C → Added Payment API (HEAD)
```

Later you realize the Payment API is completely wrong.

Instead of manually deleting everything,

you can reset your project back to Commit B.

---

# Understanding HEAD

`HEAD` is a pointer to the current commit.

Example

```text
Commit A

↓

Commit B

↓

Commit C (HEAD)
```

Here,

HEAD points to Commit C.

Whenever you create a new commit,

HEAD automatically moves.

---

# Understanding `HEAD~1`

`HEAD~1`

means

> One commit before HEAD.

Example

```text
Commit A

↓

Commit B (HEAD~1)

↓

Commit C (HEAD)
```

---

# Understanding `HEAD~2`

`HEAD~2`

means

> Two commits before HEAD.

```text
Commit A (HEAD~2)

↓

Commit B (HEAD~1)

↓

Commit C (HEAD)
```

---

# Understanding Commit ID

Instead of using

```text
HEAD~1
```

you can directly specify a commit hash.

Example

```bash
git reset --hard a93d72f
```

Git moves HEAD to that specific commit.

---

# Types of Git Reset

Git provides three reset modes.

```text
1. Soft Reset

2. Mixed Reset

3. Hard Reset
```

The difference is how they affect:

* Commit History
* Staging Area
* Working Directory

---

# Git Reset Overview

| Mode  | Commit History | Staging Area         | Working Directory     |
| ----- | -------------- | -------------------- | --------------------- |
| Soft  | Moves HEAD     | Keeps staged changes | Keeps files           |
| Mixed | Moves HEAD     | Clears staging       | Keeps files           |
| Hard  | Moves HEAD     | Clears staging       | Deletes local changes |

---

# Understanding `git reset --soft`

## Syntax

```bash
git reset --soft HEAD~1
```

---

## What Happens?

Git

✔ Moves HEAD

✔ Removes the latest commit

✔ Keeps all changes staged

Nothing is lost.

---

## Example

Before

```text
Commit A

↓

Commit B

↓

Commit C (HEAD)
```

Run

```bash
git reset --soft HEAD~1
```

After

```text
Commit A

↓

Commit B (HEAD)
```

The changes from Commit C are still present in the **Staging Area**.

You can immediately create another commit.

---

## Real-world Example

You committed

```text
Added Login API
```

Then noticed a typo in the commit message.

Instead of creating another commit,

use

```bash
git reset --soft HEAD~1
```

Fix the message

Commit again

```bash
git commit -m "Added User Login API"
```

---

# Understanding `git reset --mixed`

This is the **default reset mode**.

If you run

```bash
git reset HEAD~1
```

Git automatically performs a **mixed reset**.

---

## Syntax

```bash
git reset --mixed HEAD~1
```

---

## What Happens?

Git

✔ Moves HEAD

✔ Removes the commit

✔ Unstages files

✔ Keeps your code

---

## Example

Before

```text
Commit C (HEAD)
```

Run

```bash
git reset --mixed HEAD~1
```

After

```text
Commit B (HEAD)
```

The code still exists,

but it is now back in the **Working Directory**.

Nothing is staged.

---

## Real-world Example

You accidentally committed too many files.

Undo the commit,

then stage only the correct files.

---

# Understanding `git reset --hard`

⚠️ This is the most dangerous reset.

---

## Syntax

```bash
git reset --hard HEAD~1
```

---

## What Happens?

Git

✔ Moves HEAD

✔ Removes commit

✔ Clears staging area

✔ Deletes local changes

---

## Example

Before

```text
Commit A

↓

Commit B

↓

Commit C (HEAD)
```

Run

```bash
git reset --hard HEAD~1
```

After

```text
Commit A

↓

Commit B (HEAD)
```

Commit C disappears.

All changes from Commit C are removed from your local repository and working directory.

---

## Warning

If the commit has **not** been pushed,

recovering it may be difficult (though it is sometimes possible using `git reflog`).

Never use `--hard` unless you're certain you want to discard your local changes.

---

# Reset Using Commit ID

Suppose

```text
A

↓

B

↓

C

↓

D (HEAD)
```

Commit ID of B

```text
8ab72fd
```

Run

```bash
git reset --hard 8ab72fd
```

Result

```text
A

↓

B (HEAD)
```

Commits C and D are no longer reachable from the current branch.

---

# Reset Using HEAD

```bash
git reset --soft HEAD
```

Moves to the current commit.

Practically,

nothing changes.

---

```bash
git reset --mixed HEAD
```

Unstages all staged files while leaving your code intact.

---

```bash
git reset --hard HEAD
```

Restores the Working Directory to exactly match the current commit, discarding all uncommitted changes.

---

# Reset Using `HEAD~1`

```bash
git reset --soft HEAD~1
```

Undo one commit.

Keep everything staged.

---

```bash
git reset --mixed HEAD~1
```

Undo one commit.

Keep files.

Unstage everything.

---

```bash
git reset --hard HEAD~1
```

Undo one commit.

Delete changes.

---

# Reset Using `HEAD~2`

```bash
git reset --hard HEAD~2
```

Moves back two commits.

Example

```text
A

↓

B

↓

C

↓

D (HEAD)
```

After

```text
A

↓

B (HEAD)
```

---

# Difference Between Soft, Mixed and Hard

| Feature                 | Soft | Mixed | Hard |
| ----------------------- | ---- | ----- | ---- |
| Moves HEAD              | ✅    | ✅     | ✅    |
| Removes Commit          | ✅    | ✅     | ✅    |
| Keeps Staged Changes    | ✅    | ❌     | ❌    |
| Keeps Working Directory | ✅    | ✅     | ❌    |
| Deletes Local Changes   | ❌    | ❌     | ✅    |

---

# Real-World Scenario 1

You wrote the correct code.

Only the commit message is wrong.

Use

```bash
git reset --soft HEAD~1
```

---

# Real-World Scenario 2

You committed too many files.

Undo the commit.

Stage only the required files.

Use

```bash
git reset --mixed HEAD~1
```

---

# Real-World Scenario 3

You experimented with code.

Everything failed.

You want your project exactly as it was in the previous commit.

Use

```bash
git reset --hard HEAD~1
```

---

# Common Mistakes

## Mistake 1

Using

```bash
git reset --hard
```

without understanding it.

This command permanently discards local changes.

---

## Mistake 2

Confusing

```bash
git restore
```

with

```bash
git reset
```

`git restore`

works on files.

`git reset`

moves commits.

---

## Mistake 3

Using

```bash
git reset --hard
```

after pushing commits to a shared branch.

This rewrites history and can cause problems for teammates.

---

## Mistake 4

Forgetting that

```bash
git reset
```

without a mode defaults to

```text
--mixed
```

---

# Best Practices

* Use `--soft` when you only want to modify the commit.
* Use `--mixed` when you want to reorganize staged files.
* Use `--hard` only when you are sure you want to discard local changes.
* Run `git log` before resetting so you know which commit you are moving to.
* Avoid using `git reset` on shared branches after pushing.

---

# Interview Questions

## 1. What is `git reset`?

`git reset` moves the current branch (HEAD) to another commit and optionally updates the Staging Area and Working Directory depending on the reset mode.

---

## 2. What is the difference between `--soft`, `--mixed`, and `--hard`?

| Mode  | Result                        |
| ----- | ----------------------------- |
| Soft  | Keeps staged changes          |
| Mixed | Keeps files but unstages them |
| Hard  | Deletes local changes         |

---

## 3. What does `HEAD~1` mean?

It refers to the commit immediately before the current `HEAD`.

---

## 4. What is the default reset mode?

```text
--mixed
```

---

## 5. What does `git reset --hard HEAD` do?

It discards all uncommitted changes in the Working Directory and resets it to match the current commit.

---

## 6. Can `git reset` remove commits?

Yes.

It moves the branch pointer, making later commits unreachable from that branch.

---

## 7. When should you use `git reset --soft`?

When you want to undo a commit but keep all changes staged for recommitting.

---

## 8. When should you use `git reset --mixed`?

When you want to undo a commit and unstage the changes while keeping your code.

---

## 9. When should you use `git reset --hard`?

When you want to completely discard local changes and return to a previous commit.

---

## 10. What is the safest reset mode?

Generally,

```text
--soft
```

because it does not discard your changes.

---

# Quick Revision

| Command                        | Purpose                                  |
| ------------------------------ | ---------------------------------------- |
| `git reset --soft HEAD~1`      | Undo one commit and keep changes staged  |
| `git reset --mixed HEAD~1`     | Undo one commit and unstage changes      |
| `git reset --hard HEAD~1`      | Undo one commit and delete local changes |
| `git reset --hard <commit-id>` | Move directly to a specific commit       |
| `git reset --mixed HEAD`       | Unstage all staged files                 |
| `git reset --hard HEAD`        | Discard all uncommitted changes          |

---

# Chapter Summary

* `git reset` moves the current branch to a previous commit.
* `HEAD` points to the current commit, while `HEAD~1`, `HEAD~2`, etc., refer to earlier commits.
* `--soft` removes commits but keeps changes staged.
* `--mixed` removes commits, unstages changes, and keeps the code.
* `--hard` removes commits and discards local changes.
* Always understand the consequences before using `--hard`, especially on shared branches.









# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 8 – Git Branching

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is a Branch?
* Why do we need Branches?
* Default Branch (`main`)
* Creating Branches
* Switching Branches
* Listing Branches
* Renaming Branches
* Deleting Branches
* `git branch`
* `git branch <branch-name>`
* `git checkout <branch-name>`
* `git checkout -b`
* `git switch`
* `git switch -c`
* `git branch -m`
* `git branch -d`
* `git branch -D`
* Real-world workflow
* Best practices
* Interview questions

---

# What is a Branch?

A **branch** is an independent line of development in Git.

It allows you to work on new features, fix bugs, or experiment with code **without affecting the main project**.

Think of a branch as a copy of your project's timeline.

---

# Why Do We Need Branches?

Imagine your project is already live.

```text
E-Commerce API
```

Customers are using it.

Now you need to add:

* Payment Gateway
* Google Login
* OTP Authentication

If you directly edit the `main` branch and make mistakes,

your production code may break.

Instead, create a new branch.

This keeps the `main` branch stable while you develop safely.

---

# Real-Life Example

Suppose five developers are working on the same project.

```text
Developer A → Login Feature

Developer B → Payment Gateway

Developer C → Notification System

Developer D → Dashboard

Developer E → Bug Fixes
```

If everyone works on `main`, conflicts become common.

Instead, each developer creates a separate branch.

```text
main

├── login-feature

├── payment-feature

├── notification-feature

└── bug-fix
```

Later, all branches are merged into `main`.

---

# Default Branch

When a Git repository is created,

Git creates a default branch.

Modern Git uses:

```text
main
```

Older repositories may use:

```text
master
```

You can check your current branch using:

```bash
git branch
```

Output

```text
* main
```

The `*` indicates the current branch.

---

# Viewing All Branches

## Syntax

```bash
git branch
```

Example

```bash
git branch
```

Output

```text
* main

feature-login

payment-api
```

Current branch:

```text
main
```

---

# Creating a Branch

## Syntax

```bash
git branch <branch-name>
```

Example

```bash
git branch login-feature
```

Git creates a new branch.

However,

**you are still on the current branch.**

Check

```bash
git branch
```

Output

```text
* main

login-feature
```

Notice

You are still on `main`.

---

# Switching Branches

## Syntax

```bash
git checkout <branch-name>
```

Example

```bash
git checkout login-feature
```

Output

```text
Switched to branch 'login-feature'
```

Now

```bash
git branch
```

shows

```text
main

* login-feature
```

---

# Creating & Switching Together

Git provides a shortcut.

Instead of

```bash
git branch login-feature

git checkout login-feature
```

Use

```bash
git checkout -b login-feature
```

This command

* Creates the branch
* Switches to it immediately

---

# Understanding `-b`

The `-b` flag means:

> **Create a new branch before switching to it.**

Example

```bash
git checkout -b payment-api
```

Equivalent to

```bash
git branch payment-api

git checkout payment-api
```

---

# Modern Alternative – `git switch`

Git introduced `git switch` to make branch operations clearer.

Switch to an existing branch

```bash
git switch login-feature
```

---

# Creating a New Branch

```bash
git switch -c notification-feature
```

This is equivalent to

```bash
git checkout -b notification-feature
```

---

# Understanding `-c`

The `-c` flag means:

> **Create a branch and switch to it.**

Example

```bash
git switch -c bug-fix
```

Equivalent to

```bash
git branch bug-fix

git switch bug-fix
```

---

# `git checkout -b` vs `git switch -c`

| Command                   | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| `git checkout -b feature` | Create and switch to a branch              |
| `git switch -c feature`   | Create and switch to a branch (Modern Git) |

Both commands do the same thing.

`git switch` is simply more readable.

---

# Renaming a Branch

## Rename Current Branch

```bash
git branch -m new-name
```

Example

```bash
git branch -m login-api
```

Current branch is renamed.

---

## Rename Another Branch

```bash
git branch -m old-name new-name
```

Example

```bash
git branch -m login-feature authentication-feature
```

---

# Deleting a Branch

Suppose

```text
login-feature
```

has already been merged.

Delete it.

## Syntax

```bash
git branch -d <branch-name>
```

Example

```bash
git branch -d login-feature
```

Git deletes the branch only if it has already been merged.

---

# Force Delete a Branch

Sometimes Git refuses to delete a branch because it contains unmerged commits.

Force deletion

```bash
git branch -D login-feature
```

---

# Difference Between `-d` and `-D`

| Command         | Behaviour                    |
| --------------- | ---------------------------- |
| `git branch -d` | Deletes only merged branches |
| `git branch -D` | Force deletes any branch     |

---

# Viewing All Local Branches

```bash
git branch
```

---

# Viewing Remote Branches

```bash
git branch -r
```

Example

```text
origin/main

origin/login-feature

origin/payment-api
```

---

# Viewing All Branches

```bash
git branch -a
```

Example

```text
* main

login-feature

remotes/origin/main

remotes/origin/payment-api
```

---

# Real-World Workflow

Suppose you're asked to develop a Payment API.

Step 1

```bash
git switch main
```

---

Step 2

```bash
git pull
```

Get the latest changes.

---

Step 3

```bash
git switch -c payment-api
```

---

Step 4

Write code.

---

Step 5

Commit changes.

```bash
git add .

git commit -m "Added Payment API"
```

---

Step 6

Later,

merge this branch into `main`.

---

# Common Mistakes

## Mistake 1

Writing code directly on `main`.

Always create a feature branch.

---

## Mistake 2

Creating a branch but forgetting to switch to it.

Example

```bash
git branch login-feature
```

You are still on

```text
main
```

---

## Mistake 3

Force deleting a branch using

```bash
git branch -D
```

without checking whether it contains important work.

---

## Mistake 4

Creating multiple unrelated features in one branch.

Each feature should have its own branch.

---

# Best Practices

* Keep the `main` branch stable.
* Create one branch per feature or bug fix.
* Use meaningful branch names.
* Delete merged branches to keep the repository clean.
* Prefer `git switch` in modern Git versions.

---

# Naming Conventions

Good branch names

```text
feature/login

feature/payment

bugfix/auth-error

hotfix/payment-crash

refactor/user-service
```

Avoid

```text
new

abc

temp

test123

mybranch
```

---

# Interview Questions

## 1. What is a Git branch?

A branch is an independent line of development that allows you to work on changes without affecting other branches.

---

## 2. Why do we use branches?

To develop features, fix bugs, and experiment safely without impacting the stable codebase.

---

## 3. What is the default branch in modern Git?

```text
main
```

---

## 4. How do you create a new branch?

```bash
git branch feature-name
```

---

## 5. Does `git branch feature-name` switch to the new branch?

No.

It only creates the branch.

---

## 6. How do you create and switch to a branch in one command?

```bash
git checkout -b feature-name
```

or

```bash
git switch -c feature-name
```

---

## 7. What is the difference between `git checkout -b` and `git switch -c`?

There is no functional difference.

Both create a branch and switch to it.

`git switch` is the newer, more focused command.

---

## 8. What is the difference between `git branch -d` and `git branch -D`?

`-d` safely deletes only merged branches.

`-D` force deletes a branch even if it has unmerged commits.

---

## 9. How do you rename the current branch?

```bash
git branch -m new-name
```

---

## 10. How do you list all local branches?

```bash
git branch
```

---

# Quick Revision

| Command                   | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| `git branch`              | List local branches                        |
| `git branch feature`      | Create a branch                            |
| `git checkout feature`    | Switch to a branch                         |
| `git checkout -b feature` | Create and switch to a branch              |
| `git switch feature`      | Switch to a branch (Modern Git)            |
| `git switch -c feature`   | Create and switch to a branch (Modern Git) |
| `git branch -m new-name`  | Rename current branch                      |
| `git branch -d feature`   | Delete a merged branch                     |
| `git branch -D feature`   | Force delete a branch                      |
| `git branch -r`           | List remote branches                       |
| `git branch -a`           | List all local and remote branches         |

---

# Chapter Summary

* A **branch** is an independent line of development that isolates changes from the main codebase.
* The default branch in modern Git is **`main`**.
* Use `git branch` to create branches and `git checkout` or `git switch` to move between them.
* `git checkout -b` and `git switch -c` both create and switch to a new branch in a single command.
* Rename branches with `git branch -m`.
* Delete merged branches with `git branch -d` and use `git branch -D` only when you intentionally want to force deletion.
* Using separate branches for features, bug fixes, and experiments is a core Git best practice.






# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 9 – Git Merge

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Git Merge?
* Why do we need Merge?
* Fast-Forward Merge
* Three-Way Merge
* Merge Commit
* Merge Conflicts
* Resolving Merge Conflicts
* `git merge`
* `git merge --abort`
* `git diff`
* Best practices
* Real-world examples
* Interview questions

---

# What is Git Merge?

Git Merge is the process of combining changes from one branch into another.

After completing work on a feature branch, you merge it into the target branch (usually `main`).

Example

```text
main

↓

feature-login
```

After merging

```text
main (contains login feature)
```

---

# Why Do We Need Merge?

Suppose you created a feature branch.

```text
main

↓

feature-payment
```

You developed the Payment API.

Now,

the feature is complete.

Instead of copying code manually,

Git combines both branches using:

```bash
git merge feature-payment
```

---

# Real-World Example

Company Project

```text
main

├── Login Feature

├── Payment Gateway

├── Notification System

└── Admin Dashboard
```

Every developer works on a separate branch.

Once their feature is tested,

it gets merged into `main`.

---

# Basic Merge Workflow

```text
main
    │
    ├──────────────┐
    │              │
    ▼              ▼
feature-login   feature-payment
    │              │
    │              │
    └──────┬───────┘
           ▼
        git merge
           ▼
         main
```

---

# Before Merging

Suppose

```text
main

↓

Initial Project
```

Create a branch

```bash
git switch -c login-feature
```

Add Login API

Commit

```bash
git commit -m "Added Login API"
```

History

```text
main

↓

Initial Project

↓

login-feature

↓

Added Login API
```

---

# Switching to Main

Before merging,

switch to the branch that should receive the changes.

```bash
git switch main
```

---

# Merge Syntax

```bash
git merge <branch-name>
```

Example

```bash
git merge login-feature
```

Git merges

```text
login-feature
```

into

```text
main
```

---

# Merge Direction

Many beginners misunderstand this.

Suppose you run

```bash
git switch main

git merge login-feature
```

This means

> Merge **login-feature** **into** **main**

Not the other way around.

---

# Fast-Forward Merge

A Fast-Forward Merge happens when the target branch has **no new commits** after the feature branch was created.

Example

Before

```text
A (main)

↓

B (login-feature)
```

Run

```bash
git merge login-feature
```

After

```text
A

↓

B (main)
```

Git simply moves the `main` pointer forward.

No extra merge commit is created.

---

# Example

Create branch

```bash
git switch -c login-feature
```

Commit

```bash
git commit -m "Added Login API"
```

Switch

```bash
git switch main
```

Merge

```bash
git merge login-feature
```

Output

```text
Fast-forward
```

---

# Three-Way Merge

A Three-Way Merge happens when **both branches have new commits**.

Example

```text
        C (login-feature)
       /
A ---- B
       \
        D (main)
```

Now merge

Git creates

```text
        C
       /
A ---- B
       \

        D
         \
          M (Merge Commit)
```

Git automatically creates a new commit called a **Merge Commit**.

---

# Merge Commit

A Merge Commit records the combination of two development histories.

Example

```text
Initial Commit

↓

Added Login

↓

Added Payment

↓

Merge Branch 'login-feature'
```

Merge commits have **two parent commits**.

---

# What is a Merge Conflict?

A Merge Conflict occurs when Git cannot automatically combine changes.

This usually happens when two branches modify the **same part of the same file**.

---

# Example

Main branch

```javascript
const PORT = 3000;
```

Feature branch

```javascript
const PORT = 5000;
```

Git doesn't know which version should be kept.

Conflict occurs.

---

# Merge Conflict Example

Suppose

Main

```javascript
const name = "Sujal";
```

Feature

```javascript
const name = "Rahul";
```

Merge

```bash
git merge login-feature
```

Git reports

```text
CONFLICT (content): Merge conflict in app.js
```

---

# How Git Marks a Conflict

Git adds special markers.

```javascript
<<<<<<< HEAD
const name = "Sujal";
=======
const name = "Rahul";
>>>>>>> login-feature
```

Meaning

```text
<<<<<<< HEAD
```

Current branch

---

```text
=======
```

Separator

---

```text
>>>>>>> login-feature
```

Incoming branch

---

# Resolving Merge Conflicts

Step 1

Open the conflicted file.

---

Step 2

Choose the correct code.

Example

```javascript
const name = "Sujal Rahul";
```

or

```javascript
const name = "Sujal";
```

or

```javascript
const name = "Rahul";
```

---

Step 3

Remove conflict markers.

```text
<<<<<<<
=======
>>>>>>>
```

---

Step 4

Stage the file.

```bash
git add app.js
```

---

Step 5

Complete the merge.

```bash
git commit
```

Git creates the merge commit.

---

# Abort a Merge

Suppose conflicts become too complicated.

Cancel the merge.

```bash
git merge --abort
```

Git returns the repository to its state before the merge started.

---

# Checking Changes Before Merging

Compare branches.

```bash
git diff main login-feature
```

This shows the differences between the two branches before merging.

---

# Merge vs Rebase (Quick Comparison)

| Merge                 | Rebase                       |
| --------------------- | ---------------------------- |
| Preserves history     | Rewrites history             |
| Creates merge commits | No merge commits (usually)   |
| Safer for teams       | Useful for a cleaner history |
| Easier for beginners  | More advanced                |

> We'll study **Git Rebase** in a later chapter.

---

# Complete Merge Workflow

Step 1

Create a branch

```bash
git switch -c payment-api
```

---

Step 2

Write code

---

Step 3

Commit

```bash
git add .

git commit -m "Added Payment API"
```

---

Step 4

Switch

```bash
git switch main
```

---

Step 5

Merge

```bash
git merge payment-api
```

---

Step 6

Delete the merged branch

```bash
git branch -d payment-api
```

---

# Real-World Scenario

A company has five developers.

Every developer creates a separate feature branch.

Once QA approves the feature,

the branch is merged into `main`.

Finally,

the merged feature branch is deleted.

This workflow keeps the repository organized.

---

# Common Mistakes

## Mistake 1

Running

```bash
git merge main
```

while currently on the feature branch.

Always remember:

**The current branch receives the changes.**

---

## Mistake 2

Deleting a branch before merging it.

Always merge first.

Delete later.

---

## Mistake 3

Ignoring merge conflicts.

Never commit conflict markers like

```text
<<<<<<<
=======
>>>>>>>
```

---

## Mistake 4

Force deleting branches without checking if they were merged.

---

# Best Practices

* Pull the latest changes before merging.
* Merge small branches frequently.
* Resolve conflicts carefully.
* Delete merged branches.
* Write meaningful commit messages.
* Test the project after every merge.

---

# Interview Questions

## 1. What is Git Merge?

Git Merge combines changes from one branch into another.

---

## 2. Which branch receives the changes?

The **currently checked-out branch** receives the changes.

Example

```bash
git switch main

git merge feature-login
```

`main` receives the changes.

---

## 3. What is a Fast-Forward Merge?

A merge where Git simply moves the branch pointer forward because no divergent commits exist.

---

## 4. What is a Three-Way Merge?

A merge that combines two branches with independent commits and creates a merge commit.

---

## 5. What is a Merge Commit?

A special commit created by Git to combine two branch histories.

---

## 6. What is a Merge Conflict?

A situation where Git cannot automatically determine how to combine conflicting changes.

---

## 7. How do you resolve a merge conflict?

1. Open the conflicted file.
2. Choose the correct code.
3. Remove conflict markers.
4. Stage the file.
5. Commit the merge.

---

## 8. What does `git merge --abort` do?

It cancels an in-progress merge and restores the repository to its previous state.

---

## 9. How do you compare two branches?

```bash
git diff main login-feature
```

---

## 10. Should you delete a feature branch after merging?

Yes.

If the branch has been successfully merged and is no longer needed, deleting it keeps the repository clean.

---

# Quick Revision

| Command                 | Purpose                                |
| ----------------------- | -------------------------------------- |
| `git merge feature`     | Merge a branch into the current branch |
| `git merge --abort`     | Cancel an ongoing merge                |
| `git diff main feature` | Compare two branches                   |
| `git branch -d feature` | Delete a merged branch                 |

---

# Chapter Summary

* Git Merge combines changes from one branch into another.
* Always switch to the **target branch** before running `git merge`.
* A **Fast-Forward Merge** occurs when the target branch has no new commits.
* A **Three-Way Merge** occurs when both branches have diverged and results in a merge commit.
* Merge conflicts happen when Git cannot automatically combine changes to the same part of a file.
* Resolve conflicts by editing the file, removing conflict markers, staging the changes, and completing the merge.
* Use `git merge --abort` to cancel an in-progress merge if necessary.
* Merge frequently, test thoroughly, and delete merged branches to keep the repository organized.









# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 10 – Working with GitHub (Remote Repositories)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is a Remote Repository?
* Why do we need GitHub?
* Local Repository vs Remote Repository
* Connecting Git with GitHub
* `git remote add origin`
* `git remote -v`
* `git push`
* `git push -u origin main`
* `git pull`
* `git fetch`
* `git clone`
* `origin` explained
* Upstream Branch
* Complete GitHub workflow
* Best practices
* Interview questions

---

# What is a Remote Repository?

A **Remote Repository** is a Git repository hosted on a remote server such as GitHub, GitLab, or Bitbucket.

Unlike a local repository, it can be accessed by multiple developers over the internet.

Example

```text
Your Laptop
      │
      │
      ▼
GitHub Repository
```

The local repository is on your computer.

The remote repository is on GitHub.

---

# Why Do We Need GitHub?

Suppose your laptop suddenly crashes.

If your project only exists locally,

you lose everything.

By pushing your code to GitHub,

you get

* Backup
* Collaboration
* Version history
* Code review
* CI/CD integration
* Easy deployment

---

# Local Repository vs Remote Repository

| Local Repository        | Remote Repository    |
| ----------------------- | -------------------- |
| Stored on your computer | Stored on GitHub     |
| Offline access          | Internet required    |
| Personal development    | Team collaboration   |
| Faster                  | Shared with everyone |

---

# Git vs GitHub

| Git                    | GitHub                 |
| ---------------------- | ---------------------- |
| Version Control System | Git Hosting Platform   |
| Installed locally      | Hosted online          |
| Tracks history         | Stores repositories    |
| Works offline          | Used for collaboration |

---

# What is `origin`?

When Git connects to a remote repository,

it gives that repository a default nickname.

That nickname is

```text
origin
```

Example

Instead of writing

```text
https://github.com/sujalsoni/ecommerce-api.git
```

every time,

Git lets you use

```text
origin
```

---

# Adding a Remote Repository

Suppose you created a repository on GitHub.

Repository URL

```text
https://github.com/sujalsoni/ecommerce-api.git
```

Connect your local project.

## Syntax

```bash
git remote add origin <repository-url>
```

Example

```bash
git remote add origin https://github.com/sujalsoni/ecommerce-api.git
```

Now your local repository knows where the remote repository is located.

---

# Verify Remote Repository

## Syntax

```bash
git remote -v
```

Example

```bash
git remote -v
```

Output

```text
origin  https://github.com/sujalsoni/ecommerce-api.git (fetch)

origin  https://github.com/sujalsoni/ecommerce-api.git (push)
```

---

# Understanding Fetch and Push URLs

```text
(fetch)
```

Used while downloading changes.

---

```text
(push)
```

Used while uploading changes.

Usually,

both URLs are the same.

---

# What is `git push`?

`git push` uploads your local commits to the remote repository.

Without `git push`,

your commits remain only on your computer.

---

# Syntax

```bash
git push
```

or

```bash
git push origin main
```

---

# Example

```bash
git push origin main
```

Meaning

```text
Push

↓

Current commits

↓

Remote Repository

↓

main branch
```

---

# First Push

The first time you push a branch,

Git usually asks you to set an upstream branch.

Example

```bash
git push -u origin main
```

---

# Understanding `-u`

The `-u` flag means

```text
--set-upstream
```

It links

```text
Local Branch

↓

main
```

with

```text
Remote Branch

↓

origin/main
```

After that,

you can simply run

```bash
git push
```

instead of

```bash
git push origin main
```

---

# What is an Upstream Branch?

An upstream branch is the default remote branch associated with your local branch.

Example

```text
Local

main

↓

Upstream

origin/main
```

Now Git knows

* where to push
* where to pull

without specifying the branch every time.

---

# What is `git pull`?

`git pull` downloads changes from the remote repository **and automatically merges them** into your current branch.

---

# Syntax

```bash
git pull
```

or

```bash
git pull origin main
```

---

# Example

Suppose another developer pushed new commits.

You can download them using

```bash
git pull
```

Git performs

```text
Fetch

↓

Merge
```

automatically.

---

# What is `git fetch`?

`git fetch` downloads changes from the remote repository

**without merging them.**

---

# Syntax

```bash
git fetch
```

---

# Example

```bash
git fetch origin
```

Git downloads

* new commits
* new branches
* new tags

but your current branch remains unchanged.

---

# Difference Between Fetch and Pull

| `git fetch`                    | `git pull`                   |
| ------------------------------ | ---------------------------- |
| Downloads changes              | Downloads and merges changes |
| Safe                           | May create merge conflicts   |
| Does not modify current branch | Updates current branch       |

---

# What is `git clone`?

Instead of creating a project manually,

you can copy an existing repository.

---

# Syntax

```bash
git clone <repository-url>
```

---

# Example

```bash
git clone https://github.com/sujalsoni/ecommerce-api.git
```

Git downloads

* Source Code
* Commit History
* Branches
* Tags
* Remote Configuration

---

# Complete GitHub Workflow

## Step 1

Create repository on GitHub.

---

## Step 2

Initialize Git

```bash
git init
```

---

## Step 3

Connect GitHub

```bash
git remote add origin https://github.com/username/project.git
```

---

## Step 4

Stage files

```bash
git add .
```

---

## Step 5

Commit

```bash
git commit -m "Initial Commit"
```

---

## Step 6

First Push

```bash
git push -u origin main
```

---

## Step 7

Future Changes

```bash
git add .

git commit -m "Added Login API"

git push
```

---

# Real-World Scenario

You join a company.

The project already exists.

Instead of

```bash
git init
```

you run

```bash
git clone https://github.com/company/project.git
```

Then

```bash
git switch -c login-feature
```

Write code.

Commit.

Push

```bash
git push -u origin login-feature
```

Create a Pull Request.

---

# Common Mistakes

## Mistake 1

Running

```bash
git push
```

before committing.

Nothing gets uploaded because there are no commits.

---

## Mistake 2

Thinking

```bash
git fetch
```

updates your project.

It only downloads changes.

---

## Mistake 3

Running

```bash
git remote add origin
```

twice.

Git reports

```text
remote origin already exists
```

---

## Mistake 4

Using

```bash
git init
```

inside an already cloned repository.

A cloned repository is already initialized.

---

# Best Practices

* Always run `git pull` before starting new work on a shared branch.
* Use `git fetch` if you only want to inspect remote changes.
* Set the upstream branch during the first push using `-u`.
* Keep your local branch synchronized with the remote branch.
* Verify remote URLs using `git remote -v`.

---

# Interview Questions

## 1. What is a remote repository?

A remote repository is a Git repository hosted on a server that enables collaboration and backup.

---

## 2. What is `origin`?

`origin` is the default name (alias) Git assigns to a remote repository.

---

## 3. What does `git remote add origin` do?

It connects a local Git repository to a remote repository.

---

## 4. What does `git remote -v` do?

It displays the configured remote repositories along with their fetch and push URLs.

---

## 5. What does `git push` do?

It uploads local commits to the remote repository.

---

## 6. What does `git push -u origin main` do?

It pushes the `main` branch to the remote repository and sets `origin/main` as its upstream branch.

---

## 7. What is an upstream branch?

An upstream branch is the default remote branch associated with a local branch for push and pull operations.

---

## 8. What is the difference between `git fetch` and `git pull`?

| Fetch                               | Pull                         |
| ----------------------------------- | ---------------------------- |
| Downloads changes only              | Downloads and merges changes |
| Safe                                | Can create merge conflicts   |
| Does not change your current branch | Updates your current branch  |

---

## 9. What does `git clone` do?

It creates a local copy of an existing remote repository, including its complete history.

---

## 10. When should you use `git clone` instead of `git init`?

Use `git clone` when the repository already exists on a remote server. Use `git init` only for creating a new local repository.

---

# Quick Revision

| Command                       | Purpose                                         |
| ----------------------------- | ----------------------------------------------- |
| `git remote add origin <url>` | Connect local repository to a remote repository |
| `git remote -v`               | View remote repository URLs                     |
| `git push`                    | Upload commits                                  |
| `git push -u origin main`     | First push and set upstream                     |
| `git pull`                    | Download and merge changes                      |
| `git fetch`                   | Download changes without merging                |
| `git clone <url>`             | Copy an existing repository                     |

---

# Chapter Summary

* A **remote repository** is a shared Git repository hosted on platforms like GitHub.
* `origin` is the default alias for the remote repository.
* Use `git remote add origin` to connect a local repository to GitHub.
* `git push` uploads local commits, while `git pull` downloads and merges remote changes.
* `git fetch` downloads changes without modifying your current branch.
* `git push -u origin <branch>` sets the upstream branch, allowing future `git push` and `git pull` commands without specifying the remote and branch.
* `git clone` is used to copy an existing repository, including its history and remote configuration.















# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 11 – Git Stash

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Git Stash?
* Why do we need Git Stash?
* Working Directory vs Stash
* `git stash`
* `git stash list`
* `git stash show`
* `git stash apply`
* `git stash pop`
* `git stash drop`
* `git stash clear`
* `git stash push -m`
* Stashing untracked files
* Real-world scenarios
* Best practices
* Interview questions

---

# What is Git Stash?

`git stash` is a Git feature that temporarily saves your **uncommitted changes** without creating a commit.

It allows you to clean your Working Directory so you can switch branches or work on something else.

Think of Git Stash as a **temporary storage box** for unfinished work.

---

# Why Do We Need Git Stash?

Suppose you're working on a new feature.

```text id="a1n2b3"
Login Feature

✓ 70% Completed
```

Suddenly your manager says:

> "A critical production bug needs to be fixed immediately."

You cannot commit your incomplete work because it's unfinished.

You also cannot switch branches because Git warns about your uncommitted changes.

Solution:

```bash id="stash001"
git stash
```

Your unfinished work is safely stored.

Now your Working Directory is clean, and you can switch branches.

---

# Without Git Stash

```text id="flow001"
Working Directory

↓

Modified Files

↓

Cannot switch branch safely
```

---

# With Git Stash

```text id="flow002"
Working Directory

↓

git stash

↓

Stash

↓

Clean Working Directory

↓

Switch Branch

↓

Finish Urgent Task

↓

Restore Stash
```

---

# What Does `git stash` Save?

By default, Git Stash saves:

* Modified tracked files
* Staged files

It does **not** save:

* Untracked files
* Ignored files

unless you explicitly tell Git to do so.

---

# Creating a Stash

## Syntax

```bash id="stash002"
git stash
```

---

## Example

Current status

```text id="stash003"
Modified:

server.js

auth.js
```

Run

```bash id="stash004"
git stash
```

Output

```text id="stash005"
Saved working directory and index state
```

Now

```bash id="stash006"
git status
```

Output

```text id="stash007"
Working tree clean
```

---

# Viewing All Stashes

## Syntax

```bash id="stash008"
git stash list
```

---

## Example

```bash id="stash009"
git stash list
```

Output

```text id="stash010"
stash@{0}: WIP on main

stash@{1}: WIP on login-feature
```

Newest stash is always

```text id="stash011"
stash@{0}
```

---

# Stash Naming

Instead of the default message,

you can give your stash a meaningful name.

## Syntax

```bash id="stash012"
git stash push -m "message"
```

---

## Example

```bash id="stash013"
git stash push -m "Half Completed Payment API"
```

Now

```bash id="stash014"
git stash list
```

Output

```text id="stash015"
stash@{0}: On main: Half Completed Payment API
```

---

# Viewing Stash Details

## Syntax

```bash id="stash016"
git stash show
```

Output

```text id="stash017"
server.js

auth.js

package.json
```

Shows which files are stored in the latest stash.

---

# Detailed Changes

To see the actual code differences:

```bash id="stash018"
git stash show -p
```

Git displays the complete patch (diff).

---

# Applying a Stash

Suppose you're done fixing the urgent bug.

Now restore your unfinished work.

## Syntax

```bash id="stash019"
git stash apply
```

Git restores

* Working Directory
* Staged changes

The stash **still exists**.

---

# Applying a Specific Stash

```bash id="stash020"
git stash apply stash@{1}
```

Useful when you have multiple stashes.

---

# `git stash apply` vs `git stash pop`

Many beginners confuse these commands.

---

## `git stash apply`

```bash id="stash021"
git stash apply
```

Restores the stash.

Keeps the stash in the stash list.

---

## `git stash pop`

```bash id="stash022"
git stash pop
```

Restores the stash.

Automatically removes it from the stash list.

---

# Difference Between Apply and Pop

| `git stash apply` | `git stash pop`               |
| ----------------- | ----------------------------- |
| Restores stash    | Restores stash                |
| Keeps stash       | Deletes stash after restoring |
| Safer             | Faster for one-time use       |

---

# Removing a Stash

Delete a specific stash.

## Syntax

```bash id="stash023"
git stash drop stash@{0}
```

Example

```bash id="stash024"
git stash drop stash@{1}
```

Only that stash is removed.

---

# Delete All Stashes

```bash id="stash025"
git stash clear
```

Warning:

This permanently deletes **every stash**.

---

# Stashing Untracked Files

Suppose you created

```text id="stash026"
payment.js
```

It has never been added to Git.

Running

```bash id="stash027"
git stash
```

does **not** save it.

---

Use

```bash id="stash028"
git stash -u
```

or

```bash id="stash029"
git stash --include-untracked
```

Now Git also stores untracked files.

---

# Stashing Ignored Files

To include ignored files as well,

use

```bash id="stash030"
git stash -a
```

or

```bash id="stash031"
git stash --all
```

---

# Complete Example

Current Project

```text id="stash032"
Modified

server.js

auth.js

New File

payment.js
```

---

Save everything

```bash id="stash033"
git stash -u
```

---

Switch branch

```bash id="stash034"
git switch hotfix
```

---

Fix bug

Commit

Push

---

Return

```bash id="stash035"
git switch main
```

---

Restore work

```bash id="stash036"
git stash pop
```

Continue development.

---

# Real-World Scenario

You are developing a Payment API.

Halfway through,

production suddenly crashes.

You cannot commit unfinished work.

Instead

```bash id="stash037"
git stash push -m "Payment API WIP"
```

Switch

```bash id="stash038"
git switch hotfix
```

Fix the bug.

Push.

Return.

```bash id="stash039"
git switch payment-feature

git stash pop
```

Continue exactly where you left off.

---

# Common Mistakes

## Mistake 1

Thinking `git stash` creates a commit.

It does not.

---

## Mistake 2

Forgetting that untracked files are not included by default.

Use

```bash id="stash040"
git stash -u
```

---

## Mistake 3

Using

```bash id="stash041"
git stash clear
```

without checking the stash list.

---

## Mistake 4

Using `git stash pop` when you may need the stash again.

Prefer

```bash id="stash042"
git stash apply
```

if you're unsure.

---

# Best Practices

* Use descriptive stash messages.
* Prefer `git stash apply` when you're not sure the restore will succeed.
* Remove old stashes regularly.
* Use `git stash -u` if your work includes newly created files.
* Check the stash list before dropping or clearing stashes.

---

# Interview Questions

## 1. What is Git Stash?

Git Stash temporarily saves uncommitted changes so you can work on something else without creating a commit.

---

## 2. When should you use Git Stash?

When you need to switch branches or handle urgent work while preserving unfinished changes.

---

## 3. What does `git stash` save?

By default:

* Modified tracked files
* Staged changes

---

## 4. Does Git Stash save untracked files?

No.

Use

```bash id="stash043"
git stash -u
```

or

```bash id="stash044"
git stash --include-untracked
```

---

## 5. What does `git stash list` do?

Displays all saved stashes.

---

## 6. What is the difference between `git stash apply` and `git stash pop`?

| Apply          | Pop                           |
| -------------- | ----------------------------- |
| Restores stash | Restores stash                |
| Keeps stash    | Deletes stash after restoring |

---

## 7. How do you remove one stash?

```bash id="stash045"
git stash drop stash@{0}
```

---

## 8. How do you delete every stash?

```bash id="stash046"
git stash clear
```

---

## 9. How do you create a named stash?

```bash id="stash047"
git stash push -m "My Message"
```

---

## 10. What command shows the changes stored in a stash?

```bash id="stash048"
git stash show -p
```

---

# Quick Revision

| Command                       | Purpose                          |
| ----------------------------- | -------------------------------- |
| `git stash`                   | Save tracked changes temporarily |
| `git stash -u`                | Include untracked files          |
| `git stash -a`                | Include ignored files            |
| `git stash list`              | View all stashes                 |
| `git stash show`              | Show files in the latest stash   |
| `git stash show -p`           | Show detailed changes            |
| `git stash apply`             | Restore stash and keep it        |
| `git stash pop`               | Restore stash and remove it      |
| `git stash drop stash@{0}`    | Delete one stash                 |
| `git stash clear`             | Delete all stashes               |
| `git stash push -m "message"` | Create a named stash             |

---

# Chapter Summary

* `git stash` temporarily stores uncommitted work without creating a commit.
* By default, it saves **tracked modified** and **staged** files.
* Use `git stash -u` to include untracked files and `git stash -a` to include ignored files.
* `git stash apply` restores a stash while keeping it in the stash list.
* `git stash pop` restores a stash and removes it from the stash list.
* Use named stashes to make multiple stashes easier to identify.
* Git Stash is especially useful when you need to interrupt your current work to switch branches or fix urgent issues.






# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 12 – Git Cherry-Pick

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Git Cherry-Pick?
* Why do we need Cherry-Pick?
* How Cherry-Pick works
* `git cherry-pick`
* Cherry-Picking multiple commits
* Cherry-Pick conflicts
* `git cherry-pick --continue`
* `git cherry-pick --abort`
* Real-world scenarios
* Best practices
* Interview questions

---

# What is Git Cherry-Pick?

`git cherry-pick` is used to **copy one or more specific commits** from one branch and apply them to another branch.

Unlike `git merge`, Cherry-Pick **does not merge the entire branch**.

It copies **only the selected commit(s).**

---

# Why Do We Need Cherry-Pick?

Suppose you have two branches.

```text
main

↓

feature-login
```

The `feature-login` branch contains **10 commits**.

Out of those 10 commits,

you only want **one bug fix**.

Instead of merging the entire branch,

you can copy only that commit using Cherry-Pick.

---

# Merge vs Cherry-Pick

| Merge                       | Cherry-Pick                                |
| --------------------------- | ------------------------------------------ |
| Merges the complete branch  | Copies selected commit(s)                  |
| Includes every commit       | Includes only chosen commits               |
| Preserves branch history    | Creates a new commit with the same changes |
| Best for completed features | Best for isolated fixes                    |

---

# Example

Suppose

```text
main

A

↓

B
```

Feature Branch

```text
A

↓

B

↓

C

↓

D

↓

E
```

You only want commit **D**.

Run

```bash
git cherry-pick D
```

Result

```text
main

A

↓

B

↓

D'
```

Notice

Git creates a **new commit** (`D'`).

It is **not the same commit** as `D`.

The changes are identical,

but the commit hash is different.

---

# When Should You Use Cherry-Pick?

Cherry-Pick is useful when

* Copying a bug fix to another branch
* Applying a hotfix to multiple release branches
* Recovering useful commits from another branch
* Moving a single feature without merging everything

---

# Finding the Commit ID

Before Cherry-Picking,

find the commit hash.

```bash
git log --oneline
```

Example

```text
9f72ac1 Added Payment API

6ab83ef Fixed Login Bug

3ca8f71 Initial Commit
```

Suppose you need

```text
6ab83ef
```

---

# Basic Syntax

```bash
git cherry-pick <commit-id>
```

---

# Example

Switch to

```bash
git switch main
```

Now

```bash
git cherry-pick 6ab83ef
```

Git copies the changes from that commit into the current branch.

---

# What Happens Internally?

Before

```text
main

A

↓

B
```

Feature

```text
A

↓

B

↓

C
```

Cherry-Pick

```bash
git cherry-pick C
```

After

```text
main

A

↓

B

↓

C'
```

Notice again

Git creates a **new commit**.

---

# Cherry-Picking Multiple Commits

You can copy multiple commits.

## Syntax

```bash
git cherry-pick commit1 commit2 commit3
```

---

## Example

```bash
git cherry-pick a72bc3f b83ca91 d62ef91
```

Git applies the commits one by one in the order provided.

---

# Cherry-Picking a Range of Commits

Suppose

```text
A

↓

B

↓

C

↓

D

↓

E
```

You want

```text
C

↓

D

↓

E
```

Run

```bash
git cherry-pick C^..E
```

Git copies commits

* C
* D
* E

---

# Cherry-Pick Conflict

Just like Merge,

Cherry-Pick may create conflicts.

Suppose

Main

```javascript
const PORT = 3000;
```

Feature

```javascript
const PORT = 5000;
```

Git cannot decide which version to keep.

Conflict occurs.

---

# Conflict Message

```text
CONFLICT (content): Merge conflict in server.js
```

---

# Resolving Cherry-Pick Conflicts

Step 1

Open the conflicted file.

---

Step 2

Choose the correct code.

---

Step 3

Remove conflict markers.

---

Step 4

Stage the file.

```bash
git add server.js
```

---

Step 5

Continue Cherry-Pick.

```bash
git cherry-pick --continue
```

Git finishes creating the new commit.

---

# Abort Cherry-Pick

If you don't want to continue,

cancel everything.

```bash
git cherry-pick --abort
```

Git restores the repository to the state before Cherry-Pick started.

---

# Skip a Commit

While Cherry-Picking multiple commits,

suppose one commit causes conflicts that you don't need.

Skip it.

```bash
git cherry-pick --skip
```

Git ignores that commit and continues with the remaining ones.

---

# Complete Example

Current Branch

```bash
git switch main
```

---

View commits

```bash
git log --oneline
```

---

Copy one commit

```bash
git cherry-pick 9f72ac1
```

---

Resolve conflicts (if any)

```bash
git add .

git cherry-pick --continue
```

Done.

---

# Real-World Scenario

Suppose your company has three branches.

```text
main

release-v1

release-v2
```

A critical login bug is fixed in

```text
release-v2
```

Instead of merging the whole branch,

developers Cherry-Pick only the bug fix into

* `main`
* `release-v1`

This avoids bringing unfinished features into production.

---

# Cherry-Pick vs Merge

| Cherry-Pick               | Merge                             |
| ------------------------- | --------------------------------- |
| Copies selected commits   | Combines entire branches          |
| Creates new commit hashes | Preserves existing commit history |
| Useful for bug fixes      | Useful for completed features     |
| Selective                 | Complete integration              |

---

# Common Mistakes

## Mistake 1

Thinking Cherry-Pick moves a commit.

It does not.

It copies the commit.

---

## Mistake 2

Cherry-Picking the same commit multiple times.

This may duplicate changes.

---

## Mistake 3

Cherry-Picking commits without checking dependencies.

A commit may rely on earlier commits that are not copied.

---

## Mistake 4

Using Cherry-Pick instead of Merge for an entire feature branch.

Merge is usually the better choice for completed features.

---

# Best Practices

* Cherry-Pick only small, independent commits.
* Read the commit before Cherry-Picking.
* Avoid Cherry-Picking large feature commits.
* Resolve conflicts carefully.
* Prefer Merge for complete feature branches.

---

# Interview Questions

## 1. What is Git Cherry-Pick?

Git Cherry-Pick copies one or more specific commits from one branch and applies them to another branch.

---

## 2. What is the difference between Merge and Cherry-Pick?

Merge combines entire branch histories.

Cherry-Pick copies only selected commits.

---

## 3. Does Cherry-Pick preserve the original commit hash?

No.

Git creates a new commit with a new hash.

---

## 4. How do you Cherry-Pick a commit?

```bash
git cherry-pick <commit-id>
```

---

## 5. How do you Cherry-Pick multiple commits?

```bash
git cherry-pick commit1 commit2 commit3
```

---

## 6. How do you continue after resolving a Cherry-Pick conflict?

```bash
git cherry-pick --continue
```

---

## 7. How do you abort a Cherry-Pick?

```bash
git cherry-pick --abort
```

---

## 8. What does `git cherry-pick --skip` do?

It skips the current conflicting commit and continues with the remaining commits.

---

## 9. When should you use Cherry-Pick?

When you need to copy a specific bug fix or isolated commit without merging an entire branch.

---

## 10. What is the biggest limitation of Cherry-Pick?

Cherry-Picked commits can depend on earlier commits. If those dependencies are missing, the copied commit may not work correctly.

---

# Quick Revision

| Command                           | Purpose                            |
| --------------------------------- | ---------------------------------- |
| `git cherry-pick <commit-id>`     | Copy one commit                    |
| `git cherry-pick commit1 commit2` | Copy multiple commits              |
| `git cherry-pick C^..E`           | Copy a range of commits            |
| `git cherry-pick --continue`      | Continue after resolving conflicts |
| `git cherry-pick --abort`         | Cancel the Cherry-Pick             |
| `git cherry-pick --skip`          | Skip the current commit            |

---

# Chapter Summary

* `git cherry-pick` copies one or more specific commits from one branch to another.
* It creates **new commits** with new commit hashes while preserving the original changes.
* Cherry-Pick is ideal for bug fixes, hotfixes, and isolated changes.
* Merge integrates an entire branch, whereas Cherry-Pick selectively applies individual commits.
* Conflicts during Cherry-Pick are resolved similarly to merge conflicts using `git cherry-pick --continue`.
* Always ensure that the commit you are Cherry-Picking does not depend on other commits that are not being copied.








# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 13 – Removing Files from Git (`git rm` & `.gitignore`)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is `git rm`?
* Difference between deleting a file normally and using `git rm`
* `git rm`
* `git rm --cached`
* `git rm -r`
* What is `.gitignore`?
* Why do we use `.gitignore`?
* `.gitignore` patterns
* Ignoring folders
* Ignoring file types
* Ignoring tracked files
* Best practices
* Interview questions

---

# Why Remove Files from Git?

Sometimes you accidentally commit files that should **not** be tracked.

Examples

```text
.env

node_modules/

logs/

dist/

coverage/

secret.json
```

These files should usually not be stored in Git.

Git provides two ways to handle this:

* Remove the file from Git
* Ignore it so Git never tracks it again

---

# What is `git rm`?

`git rm` removes a file from:

* Working Directory
* Staging Area
* Git Repository

Unlike manually deleting a file,

`git rm` also stages the deletion.

---

# Syntax

```bash
git rm <file-name>
```

---

# Example

Suppose

```text
Project

server.js

app.js

config.js
```

Run

```bash
git rm config.js
```

Git

✔ Deletes the file

✔ Stages the deletion

Check

```bash
git status
```

Output

```text
deleted: config.js
```

Now commit

```bash
git commit -m "Removed config.js"
```

---

# Normal Delete vs `git rm`

Suppose you manually delete

```text
config.js
```

using your file manager or terminal.

Git notices that the file is missing.

```bash
git status
```

Output

```text
deleted: config.js
```

You still need to stage the deletion.

```bash
git add config.js
```

or

```bash
git rm config.js
```

The difference is:

| Manual Delete      | `git rm`                    |
| ------------------ | --------------------------- |
| Deletes file only  | Deletes and stages deletion |
| Requires `git add` | Already staged              |

---

# Removing a File but Keeping It Locally

Sometimes you want Git to stop tracking a file,

but you still want the file on your computer.

Example

```text
.env
```

You need it locally,

but it should never be pushed.

Use

```bash
git rm --cached .env
```

---

# What Does `--cached` Mean?

`--cached` removes the file **only from Git's tracking**.

It does **not** delete the file from your computer.

---

# Example

Before

```text
.env
```

Tracked by Git.

Run

```bash
git rm --cached .env
```

Result

```text
.env

✓ Still exists locally

✗ No longer tracked by Git
```

---

# Why Use `git rm --cached`?

Very common example

You accidentally committed

```text
.env
```

containing

```text
DATABASE_PASSWORD

JWT_SECRET

API_KEY
```

These secrets should never be stored in Git.

Run

```bash
git rm --cached .env
```

Then add

```text
.env
```

to

```text
.gitignore
```

Commit

Push

Now Git stops tracking it.

---

# Removing an Entire Folder

## Syntax

```bash
git rm -r folder-name
```

Example

```bash
git rm -r assets
```

Git removes the complete folder recursively.

---

# What is `.gitignore`?

`.gitignore` is a special file that tells Git

which files and folders should **not** be tracked.

---

# Why Do We Need `.gitignore`?

Imagine a Node.js project.

```text
node_modules/

.env

dist/

coverage/

logs/
```

These files

* can be regenerated
* are machine-specific
* may contain secrets
* increase repository size

Instead of committing them,

add them to `.gitignore`.

---

# Example `.gitignore`

```text
node_modules/

.env

dist/

coverage/

logs/
```

Git ignores them.

---

# Ignoring a Single File

```text
config.json
```

Add

```text
config.json
```

to

```text
.gitignore
```

---

# Ignoring a Folder

```text
uploads/
```

Add

```text
uploads/
```

Everything inside the folder is ignored.

---

# Ignoring File Types

Ignore every log file

```text
*.log
```

Ignore every environment file

```text
*.env
```

Ignore all PDF files

```text
*.pdf
```

---

# Ignore All `.env` Files

```text
.env

.env.local

.env.production

.env.development
```

Pattern

```text
.env*
```

---

# Ignore Every Log File

```text
server.log

error.log

app.log
```

Pattern

```text
*.log
```

---

# Ignore Build Folder

```text
dist/
```

Everything inside

```text
dist/
```

is ignored.

---

# Common `.gitignore` for Node.js

```text
node_modules/

.env

dist/

coverage/

logs/

*.log

.cache/

.vscode/

.DS_Store
```

---

# Important Rule

`.gitignore`

only affects

**untracked files**.

If a file is already tracked,

adding it to `.gitignore`

does **not** stop Git from tracking it.

---

# Example

Suppose

```text
.env
```

was already committed.

Later,

you add

```text
.env
```

to

```text
.gitignore
```

Git still tracks it.

Why?

Because it was already committed.

---

# Correct Solution

Step 1

```bash
git rm --cached .env
```

---

Step 2

Add

```text
.env
```

to

```text
.gitignore
```

---

Step 3

Commit

```bash
git commit -m "Stop tracking .env"
```

Now Git ignores future changes.

---

# Complete Example

Project

```text
node_modules/

.env

server.js

package.json
```

Create

```text
.gitignore
```

```text
node_modules/

.env
```

Run

```bash
git rm --cached .env
```

Commit

```bash
git add .

git commit -m "Added .gitignore"
```

Done.

---

# Real-World Scenario

You accidentally pushed

```text
.env
```

to GitHub.

It contains

* Database Password
* JWT Secret
* Stripe Secret Key

Immediately

```bash
git rm --cached .env
```

Update

```text
.gitignore
```

Commit

Push

⚠️ **Important:** This only stops future tracking. The secret still exists in the repository's history. If sensitive credentials were pushed, **rotate (change) those secrets immediately**, and if necessary, rewrite Git history using tools such as `git filter-repo` or the BFG Repo-Cleaner.

---

# Common Mistakes

## Mistake 1

Thinking

```text
.gitignore
```

removes already tracked files.

It does not.

---

## Mistake 2

Deleting

```text
.env
```

using

```bash
git rm .env
```

when you wanted to keep it locally.

Use

```bash
git rm --cached .env
```

instead.

---

## Mistake 3

Committing

```text
node_modules/
```

Never commit it.

---

## Mistake 4

Ignoring files after they have already been pushed.

Always configure

```text
.gitignore
```

before your first commit whenever possible.

---

# Best Practices

* Create a `.gitignore` file at the start of every project.
* Never commit secrets such as API keys or passwords.
* Use `git rm --cached` to stop tracking files while keeping them locally.
* Keep `.gitignore` clean and organized.
* Use language-specific `.gitignore` templates (for example, Node.js, Python, Java).

---

# Interview Questions

## 1. What is `git rm`?

`git rm` removes a file from the Working Directory and stages its deletion.

---

## 2. What is the difference between `git rm` and manually deleting a file?

| Manual Delete         | `git rm`                        |
| --------------------- | ------------------------------- |
| Deletes the file only | Deletes and stages the deletion |
| Requires `git add`    | Already staged                  |

---

## 3. What does `git rm --cached` do?

It removes a file from Git's tracking while keeping the file on your local computer.

---

## 4. What is `.gitignore`?

A special file that tells Git which files and folders should not be tracked.

---

## 5. Does `.gitignore` affect already tracked files?

No.

It only affects untracked files.

---

## 6. How do you stop tracking an already committed `.env` file?

```bash
git rm --cached .env
```

Then add `.env` to `.gitignore`.

---

## 7. How do you ignore every `.log` file?

```text
*.log
```

---

## 8. How do you ignore an entire folder?

```text
folder-name/
```

Example

```text
node_modules/
```

---

## 9. Why should `node_modules/` be ignored?

Because it is large and can be recreated by running:

```bash
npm install
```

---

## 10. If you accidentally pushed secrets to GitHub, is `git rm --cached` enough?

No.

It only prevents future tracking. You should also rotate the exposed secrets and consider rewriting the repository history if the credentials are sensitive.

---

# Quick Revision

| Command / Pattern      | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `git rm file`          | Delete a file and stage the deletion     |
| `git rm --cached file` | Stop tracking a file but keep it locally |
| `git rm -r folder`     | Remove a folder recursively              |
| `.gitignore`           | Ignore files and folders                 |
| `*.log`                | Ignore all log files                     |
| `.env*`                | Ignore all environment files             |
| `node_modules/`        | Ignore the Node.js dependencies folder   |

---

# Chapter Summary

* `git rm` deletes a file and stages its removal.
* `git rm --cached` stops tracking a file without deleting it locally.
* `.gitignore` prevents Git from tracking specified files and folders.
* `.gitignore` does **not** affect files that are already tracked.
* Use `git rm --cached` before adding an already tracked file to `.gitignore`.
* Always exclude sensitive files like `.env` and generated directories like `node_modules/` from your repository.
* If secrets are accidentally committed, remove them from tracking, rotate them immediately, and consider cleaning the repository history.












# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 14 – Git Revert

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Git Revert?
* Why do we use Revert?
* `git revert`
* Reverting the latest commit
* Reverting older commits
* Reverting multiple commits
* Reverting merge commits
* `git revert --no-commit`
* Difference between Revert and Reset
* Best practices
* Interview questions

---

# What is Git Revert?

`git revert` is used to **undo the changes introduced by a commit** by creating a **new commit**.

Unlike `git reset`, it **does not remove commits from history**.

Instead, Git creates another commit that reverses the changes.

---

# Why Do We Need Git Revert?

Suppose you pushed a commit to GitHub.

```text
A

↓

B

↓

C
```

Commit **C** introduced a bug.

Since other developers may already have pulled commit **C**, deleting it with `git reset` would rewrite history and cause problems.

Instead, use:

```bash
git revert C
```

Git creates a new commit.

```text
A

↓

B

↓

C

↓

D (Reverts C)
```

Now the project behaves as if **C** never happened, but the history remains intact.

---

# Reset vs Revert

This is one of the most common interview questions.

| Git Reset                                       | Git Revert                                         |
| ----------------------------------------------- | -------------------------------------------------- |
| Removes commits from the current branch history | Creates a new commit that undoes an earlier commit |
| Rewrites history                                | Preserves history                                  |
| Risky on shared branches                        | Safe on shared branches                            |
| Best for local changes                          | Best for public/shared repositories                |

---

# How Git Revert Works

Suppose you added this code.

```javascript
const PORT = 5000;
```

Later you realize it was wrong.

Run

```bash
git revert <commit-id>
```

Git creates another commit that removes that change.

```javascript
// PORT = 5000 removed
```

The original commit still exists in the history.

---

# Finding the Commit to Revert

First, view the commit history.

```bash
git log --oneline
```

Example

```text
c8f9213 Added Payment API

6ab83ef Fixed Login Bug

3ca8f71 Initial Commit
```

Suppose you want to undo:

```text
c8f9213
```

---

# Reverting a Specific Commit

## Syntax

```bash
git revert <commit-id>
```

Example

```bash
git revert c8f9213
```

Git opens your default editor with a commit message like:

```text
Revert "Added Payment API"
```

Save and close the editor.

Git creates the revert commit.

---

# Reverting the Latest Commit

Git provides a shortcut.

```bash
git revert HEAD
```

This reverts the latest commit.

---

# Reverting Older Commits

Suppose your history is:

```text
A

↓

B

↓

C

↓

D

↓

E
```

You can revert commit **C** without affecting commits **D** and **E**.

```bash
git revert C
```

Result

```text
A

↓

B

↓

C

↓

D

↓

E

↓

F (Reverts C)
```

Notice:

Commits **D** and **E** remain untouched.

---

# Reverting Multiple Commits

Revert several commits one after another.

```bash
git revert commit1 commit2 commit3
```

Git creates one revert commit for each original commit.

---

# Using `--no-commit`

Sometimes you want to revert multiple commits and create **one final commit**.

Use:

```bash
git revert --no-commit commit1 commit2
```

Git applies all reverse changes but does not commit them.

Now review the changes.

When ready,

```bash
git commit -m "Reverted Payment and Login APIs"
```

---

# Reverting a Merge Commit

Merge commits have **two parent commits**.

Git needs to know which parent should be considered the mainline.

Syntax

```bash
git revert -m 1 <merge-commit-id>
```

Example

```bash
git revert -m 1 a83f21b
```

### What does `-m 1` mean?

`-m` stands for **mainline**.

* `-m 1` → Treat the **first parent** (usually the branch you merged into, such as `main`) as the main branch.
* `-m 2` → Treat the **second parent** (the merged branch) as the main branch.

Without `-m`, Git cannot determine how to reverse a merge commit and will return an error.

---

# What Happens Internally?

Before

```text
A

↓

B

↓

C
```

Run

```bash
git revert C
```

After

```text
A

↓

B

↓

C

↓

D (Undo C)
```

The original commit **C** is still present.

---

# Real-World Example

You deployed a new authentication system.

```text
Commit

↓

Added JWT Authentication
```

Users cannot log in.

Instead of deleting history,

run

```bash
git revert HEAD
```

Push

```bash
git push
```

The faulty feature is removed safely, and the entire team stays in sync.

---

# Revert vs Reset (Detailed Comparison)

| Feature               | Reset | Revert |
| --------------------- | ----- | ------ |
| Removes commits       | ✅ Yes | ❌ No   |
| Creates a new commit  | ❌ No  | ✅ Yes  |
| Rewrites history      | ✅ Yes | ❌ No   |
| Safe after pushing    | ❌ No  | ✅ Yes  |
| Team-friendly         | ❌ No  | ✅ Yes  |
| Preserves audit trail | ❌ No  | ✅ Yes  |

---

# Complete Workflow

View commits

```bash
git log --oneline
```

Choose commit

```text
6ab83ef
```

Revert

```bash
git revert 6ab83ef
```

Push

```bash
git push
```

Done.

---

# Common Mistakes

## Mistake 1

Using `git reset` on a shared branch after pushing.

Use `git revert` instead.

---

## Mistake 2

Thinking `git revert` deletes commits.

It does not.

It creates a new commit.

---

## Mistake 3

Reverting commits without understanding their dependencies.

A reverted commit may have introduced code that later commits depend on.

---

## Mistake 4

Trying to revert a merge commit without using the `-m` option.

---

# Best Practices

* Prefer `git revert` for shared repositories.
* Review the changes before pushing the revert commit.
* Test the application after reverting.
* Use meaningful commit messages if you modify the default revert message.
* Understand commit dependencies before reverting older commits.

---

# Interview Questions

## 1. What is Git Revert?

Git Revert creates a new commit that reverses the changes introduced by an earlier commit.

---

## 2. What is the difference between Reset and Revert?

Reset changes commit history.

Revert preserves history by creating a new commit.

---

## 3. Is `git revert` safe after pushing commits?

Yes.

It is the recommended approach for undoing changes in shared repositories.

---

## 4. How do you revert the latest commit?

```bash
git revert HEAD
```

---

## 5. Can you revert an older commit?

Yes.

Use:

```bash
git revert <commit-id>
```

Git creates a new commit that undoes the specified commit while leaving newer commits intact.

---

## 6. What does `git revert --no-commit` do?

It applies the reverse changes without automatically creating a commit.

---

## 7. What does `-m` mean when reverting a merge commit?

It specifies the **mainline parent** of the merge commit.

---

## 8. Does Git Revert remove commits from history?

No.

It keeps all existing commits and adds a new revert commit.

---

## 9. When should you use Git Revert instead of Git Reset?

Whenever the commit has already been pushed to a shared repository.

---

## 10. Does reverting a commit change its commit hash?

The original commit remains unchanged.

Git creates a **new** commit with a different hash.

---

# Quick Revision

| Command                                  | Purpose                                  |
| ---------------------------------------- | ---------------------------------------- |
| `git revert <commit-id>`                 | Revert a specific commit                 |
| `git revert HEAD`                        | Revert the latest commit                 |
| `git revert commit1 commit2`             | Revert multiple commits                  |
| `git revert --no-commit commit1 commit2` | Apply reverse changes without committing |
| `git revert -m 1 <merge-commit-id>`      | Revert a merge commit                    |

---

# Chapter Summary

* `git revert` safely undoes changes by creating a **new commit**.
* It preserves commit history, making it ideal for shared repositories.
* Unlike `git reset`, it does not rewrite history.
* Use `git revert HEAD` to undo the latest commit.
* Use `git revert --no-commit` when combining multiple reverts into a single commit.
* Merge commits require the `-m` (mainline) option during a revert.
* In team environments, `git revert` is generally the safest way to undo already-pushed changes.















# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 15 – Git Reflog (Recovering Lost Commits)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Git Reflog?
* Why is Reflog important?
* `git reflog`
* Recovering lost commits
* Recovering after `git reset --hard`
* Recovering deleted branches
* `HEAD` movements
* Difference between `git log` and `git reflog`
* Best practices
* Interview questions

---

# What is Git Reflog?

`git reflog` records **every movement of the `HEAD` pointer** in your local repository.

Whenever you:

* Commit
* Checkout a branch
* Merge
* Reset
* Rebase
* Cherry-pick

Git records that action in the **Reference Log (Reflog)**.

Think of Reflog as Git's **local activity history**.

---

# Why Do We Need Reflog?

Imagine you accidentally run:

```bash
git reset --hard HEAD~3
```

Your last three commits disappear from the branch history.

Many beginners think the commits are gone forever.

Fortunately,

Git still remembers where `HEAD` pointed.

Using `git reflog`, you can recover those commits.

---

# Git Log vs Git Reflog

| `git log`                      | `git reflog`                                     |
| ------------------------------ | ------------------------------------------------ |
| Shows commit history           | Shows `HEAD` history                             |
| Only reachable commits         | Includes commits that may no longer be reachable |
| Shared history                 | Local history only                               |
| Doesn't record branch switches | Records checkouts, resets, rebases, etc.         |

---

# Viewing the Reflog

## Syntax

```bash
git reflog
```

---

## Example

```bash
git reflog
```

Output

```text
8a73f91 HEAD@{0}: commit: Added Payment API

4bc921d HEAD@{1}: checkout: moving from login-feature to main

d6b821f HEAD@{2}: reset: moving to HEAD~1

91f32bc HEAD@{3}: commit: Added Login API
```

Each entry represents a previous position of `HEAD`.

---

# Understanding `HEAD@{}`

Suppose your reflog is:

```text
HEAD@{0}
HEAD@{1}
HEAD@{2}
HEAD@{3}
```

Meaning:

| Entry      | Meaning           |
| ---------- | ----------------- |
| `HEAD@{0}` | Current position  |
| `HEAD@{1}` | Previous position |
| `HEAD@{2}` | Two steps ago     |
| `HEAD@{3}` | Three steps ago   |

---

# Recovering After `git reset --hard`

Suppose your history is:

```text
A

↓

B

↓

C

↓

D
```

You accidentally run:

```bash
git reset --hard B
```

Now your history becomes:

```text
A

↓

B
```

Commits `C` and `D` disappear from the branch.

---

# Step 1 – View the Reflog

```bash
git reflog
```

Example

```text
91f32bc HEAD@{1}: commit: Added Feature C

8c74da2 HEAD@{0}: reset: moving to HEAD~2
```

You find the lost commit hash:

```text
91f32bc
```

---

# Step 2 – Recover the Commit

```bash
git reset --hard 91f32bc
```

History becomes:

```text
A

↓

B

↓

C

↓

D
```

Your commits are back.

---

# Recovering Using `HEAD@{}`

Instead of using the commit hash,

you can use the reflog entry.

```bash
git reset --hard HEAD@{1}
```

Git moves `HEAD` back to that recorded position.

---

# Recovering a Deleted Branch

Suppose you delete a branch.

```bash
git branch -D login-feature
```

Later you realize the branch contained important work.

Run:

```bash
git reflog
```

Find the last commit from that branch.

Example

```text
c7d82ab HEAD@{5}: commit: Completed Login API
```

Create a new branch from that commit.

```bash
git branch login-feature c7d82ab
```

Your branch is restored.

---

# Recovering After a Bad Rebase

Suppose you run a rebase and your history becomes incorrect.

Check:

```bash
git reflog
```

Find the entry before the rebase.

Example

```text
HEAD@{4}: rebase: checkout main
```

Restore it.

```bash
git reset --hard HEAD@{4}
```

---

# Real-World Scenario

A developer accidentally runs:

```bash
git reset --hard HEAD~5
```

Five commits disappear.

Instead of panicking,

they run:

```bash
git reflog
```

Locate the last valid commit.

Restore it.

```bash
git reset --hard <commit-id>
```

The project is recovered within minutes.

---

# What Reflog Records

Reflog records actions such as:

* Commit
* Checkout
* Reset
* Merge
* Rebase
* Cherry-pick
* Pull
* Branch switching

---

# What Reflog Does NOT Record

Reflog is:

* Local only
* Not shared with GitHub
* Not visible to teammates

Every developer has their own reflog.

---

# Reflog Expiration

Reflog entries are not stored forever.

By default:

* Reachable entries are typically kept for about **90 days**.
* Unreachable entries are typically kept for about **30 days**.

After Git's cleanup process (`git gc`), expired entries may no longer be recoverable.

---

# Common Mistakes

## Mistake 1

Thinking lost commits are immediately gone forever.

Always check:

```bash
git reflog
```

first.

---

## Mistake 2

Using `git log` to find deleted commits.

Deleted commits often disappear from `git log`.

Use:

```bash
git reflog
```

instead.

---

## Mistake 3

Running another destructive command before checking the reflog.

Recover first.

Experiment later.

---

## Mistake 4

Assuming teammates can recover your lost commits using their reflog.

Reflog exists only in your local repository.

---

# Best Practices

* Learn `git reflog` before using `git reset --hard`.
* Check the reflog before assuming work is lost.
* Copy the commit hash before performing recovery.
* Create a backup branch after recovering important commits.

Example

```bash
git branch recovery-branch <commit-id>
```

---

# Interview Questions

## 1. What is Git Reflog?

Git Reflog records every movement of the `HEAD` pointer in your local repository.

---

## 2. What is the difference between `git log` and `git reflog`?

`git log` shows commit history.

`git reflog` shows the history of `HEAD` movements, including commits that may no longer appear in `git log`.

---

## 3. Can Git Reflog recover commits after `git reset --hard`?

Yes.

As long as the reflog entry still exists, you can recover the commit.

---

## 4. How do you view the reflog?

```bash
git reflog
```

---

## 5. Can Reflog recover deleted branches?

Yes.

If the branch's commits still exist in the reflog, you can recreate the branch from one of those commit hashes.

---

## 6. Is Git Reflog shared with GitHub?

No.

It is local to your machine.

---

## 7. What does `HEAD@{2}` mean?

It refers to the position where `HEAD` was two recorded moves ago.

---

## 8. How do you restore a previous `HEAD` position?

```bash
git reset --hard HEAD@{1}
```

or

```bash
git reset --hard <commit-id>
```

---

## 9. Can Reflog entries expire?

Yes.

Older entries are eventually removed during Git's cleanup process.

---

## 10. Why is Git Reflog considered a "life saver"?

Because it often allows you to recover commits that seem to have been lost after operations like `reset`, `rebase`, or branch deletion.

---

# Quick Revision

| Command                           | Purpose                            |
| --------------------------------- | ---------------------------------- |
| `git reflog`                      | Show `HEAD` history                |
| `git reset --hard <commit-id>`    | Recover to a specific commit       |
| `git reset --hard HEAD@{1}`       | Restore a previous `HEAD` position |
| `git branch recovery <commit-id>` | Recover work into a new branch     |

---

# Chapter Summary

* `git reflog` records every movement of `HEAD` in your local repository.
* It is one of Git's most powerful recovery tools.
* Unlike `git log`, it can help recover commits that are no longer reachable from any branch.
* You can restore lost work using either a commit hash from the reflog or a `HEAD@{n}` reference.
* Reflog is local to your machine and is not shared with remote repositories like GitHub.
* Learning `git reflog` is essential before using potentially destructive commands such as `git reset --hard` or complex rebases.








# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 16 – Git Tags

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What are Git Tags?
* Why do we use Tags?
* Types of Tags
* Lightweight Tags
* Annotated Tags
* `git tag`
* `git tag -a`
* `git show`
* `git push --tags`
* `git push origin <tag>`
* `git tag -d`
* `git push origin --delete`
* Best practices
* Real-world examples
* Interview questions

---

# What is a Git Tag?

A **Git Tag** is a reference that points to a **specific commit**.

Unlike branches, tags **do not move** when new commits are added.

Tags are mainly used to mark important milestones such as:

* Software releases
* Stable versions
* Production deployments
* Hotfix releases

---

# Why Do We Need Tags?

Suppose your project evolves like this:

```text
A

↓

B

↓

C

↓

D

↓

E

↓

F
```

Commit **C** is your first stable release.

Instead of remembering its commit hash,

you create a tag.

```text
A

↓

B

↓

C ← v1.0

↓

D

↓

E

↓

F
```

Now you can always refer to version `v1.0`.

---

# Branch vs Tag

| Branch                         | Tag                                     |
| ------------------------------ | --------------------------------------- |
| Moves as new commits are added | Always points to the same commit        |
| Used for development           | Used for marking releases or milestones |
| Can receive new commits        | Cannot receive new commits              |

---

# Types of Git Tags

Git supports two types of tags.

## 1. Lightweight Tag

A lightweight tag is simply a name that points to a commit.

It stores **only the commit reference**.

---

## 2. Annotated Tag

An annotated tag stores:

* Tag name
* Tag message
* Author
* Date
* The commit reference

This is the recommended type for release versions.

---

# Viewing Existing Tags

## Syntax

```bash
git tag
```

Example

```bash
git tag
```

Output

```text
v1.0

v1.1

v2.0
```

---

# Creating a Lightweight Tag

## Syntax

```bash
git tag <tag-name>
```

Example

```bash
git tag v1.0
```

Git creates the tag on the current commit.

---

# Creating an Annotated Tag

## Syntax

```bash
git tag -a <tag-name> -m "message"
```

Example

```bash
git tag -a v2.0 -m "Second Stable Release"
```

Git stores additional metadata.

---

# Tagging an Older Commit

First view the commit history.

```bash
git log --oneline
```

Example

```text
c91d821 Added Payment API

a82d731 Added Login API

2ab7131 Initial Commit
```

Suppose you want to tag

```text
a82d731
```

Run

```bash
git tag -a v1.1 a82d731 -m "Login Release"
```

Now `v1.1` points to that older commit.

---

# Viewing Tag Information

Use

```bash
git show <tag-name>
```

Example

```bash
git show v2.0
```

Output

```text
Tag: v2.0

Author: Sujal

Message:

Second Stable Release

Commit:

Added Payment API
```

---

# Checking Out a Tag

You can inspect the project as it existed when the tag was created.

```bash
git checkout v1.0
```

Git moves `HEAD` to the tagged commit.

This places you in **Detached HEAD** state.

---

# What is Detached HEAD?

Normally,

`HEAD` points to a branch.

```text
HEAD

↓

main

↓

Latest Commit
```

After

```bash
git checkout v1.0
```

`HEAD` points directly to a commit.

```text
HEAD

↓

Commit C
```

You are **not on a branch**.

If you create new commits here and switch away without creating a branch, those commits can become difficult to find later.

If you want to continue development from a tag,

create a branch.

```bash
git switch -c release-fix
```

---

# Pushing Tags to GitHub

Unlike commits,

tags are **not pushed automatically**.

---

## Push One Tag

```bash
git push origin v1.0
```

Only `v1.0` is uploaded.

---

## Push All Tags

```bash
git push --tags
```

Every local tag is uploaded.

---

# Deleting a Local Tag

## Syntax

```bash
git tag -d <tag-name>
```

Example

```bash
git tag -d v1.0
```

Only the **local** tag is removed.

---

# Deleting a Remote Tag

Deleting a local tag does **not** delete it from GitHub.

Remove it from the remote repository using:

```bash
git push origin --delete v1.0
```

---

# Renaming a Tag

Git does not have a direct **rename** command.

Instead:

Step 1

Create a new tag.

```bash
git tag -a v2.0 -m "Stable Release"
```

Step 2

Delete the old tag.

```bash
git tag -d old-tag
```

Step 3

Push the new tag.

```bash
git push origin v2.0
```

---

# Real-World Example

A company releases software.

```text
v1.0

↓

v1.1

↓

v2.0

↓

v2.1
```

Each release is marked with a tag.

When a customer reports a bug in

```text
v1.1
```

developers can immediately check out that version.

```bash
git checkout v1.1
```

Investigate the issue,

then create a bug-fix branch if needed.

---

# Semantic Versioning

Most projects use **Semantic Versioning (SemVer)**.

Format:

```text
MAJOR.MINOR.PATCH
```

Example

```text
v2.4.1
```

Meaning:

* **MAJOR (2):** Breaking changes
* **MINOR (4):** New features, backward compatible
* **PATCH (1):** Bug fixes only

Examples:

```text
v1.0.0

v1.1.0

v1.2.0

v1.2.1

v2.0.0
```

---

# Common Mistakes

## Mistake 1

Thinking tags automatically move like branches.

They never move.

---

## Mistake 2

Forgetting to push tags.

```bash
git push
```

does **not** push tags.

---

## Mistake 3

Developing while in Detached HEAD state.

Always create a branch before making new commits.

---

## Mistake 4

Deleting only the local tag and assuming it is removed from GitHub.

Remote tags must be deleted separately.

---

# Best Practices

* Use **annotated tags** for releases.
* Follow Semantic Versioning.
* Give meaningful tag messages.
* Push release tags to the remote repository.
* Avoid modifying published release tags unless absolutely necessary.

---

# Interview Questions

## 1. What is a Git Tag?

A Git Tag is a reference to a specific commit, typically used to mark releases or important milestones.

---

## 2. What is the difference between a branch and a tag?

A branch moves as new commits are added.

A tag always points to the same commit.

---

## 3. What are the two types of tags?

* Lightweight Tag
* Annotated Tag

---

## 4. Which type of tag is recommended for releases?

Annotated Tags.

---

## 5. How do you create an annotated tag?

```bash
git tag -a v1.0 -m "First Stable Release"
```

---

## 6. How do you list all tags?

```bash
git tag
```

---

## 7. How do you push all tags?

```bash
git push --tags
```

---

## 8. What happens when you check out a tag?

Git places you in a **Detached HEAD** state.

---

## 9. How do you delete a local tag?

```bash
git tag -d v1.0
```

---

## 10. How do you delete a remote tag?

```bash
git push origin --delete v1.0
```

---

# Quick Revision

| Command                                    | Purpose                         |
| ------------------------------------------ | ------------------------------- |
| `git tag`                                  | List all tags                   |
| `git tag v1.0`                             | Create a lightweight tag        |
| `git tag -a v1.0 -m "message"`             | Create an annotated tag         |
| `git tag -a v1.0 <commit-id> -m "message"` | Tag a specific commit           |
| `git show v1.0`                            | Show tag details                |
| `git checkout v1.0`                        | Check out a tag (Detached HEAD) |
| `git push origin v1.0`                     | Push one tag                    |
| `git push --tags`                          | Push all tags                   |
| `git tag -d v1.0`                          | Delete a local tag              |
| `git push origin --delete v1.0`            | Delete a remote tag             |

---

# Chapter Summary

* Git Tags are fixed references to specific commits and are commonly used to mark releases.
* Unlike branches, tags do not move as new commits are added.
* Git supports **Lightweight Tags** and **Annotated Tags**, with annotated tags being the preferred choice for production releases.
* Tags are not pushed automatically; use `git push origin <tag>` or `git push --tags`.
* Checking out a tag places Git in a **Detached HEAD** state, so create a new branch before making changes.
* Following Semantic Versioning (`MAJOR.MINOR.PATCH`) helps organize and communicate software releases clearly.






Got it. From this chapter onward, I'll keep the notes **short, revision-friendly, and interview-focused**. I'll explain only the important concepts without unnecessary details.

---

# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 17 – Git Rebase

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is Git Rebase?
* Why use Rebase?
* `git rebase`
* Interactive Rebase
* Rebase vs Merge
* Rebase Conflicts
* `git rebase --continue`
* `git rebase --abort`

---

# What is Git Rebase?

`git rebase` moves or reapplies commits from one branch onto another, creating a **clean and linear commit history**.

Instead of creating a merge commit, Git replays your commits on top of another branch.

---

# Merge vs Rebase

### Merge

```text
A → B → C (main)
     \
      D → E (feature)

↓

A → B → C → M
     \     /
      D → E
```

Creates a **Merge Commit (M)**.

---

### Rebase

```text
A → B → C (main)
     \
      D → E (feature)

↓

A → B → C → D' → E'
```

No merge commit.

Commits `D` and `E` are recreated with new commit hashes.

---

# Why Use Rebase?

* Cleaner Git history
* Easier to read logs
* Reduces unnecessary merge commits
* Common before creating a Pull Request

---

# Basic Syntax

```bash
git switch feature
git rebase main
```

This replays all commits from `feature` on top of the latest `main`.

---

# Rebase Conflict

If Git finds conflicting changes:

```bash
git rebase main
```

Resolve the conflict, then run:

```bash
git add .
git rebase --continue
```

To cancel the rebase:

```bash
git rebase --abort
```

---

# Interactive Rebase

Used to edit commit history.

```bash
git rebase -i HEAD~3
```

This opens the last **3 commits**.

You can:

* `pick` → Keep commit
* `reword` → Change commit message
* `edit` → Modify commit
* `squash` → Combine commits
* `drop` → Delete commit

---

# Example

Before

```text
Added Login
Fixed Login
Updated Login
```

After

```text
Added Complete Login Module
```

Using:

```bash
git rebase -i HEAD~3
```

with `squash`.

---

# Rebase vs Merge

| Merge                    | Rebase                   |
| ------------------------ | ------------------------ |
| Creates merge commit     | No merge commit          |
| Preserves history        | Rewrites history         |
| Safe for shared branches | Best for local branches  |
| Easier for beginners     | Produces cleaner history |

---

# ⚠️ Important Rule

**Never rebase commits that have already been pushed to a shared branch**, unless your team specifically expects that workflow.

Rebasing rewrites commit history, which can cause problems for collaborators.

---

# Best Practices

* Rebase local feature branches before merging.
* Use Merge for shared/public branches.
* Resolve conflicts carefully.
* Use Interactive Rebase to clean up commits before pushing.

---

# Interview Questions

### 1. What is Git Rebase?

It reapplies commits on top of another branch to create a linear history.

---

### 2. What is the difference between Merge and Rebase?

Merge creates a merge commit.

Rebase rewrites commits to produce a clean history.

---

### 3. Does Rebase change commit hashes?

Yes. Rebased commits receive **new commit hashes**.

---

### 4. How do you continue a rebase after resolving conflicts?

```bash
git rebase --continue
```

---

### 5. How do you cancel a rebase?

```bash
git rebase --abort
```

---

### 6. What is Interactive Rebase?

A tool to edit, reorder, squash, or delete commits before sharing them.

---

# Quick Revision

| Command                 | Purpose                              |
| ----------------------- | ------------------------------------ |
| `git rebase main`       | Rebase current branch onto `main`    |
| `git rebase -i HEAD~3`  | Interactive rebase of last 3 commits |
| `git rebase --continue` | Continue after resolving conflicts   |
| `git rebase --abort`    | Cancel the rebase                    |

---

# Chapter Summary

* `git rebase` creates a **clean, linear commit history** by replaying commits on top of another branch.
* It rewrites commit history, so commit hashes change.
* Use `git rebase --continue` after resolving conflicts and `git rebase --abort` to cancel.
* Interactive Rebase (`git rebase -i`) is useful for cleaning up commits before pushing.
* Avoid rebasing commits that have already been shared with other developers.







# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 18 – GitHub Pull Requests (PR)

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is a Pull Request (PR)?
* Why use Pull Requests?
* PR Workflow
* Code Review
* Approve, Request Changes, Merge

---

# What is a Pull Request?

A **Pull Request (PR)** is a request to merge changes from one branch into another.

It allows team members to **review, discuss, and approve** code before merging.

---

# Why Use Pull Requests?

* Code Review
* Better code quality
* Team collaboration
* Catch bugs before merging
* Maintain project standards

---

# Pull Request Workflow

```text
main
   │
   ├── Create Feature Branch
   │
   ├── Write Code
   │
   ├── Commit Changes
   │
   ├── Push Branch
   │
   ├── Create Pull Request
   │
   ├── Code Review
   │
   ├── Approve
   │
   └── Merge into main
```

---

# Step 1: Create a Branch

```bash
git switch -c login-feature
```

---

# Step 2: Commit Changes

```bash
git add .
git commit -m "Added Login API"
```

---

# Step 3: Push Branch

```bash
git push -u origin login-feature
```

---

# Step 4: Create Pull Request

On GitHub:

* Open the repository.
* Click **Compare & Pull Request**.
* Add a title and description.
* Submit the PR.

---

# Step 5: Code Review

Reviewers can:

* ✅ Approve
* 💬 Comment
* ❌ Request Changes

---

# Step 6: Merge the PR

Once approved:

* Click **Merge Pull Request**
* Confirm Merge
* Delete the feature branch (optional but recommended)

---

# Types of Merge on GitHub

### 1. Create a Merge Commit

* Preserves complete history.
* Creates a merge commit.

---

### 2. Squash and Merge

* Combines all commits into **one commit**.
* Keeps history clean.

Example:

Before:

```text
Added Login UI
Fixed Login Bug
Updated Validation
```

After:

```text
Added Login Feature
```

---

### 3. Rebase and Merge

* Rebases commits onto the target branch.
* No merge commit is created.
* Produces a linear history.

---

# Best Practices

* Create one PR per feature.
* Keep PRs small and focused.
* Write meaningful PR titles.
* Resolve conflicts before requesting review.
* Delete merged branches.

---

# Interview Questions

### 1. What is a Pull Request?

A Pull Request is a request to merge one branch into another after review.

---

### 2. Why do companies use Pull Requests?

For code review, collaboration, and maintaining code quality.

---

### 3. Can you merge without a Pull Request?

Yes, technically you can merge locally or push directly if you have permission. However, most teams require Pull Requests for review and approval before changes reach shared branches like `main`.

---

### 4. What are the three merge options in GitHub?

* Merge Commit
* Squash and Merge
* Rebase and Merge

---

### 5. What is the benefit of Squash and Merge?

It combines multiple commits into a single clean commit.

---

# Quick Revision

| Step | Action                |
| ---- | --------------------- |
| 1    | Create Feature Branch |
| 2    | Write Code            |
| 3    | Commit Changes        |
| 4    | Push Branch           |
| 5    | Create Pull Request   |
| 6    | Code Review           |
| 7    | Merge                 |
| 8    | Delete Branch         |

---

# Chapter Summary

* A **Pull Request (PR)** allows developers to propose changes before merging them into another branch.
* PRs enable **code reviews**, discussions, and approvals.
* GitHub provides three merge strategies: **Merge Commit**, **Squash and Merge**, and **Rebase and Merge**.
* Keeping PRs small, focused, and well-described makes reviews faster and improves code quality.
* In professional teams, most changes to the `main` branch go through a Pull Request.





# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 19 – GitHub Fork

---

# 🎯 Learning Objectives

After completing this chapter, you will understand:

* What is a Fork?
* Fork vs Clone
* Why do we use Forks?
* Contributing to Open Source
* Syncing a Fork
* Upstream Repository

---

# What is a Fork?

A **Fork** is a personal copy of someone else's GitHub repository under your own GitHub account.

It allows you to make changes **without affecting the original repository**.

---

# Why Use a Fork?

* Contribute to Open Source
* Experiment safely
* Keep your own copy of a project
* Submit Pull Requests to the original repository

---

# Fork Workflow

```text
Original Repository
        │
      Fork
        │
      Clone
        │
   Make Changes
        │
      Commit
        │
      Push
        │
Create Pull Request
        │
Original Repository
```

---

# Fork vs Clone

| Fork                               | Clone                           |
| ---------------------------------- | ------------------------------- |
| Creates a copy on GitHub           | Creates a copy on your computer |
| Used for open-source contributions | Used for local development      |
| Done on GitHub                     | Done using Git                  |

---

# Step 1: Fork Repository

On GitHub:

* Open the repository.
* Click **Fork**.
* GitHub creates a copy in your account.

---

# Step 2: Clone Your Fork

```bash
git clone https://github.com/your-username/project.git
```

---

# Step 3: Make Changes

```bash
git switch -c fix-login
```

Edit files and commit.

```bash
git add .
git commit -m "Fixed login validation"
```

---

# Step 4: Push Changes

```bash
git push origin fix-login
```

---

# Step 5: Create Pull Request

Open your fork on GitHub.

Click **Compare & Pull Request**.

Submit the PR to the **original repository**.

---

# What is Upstream?

The **upstream** remote refers to the **original repository** that you forked from.

Example:

```bash
git remote add upstream https://github.com/original-owner/project.git
```

Check remotes:

```bash
git remote -v
```

Example:

```text
origin    https://github.com/your-username/project.git

upstream  https://github.com/original-owner/project.git
```

---

# Sync Your Fork

Fetch updates from the original repository:

```bash
git fetch upstream
```

Merge them into your local `main` branch:

```bash
git switch main
git merge upstream/main
```

Then push the updated branch to your fork:

```bash
git push origin main
```

---

# Best Practices

* Never commit directly to `main`; create a feature branch.
* Keep your fork updated with the upstream repository.
* Submit one Pull Request per feature or fix.
* Follow the project's contribution guidelines.

---

# Interview Questions

### 1. What is a GitHub Fork?

A Fork is your own GitHub copy of another repository.

---

### 2. What is the difference between Fork and Clone?

Fork creates a copy on GitHub.

Clone creates a copy on your local machine.

---

### 3. What is `upstream`?

The original repository from which you created your fork.

---

### 4. Why is Fork mainly used?

To contribute to open-source projects without direct write access.

---

### 5. How do you keep your fork updated?

```bash
git fetch upstream
git merge upstream/main
git push origin main
```

---

# Quick Revision

| Command                         | Purpose                 |
| ------------------------------- | ----------------------- |
| `git clone <url>`               | Clone your fork         |
| `git remote add upstream <url>` | Add original repository |
| `git fetch upstream`            | Fetch latest changes    |
| `git merge upstream/main`       | Merge upstream changes  |
| `git push origin main`          | Update your fork        |

---

# Chapter Summary

* A **Fork** is a GitHub copy of another repository under your account.
* It is commonly used for **open-source contributions**.
* `origin` points to your fork, while `upstream` points to the original repository.
* Keep your fork synchronized by fetching and merging changes from `upstream`.
* The typical workflow is: **Fork → Clone → Create Branch → Commit → Push → Pull Request**.






























<!-- ************************************************************************************************************************* -->















# 📘 Git & GitHub Complete Notes (Backend Developer Edition)

# Chapter 20 – Most Important Git Commands (Quick Revision)

---

# 🎯 Learning Objectives

* Revise the most commonly used Git commands.
* Know when to use each command.
* Prepare for interviews and daily development.

---

# Repository

| Command           | Purpose                      |
| ----------------- | ---------------------------- |
| `git init`        | Create a new Git repository  |
| `git clone <url>` | Clone an existing repository |
| `git status`      | Show repository status       |

---

# Configuration

| Command                                              | Purpose                |
| ---------------------------------------------------- | ---------------------- |
| `git config --global user.name "Name"`               | Set username           |
| `git config --global user.email "email@example.com"` | Set email              |
| `git config --list`                                  | View Git configuration |

---

# Staging & Commit

| Command                    | Purpose                        |
| -------------------------- | ------------------------------ |
| `git add .`                | Stage all changes              |
| `git add <file>`           | Stage one file                 |
| `git commit -m "message"`  | Create a commit                |
| `git commit -am "message"` | Stage tracked files and commit |

---

# History

| Command             | Purpose               |
| ------------------- | --------------------- |
| `git log`           | View commit history   |
| `git log --oneline` | Short commit history  |
| `git reflog`        | View HEAD history     |
| `git diff`          | View unstaged changes |

---

# Branching

| Command                  | Purpose                  |
| ------------------------ | ------------------------ |
| `git branch`             | List branches            |
| `git branch <name>`      | Create a branch          |
| `git switch <branch>`    | Switch branch            |
| `git switch -c <branch>` | Create and switch branch |
| `git branch -d <branch>` | Delete merged branch     |

---

# Merge & Rebase

| Command                 | Purpose                           |
| ----------------------- | --------------------------------- |
| `git merge <branch>`    | Merge a branch                    |
| `git rebase main`       | Rebase current branch onto `main` |
| `git rebase --continue` | Continue rebase                   |
| `git rebase --abort`    | Cancel rebase                     |

---

# Remote Repository

| Command                       | Purpose                   |
| ----------------------------- | ------------------------- |
| `git remote -v`               | View remotes              |
| `git remote add origin <url>` | Add remote                |
| `git push`                    | Push commits              |
| `git push -u origin main`     | First push & set upstream |
| `git pull`                    | Fetch and merge changes   |
| `git fetch`                   | Fetch changes only        |

---

# Undo Changes

| Command                       | Purpose                         |
| ----------------------------- | ------------------------------- |
| `git restore <file>`          | Restore file                    |
| `git restore --staged <file>` | Unstage file                    |
| `git reset --soft HEAD~1`     | Undo commit, keep staged        |
| `git reset --mixed HEAD~1`    | Undo commit, unstage changes    |
| `git reset --hard HEAD~1`     | Undo commit and discard changes |
| `git revert <commit>`         | Safely undo a commit            |

---

# Stash

| Command           | Purpose                  |
| ----------------- | ------------------------ |
| `git stash`       | Save changes temporarily |
| `git stash list`  | View stashes             |
| `git stash apply` | Restore stash            |
| `git stash pop`   | Restore and remove stash |
| `git stash clear` | Delete all stashes       |

---

# Cherry-Pick

| Command                      | Purpose                 |
| ---------------------------- | ----------------------- |
| `git cherry-pick <commit>`   | Copy a commit           |
| `git cherry-pick --continue` | Continue after conflict |
| `git cherry-pick --abort`    | Cancel cherry-pick      |

---

# Tags

| Command                        | Purpose              |
| ------------------------------ | -------------------- |
| `git tag`                      | List tags            |
| `git tag -a v1.0 -m "message"` | Create annotated tag |
| `git push --tags`              | Push all tags        |
| `git tag -d v1.0`              | Delete local tag     |

---

# Remove Files

| Command                  | Purpose              |
| ------------------------ | -------------------- |
| `git rm <file>`          | Remove file          |
| `git rm --cached <file>` | Stop tracking file   |
| `.gitignore`             | Ignore files/folders |

---

# Daily Git Workflow

```bash
git pull

git switch -c feature-name

# Write code

git add .

git commit -m "Added feature"

git push -u origin feature-name

# Create Pull Request

# Merge PR

git switch main

git pull

git branch -d feature-name
```

---

# Top 15 Interview Questions

### 1. Difference between Git and GitHub?

* **Git:** Version Control System.
* **GitHub:** Cloud platform that hosts Git repositories.

---

### 2. Difference between Fetch and Pull?

* `git fetch` → Downloads changes only.
* `git pull` → Downloads and merges changes.

---

### 3. Difference between Reset and Revert?

* `reset` → Rewrites history.
* `revert` → Creates a new commit that undoes changes.

---

### 4. Difference between Merge and Rebase?

* Merge → Creates a merge commit.
* Rebase → Creates a linear history.

---

### 5. Difference between Fork and Clone?

* Fork → GitHub copy.
* Clone → Local copy.

---

### 6. What is HEAD?

A pointer to the current commit/branch.

---

### 7. What is Staging Area?

A temporary area where changes are prepared before committing.

---

### 8. What is Detached HEAD?

`HEAD` points directly to a commit instead of a branch.

---

### 9. What is Git Reflog?

A history of all `HEAD` movements, useful for recovering lost work.

---

### 10. What is Cherry-Pick?

Copies specific commits from one branch to another.

---

### 11. What is Git Stash?

Temporarily saves uncommitted changes.

---

### 12. What is a Pull Request?

A request to merge code after review.

---

### 13. What is Upstream?

The original repository that your fork tracks.

---

### 14. Why use `.gitignore`?

To prevent unnecessary or sensitive files from being tracked.

---

### 15. What is the safest way to undo a pushed commit?

Use:

```bash
git revert <commit-id>
```

---

# Final Revision Tips

✅ Practice every command in a demo repository.

✅ Understand **why** each command is used, not just its syntax.

✅ Learn the differences between commonly confused commands:

* Merge vs Rebase
* Reset vs Revert
* Fetch vs Pull
* Fork vs Clone
* Apply vs Pop

✅ For interviews, be ready to explain **real-world scenarios**, not just definitions.

---

# Book Summary

You have now covered:

* ✅ Git Basics
* ✅ Repository Management
* ✅ Branching & Merging
* ✅ GitHub & Remote Repositories
* ✅ Stash, Cherry-Pick, Revert, Reflog
* ✅ Rebase
* ✅ Tags
* ✅ Pull Requests
* ✅ Forks
* ✅ Daily Workflow
* ✅ Interview Questions

This covers **90–95% of the Git knowledge** used by most software engineers in day-to-day development and technical interviews. The remaining advanced topics (like Git hooks, submodules, worktrees, LFS, and advanced conflict resolution) are useful in specific scenarios but are not required for most backend developer roles.
