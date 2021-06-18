# TheCoop User Sign Up List #

An application to make Todos using an SQL database accessed via Django and then rendered using React.

See it [here](https://applicant-form.herokuapp.com/).

Access the [admin](https://applicant-form.herokuapp.com/admin/) portal. Consult with Cory to create a superuser. 

Access the [api](https://applicant-form.herokuapp.com/api/).

## Use ##

0. Create a table in Postgres.
1. Open up base directory and type `npm i` to install node modules and then type `npm start` to start up front end.
2. Open up backend directory in a different terminal and type `pip install -r requirements.txt` to install dependencies and then return to the base directory, type `python3 manage.py runserver` to start up backend.

Note: You will need to create a `.env` file that contains two KEY VALUE pairs: `SECRET_KEY=foo` with the secret of your application entered and `DATABASE_URL=postgres://<username>:<password>@5432/<tablename>` with your postgres credentials.

## Formik ##

We built the form using the Formik React library. Documentation for the library can be found here: https://formik.org/

## A note on JSON naming convention in formik initialValues ##

`initialValues` fields must be written in `snake_case` to align with Python serializer in the back end.

## Built by ##

1. Cory S.
2. Patrick O.
3. Lauren F.
4. Tyler R.
5. Stephanie P.
