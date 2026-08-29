
# Git & GitHub Crash Course 2025 Cheat Sheet

## What is Git?
Git is a distributed version control system that allows developers to:
- Track changes in code.
- Collaborate on projects.
- Manage multiple versions of a project.
- Work offline with a full local repository.

---

## Basic Git Workflow
1. **Working Directory**: Where you make changes to files.
2. **Staging Area**: Prepare changes for a commit.
3. **Local Repository**: Stores committed changes.
4. **Remote Repository**: Backup and share code (e.g., GitHub).

---

## Common Git Commands

### Setup
- Set username: `git config --global user.name "Your Name"`
- Set email: `git config --global user.email "your.email@example.com"`
- Default branch to `main`: `git config --global init.defaultBranch main`

### Initializing & Cloning
- Initialize a repository: `git init`
- Clone a repository: `git clone <repo_url>`

### Adding & Committing
- Check status: `git status`
- Add files to staging: `git add .` (or specific file: `git add filename`)
- Commit changes: `git commit -m "Commit message"`

### Working with Remote Repositories
- Add a remote: `git remote add origin <repo_url>`
- Push changes: `git push -u origin main`
- Pull changes: `git pull origin main`

### Branching & Merging
- Create a branch: `git checkout -b branch-name`
- Switch branches: `git checkout branch-name`
- Merge branch: `git merge branch-name`
- Delete branch:
  - Locally: `git branch -d branch-name`
  - Remotely: `git push origin --delete branch-name`

### Logs & History
- View commit history: `git log`
- Show specific commit: `git show <commit_hash>`
- Rollback changes:
  - Soft reset: `git reset <commit_hash>` (keeps changes in working directory)
  - Hard reset: `git reset --hard <commit_hash>` (removes changes)

---

## Git Ignore
Use a `.gitignore` file to exclude files or directories from tracking. Example:

```
node_modules/
*.log
.env
```

---

## Working with GitHub

### Key Features
- **Repositories**: Host Git repositories online.
- **Pull Requests**: Request to merge changes into the main codebase.
- **Issues**: Track bugs, feature requests, or tasks.
- **Actions**: Automate CI/CD pipelines.

### SSH Setup
1. Generate an SSH key:
   ```bash
   ssh-keygen -t rsa -b 4096
   ```
2. Add the key to your GitHub account.
3. Test SSH connection:
   ```bash
   ssh -T git@github.com
   ```

### Pushing Changes
1. Add a remote:
   ```bash
   git remote add origin git@github.com:yourusername/repo.git
   ```
2. Push changes:
   ```bash
   git push -u origin main
   ```

---

## Branching Workflow Example
1. Create a branch:
   ```bash
   git checkout -b feature/branch-name
   ```
2. Make changes and commit:
   ```bash
   git add .
   git commit -m "Feature: Added functionality"
   ```
3. Push the branch:
   ```bash
   git push -u origin feature/branch-name
   ```
4. Create a pull request on GitHub.
5. Merge branch into `main`.

---

## Rollback Example
- To undo changes to a specific commit:
  ```bash
  git reset --hard <commit_hash>
  ```
- Push rollback to remote:
  ```bash
  git push -f
  ```

---

## CI/CD with GitHub Actions
1. Create a `.github/workflows` directory.
2. Add a YAML file for automation:
   ```yaml
   name: Deploy to Vercel
   on:
     push:
       branches:
         - main
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Deploy to Vercel
           run: npx vercel --prod
   ```

---

## Tips
- **Commit Often**: Save milestones or completed features.
- **Use Branches**: Isolate features or bug fixes.
- **Keep Changes Small**: Easier to manage and review.

---

## Helpful Resources
- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

## Conclusion
Master these basics to use Git and GitHub effectively. Practice regularly, and explore advanced topics like rebasing, stashing, and cherry-picking as you grow.
