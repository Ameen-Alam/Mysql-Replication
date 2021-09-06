# Mysql-Replication
Mysql-Replication Master-Master Master-Slave

Check MYSQL version

SHOW VARIABLES LIKE "%version%";


## MySQL FLUSH Commands.


#### Flush privileges


``` mysql> FLUSH PRIVILEGES; ```

when we grant some privileges for a user, running the command flush privileges will reloads the grant tables in the mysql database enabling the changes to take effect without reloading or restarting mysql service.


#### Flush TABLES

``` mysql> FLUSH TABLES; ```
The command closes all tables which are currently open or in use. And clears cache which intern make better utilization on available memory.


#### Flush HOSTS

``` mysql> FLUSH HOSTS; ```

The command uses host cache tables, if maximum number of connections has been reached for a particular host, mysql server will not able to make new connections. flushing host tables resets the process and again allows the connections for particular HOST.


#### Flush LOGS

``` mysql> FLUSH LOGS; ```

The command closes and reopens all log files, if log files are to big and taking more time to load then you can run the command which will create an empty log file.


#### Change user password

``` mysql> ALTER USER 'username'@'%' IDENTIFIED BY 'New-Password-Here'; ```

or 

``` mysql> ALTER USER 'username'@'localhost' IDENTIFIED BY 'New-Password-Here'; ```

and after 

``` mysql> FLUSH PRIVILEGES;``` 

#### Forgot password

/etc/my.cnf
[mysqld] 
skip-grant-tables 
systemctl restart mysql

mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('admin123/?');

remove skip-grant-tables 

#### How to change max_connections

mysql> SET GLOBAL max_connections = 5000;
Query OK, 0 rows affected (0.00 sec)

mysql> SHOW VARIABLES LIKE "max_connections";


#### User/Grants in MySQL

mysql> select * from mysql.user;

mysql> SHOW GRANTS FOR 'techonthenet';

mysql> SHOW GRANTS FOR 'techonthenet'@'%';

mysql> SHOW GRANTS FOR 'techonthenet'@'localhost';

mysql> GRANT ALL ON [DataBaseNane].* TO fooUser@'1.2.3.4' IDENTIFIED BY 'my_password';

mysql> GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';

mysql> GRANT type_of_permission ON database_name.table_name TO 'username'@'localhost';

mysql> REVOKE type_of_permission ON database_name.table_name FROM 'username'@'localhost';

mysql> SHOW GRANTS FOR 'username'@'localhost';

mysql> REVOKE type_of_permission ON database_name.table_name FROM 'username'@'localhost';

mysql> CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';

mysql> DROP USER 'username'@'localhost';





#### Following are  permissible Privileges for GRANT and REVOKE

https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html

https://www.web-technology-experts-notes.in/2014/11/Mysql-Privileges-Types-Of-Privileages-In-Mysql-How-Do-I-Grant-Privileges-In-Mysql.html












--------------------------

### Logs

log-bin-Tbit.log
log-bin-index=Tbit-log.index
max-binlog-size=10M

mysqlbinlog -v "C:\MySQL\ \Data\Tbit.000001"



-----------------------


### Error

#### Unexpected ERROR 1093 of delete w/ subquery in from stmt

https://bugs.mysql.com/bug.php?id=79286

#### Following are the error details:

Error: Migration V810_27_01__DeleteDuplicateAcsUserIdProviderGuidRowsAddUniqueConstraint.sql failed
SQL State: HY000
Error Code: 1093
Error Message: You can't specify target table 'users' for update in FROM clause
Location: <Location where the installation is done>
  
  **To resolve this error, run the following commands in the MySQL Server:**

1. Execute the following command before running the installer:

```SET GLOBAL optimizer_switch = 'derived_merge=off';```

2. Once the installation is done, set derived_merge ON using the following command:

```SET GLOBAL optimizer_switch = 'derived_merge=on';```


