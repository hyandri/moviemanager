# Movie Manager App

This project is a full-stack web application designed to demonstrate modern web development concepts. It functions as a movie management tool that allows users to import video clips from their local hard drive and manage metadata, keeping file names in sync with the database.
Overview

Featured in the Modern Old School Developer series, this application showcases how to build a functional system that automatically organizes media files based on database updates.
Tech Stack

This project utilizes a modern development stack for both the front-end and back-end :
Front-end

    ReactJS: The core framework for the user interface.
    Tailwind CSS: Used for styling the application.
    Formik: Library for handling form state and validation.
    Redux Toolkit & Redux Toolkit Query: For global state management and data fetching.
    React Router: For client-side page navigation.

Back-end

    FastAPI: Powers the REST API endpoint.
    SQLAlchemy: ORM used to interface with the SQL database.

Features

    Import clips: Add movies directly from your local file system.
    Automatic File Sync: Renames files on your hard drive automatically when you update movie details like the title, studio, or category in the app.
