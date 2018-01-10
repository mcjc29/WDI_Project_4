
![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# WDI-30 Project 4 - CharitAble

CharitAble is an app to link professionals, by the skills they would like to volunteer, with charities, who are seeking help in these areas.

There are few similar platforms and they tend to be sector or skill specific. I wanted to create a single space for individuals to share a myriad of skills and experience. Similarly, a charity may seek short-term volunteers to help with events (such as hairdressers helping the homeless) as well as advice for internal business practices.

This is a full-stack, RESTful Express app built using Node.js, MongoDB, React, SCSS and has JWT/bcrypt authentication. I enjoyed using React and found its component base very comprehensible.


##### [Visit website](https:/sdqew/)

---
<img src="https://i.imgur.com/y63ao7k.png" width="700">

###### Before wireframing, I spent time thinking and discussing what would be an achievable MVP. This planning enabled me to formulate a timetable that I stuck to throughout the project.


<img src="https://i.imgur.com/bWOXky5.png" width="700">

######  One can search by opportunity or volunteer using a multi-select search bar.

<img src="https://i.imgur.com/nIbfTyL.png" width="700">

###### Once selected, each charity has a basic profile editable only by its creator. To support and offer your skills your must be logged in.

###### The functionality for supporting a charity is handled by a controller in the back end and ensures both volunteer and charity profiles are updated.

<img src="https://i.imgur.com/Ot06hF9.png" width="700">

###### Similarly, each volunteer has a profile and if logged a the user is able to rate and comment on each skill offered. They will also be authenticated to delete there comments or change their rating.

<img src="https://i.imgur.com/BcvE1Jy.png" width="700">

###### Images are uploaded and stored using AWS.

<img src="https://i.imgur.com/fk6xHdE.png" width="700">

###### Furthermore, my knowledge of a full stack application benefited from implementing the rating functionality using Express in the back end.

---

I really enjoyed this project and am excited to develop this further to include:

- Expand the use of google maps to plot volunteer opportunities by a specified radius
- Link a volunteer's skills already specified on other sites such as LinkedIn
- Enable messaging between charity and volunteer
- Style the profiles to a professional standard
