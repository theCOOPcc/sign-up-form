# Django React Todo List #

An application to make Todos using an SQL database accessed via Django and then rendered using React.

## JSON naming convention in formik initialValues ##

`initialValues` fields must be written in `snake_case` to align with Python serializer in the back end.
## Use ##

1. Open up frontend directory and type `npm i` to install node modules and then type `npm start` to start up front end.
2. Open up backend directory in a different terminal and type `pip install -r requirements.txt` to install dependencies and then `python3 manage.py runserver` to start up backend.

Note: You will need to create a `.env` file that contains a KEY VALUE pair `SECRET_KEY=foo` with the secret of your application entered.

