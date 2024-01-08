# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Authentication configuration

- Signup page

Initially when the user signed up, the route redirects back to the Home page.

Once the user signed up, the user didn't access the login page or sign up page.

Inorder to achieve this, we store the current user credentials in the local storage "current_user_details".

if the current user credentials presents, then we will redirect back to the Home page with the help of <ProtectedRoute> component.

we remove the current user credentials when the user logged out.

When the user again sign up using the same credentials, we show the error that "the user email is already registered" since every user has unique email address. we request the user to go to the login page.

we store the user credentials in the local storage "login_details" to store every user credentials

- Login page

Here we check the user email and password with the help of "login_details".

First we find the email address of the user is registered with the "login_details". if true, then we check the password.

If both the email and password are valid, then we redirect to the Home page and we update the current user credentials in the local storage. if not, then we show the error message.

- Home page

Here We display the list of meeting rooms and their status information and log out button.

we remove the current user credentials when the user logged out and redirects back to the sign up page.

The Book seat button is enable when the room status is "open", when the button is clicked the user move to the Reservation Form, where the user can specify the date and time of reservation. Once the user submits, the status of room changed to "Closed".

The book seat button is disabled when the room status is "closed"

Tecnically we can reserve from current date to 30 days.

we store the reservation details in the local storage "meetings_details"




