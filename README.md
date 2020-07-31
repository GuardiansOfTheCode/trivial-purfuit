## Development and Release Process
#### Working on your local machine

1. Get started by cloning the repository:
<br>`git clone https://github.com/GuardiansOfTheCode/trivial-purfuit.git`
2. You'll automatically be on the stage branch, so you'll need to make your own branch:
<br>`git checkout -b your-branch-name stage`
3. Code!

#### Pushing your changes to Github and merging into the `stage` branch
1. Push your local branch to GitHub:
   1. Add all changes to your branch:
   <br>`git add --all`
   2. Commit those changes:
   <br>`git commit -m "You must leave a comment here"`
   3. Push your branch to Github:
   <br>`git push origin your-branch-name`
   <br>Your branch will now show up on Github.
2. Merge changes into the stage branch:
   1. Create a pull request (PR) in the GitHub UI, ensuring that you will merge your branch into `stage`.
   2. Set the name of the PR to simply be the name of your branch, and don't bother with additional comments.
   <br>We'll be able to see comments for each of your commits, so we don't really need additional comments for the PR.
   3. **Do not merge until at least one review approval has occurred.**
   <br>Select `Squash and Merge`.
   <br>Your branch in GitHub will be deleted automatically.

#### Merging changes into the `master` branch
1. Get the most up-to-date versions of the branches from GitHub:
   1. `git checkout stage`
   <br>`git pull origin stage`
   2. `git checkout master`
   <br>`git pull origin master`
2. Create a new branch:
<br>`git checkout master`
<br>`git checkout -b your-branch-name`
3. Find the commit hash for your merge into stage. You can easily find this in the Github UI, or you can check with the following:
<br>`git checkout stage`
<br>`git log`
4. Copy that commit hash and enter the following command to add that commit to your branch:
<br>`git checkout your-branch-name`
<br>`git cherry-pick {the commit hash with no brackets}`
5. Push that branch to Github:
<br>`git push origin your-branch-name`
6. Steps to merge into master:
 1. Create a PR in the GitHub UI, ensuring that you will merge your branch into `master`
 2. Set the name of the PR to simply be the name of your branch, and don't bother with additional comments.
 3. **Do not merge until at least one review approval has occurred.**
 <br>Select `Merge Commit` this time (not `Squash and Merge`).
 <br>Your branch in GitHub will be deleted automatically.
