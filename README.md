# The Fotosythese Study Tracker 🌿✨
> This project's goal was to train my TypeScript skills while having some fun coding.
> I am currently studying for Vestibular and I thought it would be funny to do a study time tracker just like the famous _Forest_ app.

In this website you can track your study time while watching little plants grow on the hill. The plants can only produce Oxigen during the day which starts only when you start tracking your time. So if you stop studying, the night will come and there will be no more O2 produced. And what happens with no more O2? _-Nothing, because I haven't programmed this part_, but the idea is that the plants will be dead after a while.

**🤙 Check the website here: https://milenafs.github.io/fotosythese-study-tracker/**

## Features (v1.0.0) 🌟
- Counter
- 19 types of plants
- Day/night mode

## Technologies 🪄
Vite, TypeScript, HTML, CSS.

## Issues 🔴
### 1. How to deploy a vite + ts project?
Here are the sources that helped me a lot:
- https://www.youtube.com/watch?v=Y3yCB7CfjF4&ab_channel=Doug%27sCodingCorner
- https://vitejs.dev/guide/static-deploy.html
  
Basicaly, you have to create a `.github\workflows\deploy.yml` and a `vite.config.ts` file.

### 2. Some images weren't loading on the github page...
Solution: https://vitejs.dev/guide/assets.html

The images that weren't loading were not imported directly on the code but just being referenced, which made them not load properly after the deployment. The solution is that everything that you are going to use after the building by a reference path, which means that they are not being imported through `import {} from "";` or `url()`, you should put them inside the `/public` folder. By doing this, the code can find them by their name you have put on the reference path. 

In other words, the reason why the project couldn't load my images properly was because the images names have changed through the building process and the code couldn't find them by the path that I've referenced and after putting them inside the `/public` folder their names became unchanged. That is what I have understood :]

### 3. Don't rush
I was really upset that some changes that I had just committed weren't showing after the deployment on the github page. It turns out that you have to wait a little bit to actually see the updates after the deployment... In a nutshell, be patient.

## Links ⛓️
- https://milenafs.github.io/fotosythese-study-tracker/
- https://www.figma.com/file/Cax4msqKDpHIRlWpEtvCgR/fotosythese-study-tracker?type=design&node-id=0%3A1&mode=design&t=bXoE9289X4HzkH1n-1
- https://vitejs.dev/guide/
