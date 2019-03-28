create user 'siteware'@'localhost' identified by 'siteware';

show databases;
use mysql;
select * from user;

show grants for 'mysql.sys'@'localhost';

grant all privileges on siteware.* to 'siteware'@'localhost';

show grants for 'siteware'@'localhost';

ALTER USER 'siteware'@'localhost' IDENTIFIED WITH mysql_native_password BY 'siteware';