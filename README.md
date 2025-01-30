Chatbot Integration Project Live link : https://beyondchats-ui.onrender.com

This project demonstrates the integration of a chatbot on a client's website, including the necessary setup, testing, and social media sharing functionality. The integration process involves setting up an organization, adding chatbot functionality, and testing the chatbot via a user-friendly interface. Upon successful integration, users can share their success on various social media platforms.
Table of Contents
1. Project Description
2. Technologies Used
3. Features
4. Installation Instructions
5. How to Use
6. Future Improvements

Project Description
This is a React-based web application that allows users to integrate a chatbot onto a client's website. The flow includes the following steps:
1. User Registration: The user can register with a name, email, and password, or use Google login.
2. Setup Organization: After registration, users set up their organization by providing company details and URL.
3. Chatbot Integration: Users can test the chatbot on a dummy client site. They can send integration instructions to a developer or test the integration.
4. Social Media Sharing: After successful chatbot integration, users can share their success on various social media platforms, including Facebook, Twitter, LinkedIn, and WhatsApp.
The app uses React for the front-end, React Toastify for notifications, and react-share for social media sharing.

Technologies Used
* React: For building the user interface.
* React Router: For routing between pages.
* React Toastify: For displaying success/error messages as non-blocking notifications.
* Confetti: For showing a celebratory effect on successful chatbot integration.
* Font Awesome / react-icons: For social media icons.
* JavaScript: For handling all the logic behind the integration and user actions.

Features
* User Registration: Registration with email or Google login.
* Auto Fetch Dummy Company Description: Automatically fetches the Dummy company description based on the website URL.
* Chatbot Test: Test the chatbot integration on a dummy client website.
* Instructions for Integration: Instructions for adding the chatbot to the client's website.
* Social Media Sharing: After successful integration, users can share their success on Facebook, Twitter, LinkedIn, and WhatsApp.
* Confetti Animation: A celebratory animation on successful integration.
* Responsive Design: The app is responsive and works well on both desktop and mobile devices.

Installation Instructions
To run the project locally, follow these steps:
1. Clone the repository:git clone https://github.com/k-bharath0/chatbot-integration.git
2.  Navigate into the project folder:cd chatbot-integration
3. Install dependencies:npm install
7. Run the application:npm start
8. The application will now be running on http://localhost:3000.

How to Use
1. Registration: Navigate to the registration page and sign up using email or Google login.
2. Setup Organization: After logging in, enter the required company details such as company name, URL, and description.
3. Test Chatbot: Click the "Test Chatbot" button to see the chatbot widget appear on a dummy client website.
4. Test Integration: Click the "Test Integration" button to check if the integration was successful. You will be shown a success message with an option to share it on social media.
5. Social Media Sharing: After a successful integration, share your success on Facebook, Twitter, LinkedIn, or WhatsApp by clicking the corresponding icons.


Future Improvements
* Backend Integration: Currently, the app uses mock data. Integrating with a real backend (e.g., Node.js with a database) to store and manage user data, company info, and chatbot statuses would be a great improvement.
* User Authentication: Implement user authentication for added security and personalized user experience.
