**Git & GitHub Crash Course 2025 Cheat Sheet**  
**What is Git?**  
Git is a distributed version control system that allows developers to:  
- Track changes in code.  
- Collaborate on projects.  
- Manage multiple versions of a project.  
- Work offline with a full local repository.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSNBCkLfFDZwwIgHRiywEZJWQZeZ2ao9AAD+4lyruzq+ngAA8Nr1AOH0BedHjjlfAAAAAElFTkSuQmCC)  
**Basic Git Workflow**  
1. **Working Directory**: Where you make changes to files.  
2. **Staging Area**: Prepare changes for a commit.  
3. **Local Repository**: Stores committed changes.  
4. **Remote Repository**: Backup and share code (e.g., GitHub).  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANElEQVR4nO3OQQmAABRAsSdYxKY/jbnsIF7FCt5E2BJsmZmt2gMA4C+Otbqr8+sJAACvXQ9DDAYTf614owAAAABJRU5ErkJggg==)  
**Common Git Commands**  
**Setup**  
- Set username:              git config --global user.name "Your Name"  
- Set email:                     git config --global user.email "your.email@example.com"  
- Default branch to main: git config --global init.defaultBranch main  
- View all Configurations : git config --list  
**Cloning**  
- Clone a repository itself: git clone <repo_url>  
- Clone a repository Contents only: git clone <repo_url> .  
**Adding & Committing**  
- Check status: git status  
- Add files to staging: git add . (or specific file: git add <filename>)  
- Commit changes: git commit -m "Commit message"  
   
   
**Working with Remote Repositories**  
- Initialize a repository: git init  
- Add a remote: git remote add origin <repo_url>  
- Verify remote: git remote -v  
   
- Push changes: git push -u origin main      
(origin is alias for remote Repo) (main is local branch main) (-u is setting Upstream)  
- Pull changes: git pull origin main   (main is remote branch main)  
   
   
**Branch & Merge Commands**  
- Show branches: git branch        (Show Remote branches: git branch -r)  
- Rename branch: git branch –M branch-name  
- Delete branch:  
  - Locally: git branch -d branch-name  
  - Remotely: git push origin --delete branch-name  
   
- Switch branche: git checkout branch-name  
- Create a branch: git checkout -b branch-name  
   
- Compare branch: git diff branch-name  
- Merge branch: git merge branch-name  
   
   
Removing **stale remote-tracking branches** from your local repository: git fetch --prune  
For example, suppose GitHub has:  
GitHub: main  
but your local repository still says:  
origin/main  
origin/feature  
because feature was deleted from GitHub.  
Running: git fetch --prune  
updates your knowledge of the remote:  
   
**Logs & History**  
- View commit history: git log  
- Show specific commit: git show <commit_hash>  
   
   
   
**Fixing Mistakes**  
CASE 1: Mistake is Staged (Added)  
- git reset <FIle Name> (Unstage / Unadd a file)  
- git reset                     (Unstage all files)  
   
CASE 2: Mistake is Commited  
- git reset HEAD~1                                (Reset only 1 commit)  
- Soft reset: git reset <commit_hash> (keeps changes in working directory)  
- Hard reset: git reset --hard <commit_hash> (removes changes)  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSNBCkLfFR7wwIgHRiywEZJWQZeZ2ao9AAD+4lyruzq+ngAA8Nr1AOIEBeX8aGZPAAAAAElFTkSuQmCC)  
**Git Ignore**  
Use a .gitignore file to exclude files or directories from tracking. Example:  
node_modules/  
 *.log  
 .env  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANElEQVR4nO3OMQ0AIAwAwZIgBKn1gjJsdGLBABMhuZt+/JaZIyJmAADwi9VP1NMNAABu1AaU4gUeBSGW2wAAAABJRU5ErkJggg==)  
**Working with GitHub**  
**Key Features**  
- **Repositories**: Host Git repositories online.  
- **Pull Requests**: Request to merge changes into the main codebase.  
- **Issues**: Track bugs, feature requests, or tasks.  
- **Actions**: Automate CI/CD pipelines.  
**SSH Setup**  
1. Generate an SSH key:  
2. ssh-keygen -t rsa -b 4096  
   
3. Add the key to your GitHub account.  
4. Test SSH connection:  
5. ssh -T git@github.com  
   
   
**Pushing Changes**  
1. Add a remote:  
2. git remote add origin git@github.com:yourusername/repo.git  
   
3. Push changes:  
4. git push -u origin main  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSNBCkLfFDZwwIgHRiywEZJWQZeZ2ao9AAD+4lyruzq+ngAA8Nr1AOH0BedHjjlfAAAAAElFTkSuQmCC)  
**Branching Workflow Example**  
1. Create a branch:  
2. git checkout -b feature/branch-name  
   
3. Make changes and commit:  
4. git add .  
 git commit -m "Feature: Added functionality"  
   
5. Push the branch:  
6. git push -u origin feature/branch-name  
   
7. Create a pull request on GitHub.  
8. Merge branch into main.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSNhYMEBIpD4ArCJDyywEZJWQZeZOaorAAD+4l6rrTq/ngAA8Nr+AEqmA1hl45m5AAAAAElFTkSuQmCC)  
**Rollback Example**  
- To undo changes to a specific commit:  
- git reset --hard <commit_hash>  
   
- Push rollback to remote:  
- git push -f  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsSfYxZo/jVEMYQLPJrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA4rLBc059ysnAAAAAElFTkSuQmCC)  
**CI/CD with GitHub Actions**  
1. Create a .github/workflows directory.  
2. Add a YAML file for automation:  
3. name: Deploy to Vercel  
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
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVR4nO3OMQ0AIAwAwZIgBKm1gjSMNCwYYCIkd9OP3zJzRMQMAAB+sfqJeroBAMCN2pTWBSSZVtjzAAAAAElFTkSuQmCC)  
**Tips**  
- **Commit Often**: Save milestones or completed features.  
- **Use Branches**: Isolate features or bug fixes.  
- **Keep Changes Small**: Easier to manage and review.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANElEQVR4nO3OUQmAABBAsSeILQSjXgcrmkOs4J8IW4ItM7NXZwAA/MW1Vlt1fBwBAOC9+wEukwQ+V/SggAAAAABJRU5ErkJggg==)  
**Helpful Resources**  
- [Official Git Documentation](https://git-scm.com/doc "https://git-scm.com/doc")  
- [GitHub Learning Lab](https://lab.github.com/ "https://lab.github.com/")  
- [Pro Git Book](https://git-scm.com/book/en/v2 "https://git-scm.com/book/en/v2")  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OMQ2AABAAsSNhwgJuUPYDMpnRgQU2QtIq6DIze3UGAMBf3Gu1VcfXEwAAXrseaHEEM+cJoFcAAAAASUVORK5CYII=)  
**Conclusion**  
Master these basics to use Git and GitHub effectively. Practice regularly, and explore advanced topics like rebasing, stashing, and cherry-picking as you grow.  
