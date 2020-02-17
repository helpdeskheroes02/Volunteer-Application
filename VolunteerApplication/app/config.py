""" Configuration Variables """

DEBUG = True
PORT = 5000
HOST = "127.0.0.1"

SECRET_KEY = "MERKY"

MYSQL_DATABASE_HOST = 'localhost'
MYSQL_DATABASE_PORT = 3306
MYSQL_DATABASE_USER = 'root'
MYSQL_DATABASE_PASSWORD = 'root'
MYSQL_DATABASE_DB = 'volunteer_db'

PROPAGATE_EXCEPTIONS = True
JWT_BLACKLIST_ENABLED = True  # enable blacklist feature
JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']  # allow blacklisting for access and refresh tokens