# HW 0 Git Commands and Hooks

### Git basics

####Level 1 
```
git commit;
git commit
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/level1.PNG)

####Level 2
```
git branch bugFix;
git checkout bugFix
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/level2.PNG)

####Level 3
```
git checkout -b bugFix;
git commit;
git checkout master;
git commit;
git merge bugFix
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/level3.PNG)

####Level 4
```
git checkout -b bugFix;
git commit;
git checkout master;
git commit;
git checkout bugFix;
git rebase master
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/level4.PNG)

####Bonus Rampup Level 1
```
git checkout C4
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/bonus1.PNG)

####Bonus Rampup Level 2
```
git checkout bugFix^
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/bonus2.PNG)

####Bonus Rampup Level 3
```
git branch -f bugFix HEAD~2;
git checkout HEAD^;
git branch -f master C6
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/bonus3.PNG)

####Bonus Rampup Level 4
```
git reset HEAD^;
git checkout pushed;
git revert HEAD
```
![image](https://raw.githubusercontent.com/shakepreman/HW/master/assets/bonus4.PNG)

####Post-Commit
```
#!/bin/sh
start "" http://www.google.com
```
Video: https://www.youtube.com/watch?v=7ltFq2B6Csc&feature=youtu.be