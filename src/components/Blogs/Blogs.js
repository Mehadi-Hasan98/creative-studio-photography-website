import React from "react";

const Blogs = () => {
  return (
    <div>
      <h3 className="text-center mt-5 text-primary mb-5">Question and Answer</h3>
      <div className="text-center mt-4 mx-5 ps-5 pe-5">
        <h5>Question-1: Difference between authorization and authentication</h5>
        <p> Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of granting permission to cloudHQ to access your cloud accounts (copy files, restore emails, etc.) on your behalf.
        Authentication is about validating your credentials like User Name/User ID and password to verify your identity. We use the OpenID Connect protocol for that. You can manage your authentication by clicking on My Account link in the upper right corner.Authorization, on the other hand, occurs after your identity is successfully authenticated by cloudHQ. Then you can give permission to cloudHQ to access the resources such as files, emails. This is handled with the OAuth2 protocol
        </p>
        <br/>
        <h5>Question-2: Why are you using firebase? What other option do you have to implement
          authentication?</h5>
        <p> Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
        <br/>
        <p>We have so many options to implement authentication except Firebase. We have auth0, MongoDB, Okta, Parse, AWS Amplify and others.</p>
        <h5>Question-3: What other services does firebase provide other than authentication</h5>
        <p>There are many services which Firebase provides, Most useful of them are:

        Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
