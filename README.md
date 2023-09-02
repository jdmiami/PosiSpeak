# PosiSpeak

## Overview
PosiSpeak is a web application that allows users to clone their voice using the Eleven Labs API. The application features a marketplace for motivational sets, such as affirmations and quotes, that can be read in the user's cloned voice. The app operates on a subscription model, offering both free and premium versions.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Next Steps](#next-steps)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Additional Libraries: JWT, bcrypt, Eleven Labs API

## Installation
1. Clone the repository
    ```
    git clone https://github.com/jdmiami/PosiSpeak.git
    ```
2. Navigate to the project directory
    ```
    cd PosiSpeak
    ```
3. Install dependencies
    ```
    npm install
    ```
4. Create a `.env` file and add your environment variables
    ```
    touch .env
    ```
5. Run the server
    ```
    npm start
    ```

## Usage
- Free Version: Offers limited features like affirmations only.
- Premium Version: For $10/month, get extended functionalities like long speeches.

## Features
- User Authentication: Implemented using JWT and bcrypt.
- Voice Cloning: Clone your voice using the Eleven Labs API.
- Marketplace: Buy motivational sets to be read in your cloned voice.
- Subscription Plans: Choose between free and premium plans.

## Next Steps
- Frontend Development
- Eleven Labs API Integration
- Implementing Marketplace and Subscription Plans

## Contributing
If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License
Distributed under the MIT License. See `LICENSE` for more information.
