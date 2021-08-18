# Mysql-Replication
Mysql-Replication Master-Master Master-Slave


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


#### How to change max_connections

mysql> SET GLOBAL max_connections = 5000;
Query OK, 0 rows affected (0.00 sec)

mysql> SHOW VARIABLES LIKE "max_connections";

+-----------------+-------+

| Variable_name   | Value |

+-----------------+-------+

| max_connections | 5000  |

+-----------------+-------+

1 row in set (0.00 sec)

