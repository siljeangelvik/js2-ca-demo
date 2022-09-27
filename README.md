# Demo Repo for JavaScript 2: Course Assignment

####Links:
[GitHub Repo](https://github.com/siljeangelvik/js2-ca-demo)  
Netlify Website  
[Noroff: Course Assignment
](https://noroff-content.gitlab.io/feu/javascript-2/ca.html)  
[Noroff API](https://noroff-api-docs.netlify.app/about)

##Goal
To apply knowledge of JavaScript techniques to implement the front end functionality for a social media application.


##API+ 
The API you are using for this project can be found under Social EndPoints at the [Noroff API documentation.](https://noroff-api-docs.netlify.app/)


##Brief
You have been tasked with producing a new JavaScript front end client for an existing social media platform. The client application must be attractive and responsive, but you have an otherwise blank slate in terms of theme design language.

Using the provided API and API documentation, create a functioning user interface that allows for **viewing, posting, editing and deleting** social media content.

Social API routes require authorization via JWT (JSON Web Tokens). You will need to register an account and login to access your token.

In order to complete the required features you will also need to make use of GET, POST, PUT, and DELETE HTTP methods.

Using localStorage is highly recommended, especially for storing JWT tokens.

A finished project fulfills the requirements below with an easy to use and error-free user interface.

###Required Features

The following user stories are required for a passing submission:

    1. User with @noroff.no or @stud.noroff.no email can register profile
    2. Registered user can login
    3. User can view a post content feed
    4. User can filter the post content feed
    5. User can search the post content feed
    6. User can view a post content item by ID
    7. User can create a post content item
    8. User can update a post content item
    9. User can delete a post content item

####Additional Features

The following user stories are optional:

    1. User can create a comment on a post
    2. User can edit profile media
    3. User can follow/unfollow a profile
    4. User can react to a post content item

####Team Work:

This assignment allows for team work in groups of 2 students. Students forming a work group will need to coordinate closely throughout the planning, development and testing processes. By working in a pair you are expected to implement additional features.

Commit regularly and use branches to prevent conflicts with your teammate as you work on the same codebase.

###Development Process:

    1. Create or select one repository to use throughout this project.
    2. Create a js2 branch from the default master or main branch.
    3. You may use either Trello or GitHub Projects to manage your development tasks. If you are using Trello please make sure that your board is public and that a link is provided in your readme.md file. Make sure to detail tasks accurately and divide them evenly if working a group.

###Examples of overly vague tasks:

    1. Make the HTML for the post page
    2. Website Styling
    3. JavaScript for API
    4. Test the website

###Examples of detailed & accurate tasks:

    1. Create search form HTML
    2. Search form SCSS styling
    3. Filter posts function
    4. Implement search event listener

    * Review the API Guide and API Documentation.
    * Plan your approach, desired features and work strategy.
    * Implement the required features as per your work plan.

###All PRs should be made to js2 not to the default branch.

_**For example, branch search-functionality should be created from, and merged into, branch js2.**_

    1. Submit a link to your repository at the correct branch on the Moodle forum for peer review.
    Review 2 of your peers projects. (4 per team)
    2. Video Resource: Branching and providing feedback

[Video Resource: Branching and providing feedback
](https://vimeo.com/725676411/fabede2ebb)

    1. Open a Pull Request from js2 into the default branch. Contact a teacher on Discord for their feedback. If there is a particular area of concern please ensure to pass this on with your request. Add this teacher as a reviewer on your PR. Please make sure to plan for this review prior to your deadline.
    2. Implement the feedback gathered from your review, but leave the PR open.
    3. Deliver the link to this PR in Moodle. A passing submission will be approved and merged by the reviewer. This is a direct analogue of the professional review process.

##Restrictions

    * Required functionality must be implemented in original, pure JavaScript.
    * A CSS Framework may be used to build the application UI.
    * A .gitignore file must be provided including node_modules. This folder must be untracked.
    * Content posted on the API is public and associated with your identity. Be appropriate and respectful.

##Resources

[API Guide
](https://noroff-api-docs.netlify.app/social-endpoints/authentication)  
[API Documentation.
](https://nf-api.onrender.com/docs)