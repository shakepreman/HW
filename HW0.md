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

####Post-Commit
```
#!/bin/sh
start "" http://www.google.com
```
Video: https://www.youtube.com/watch?v=7ltFq2B6Csc&feature=youtu.be