# YouTube Clone

This project is a YouTube Clone built using React.js. It replicates the core features of YouTube, allowing users to search for videos, view video details, and watch videos.

## Table of Contents
- Features
- Demo
- Installation
- Usage
- Technologies Used
- Project Structure
- Contributing
- License

## Features
- Search for videos using the YouTube API
- View video details including title, description, and related videos
- Watch videos with an embedded player

## Demo
Check out the live demo of the project [YouTube Clone](https://projectyoutubeclone.netlify.app/).

## Installation
To get started with this project, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/DeekshithaMunigala/youtube-clone.git
cd youtube-clone
```
2. Install the dependencies:
```bash
npm install
```
3. Obtain a YouTube Data API v3 key from the [Google Developer Console](https://console.developers.google.com/).
4. Create a .env file in the root directory of the project and add your API key:
```
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
```
5. Ensure you have a CORS extension enabled in your browser, as it is mandatory for API requests to function correctly.

## Usage
To run the project locally, use the following command:
```bash
npm start
```
The application will be available at http://localhost:3000.

## Technologies Used
- React.js
- React Router
- Axios for API requests
- YouTube Data API v3

## Project Structure
```bash
youtube-clone/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── VideoList.js
│ │ ├── VideoItem.js
│ │ ├── VideoDetail.js
│ │ └── SearchBar.js
│ ├── pages/
│ │ ├── HomePage.js
│ │ ├── VideoPage.js
│ │ └── ...
│ ├── api/
│ │ └── youtube.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── .env
├── package.json
└── README.md
```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
