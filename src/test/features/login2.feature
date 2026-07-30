Feature: i want To test login functionality

Scenario Outline: I will login will invalid credentials
Given i am on the login page
When i will enter "<username>" and "<passwd>" and login
Then i should see the error message on the application.
Examples:
 |username|passwd|
 |standard_user|123345|
 |standard_user||