Redux Polls App

Simple polls app I built through a video-course. I built it by staying ahead of the videos, just following the course structure and then comparing at the end of each step.

The app uses react-router to show you four views.

-Home will list all the polls divided by polls the authenticated user has answered, and polls they havent.
-Leaderboard will show a list of all users, displaying how many polls they've created, how many they've answered, and ordering them by the sum of those 2 values.
-Create Poll will load a simple controled form.

The state is managed by redux (except for a little state that is only revelent to certain components).
The data is stored in a fake database with a fake api.