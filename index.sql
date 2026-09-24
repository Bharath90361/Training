create database facebook;
USE facebook;
CREATE TABLE tUser (
    user_id int PRIMARY KEY,
    Name varchar(50) NOT NULL,
    Email_id varchar(50) NOT NULL,
    Password varchar(50) NOT NULL,
    Address varchar(100),
    Phone BIGINT(10)
);
create table tFriends(
     user_id int,
     friend_id int,
     foreign key(user_id) references tUser(user_id),
     foreign key(friend_id) references tUser(user_id)
 );
create table tWall(
     user_id int,
     posting_date DATETIME DEFAULT CURRENT_TIMESTAMP,
     post varchar(200) not null,
     foreign key(user_id) references tUser(user_id)
 );

--  inserting into tUser
 insert into tUser values (101,"Bharath","bharath@gmail.com","12345","Bengaluru",9036127399);
 insert into tUser values (102,"Sharath","sharath@gmail.com","sharath","mysore",8765374234);
 insert into tUser values (103,"kiran","kiran@gmail.com","k@123","mangalore",6373920473);
 insert into tUser values (104,"kumar","kumar@gmail.com","123456","mangalore",6373920473);
 insert into tUser values (105,"harsha","harsha@gmail.com","123456","kolar",9859602996);

-- inserting into tFriends
 insert into tFriends values(101,102);
 insert into tFriends values(101,103);
 insert into tFriends values(102,101);
 insert into tFriends values(102,105);
 insert into tFriends values(102,103);
 insert into tFriends values(103,105);
 insert into tFriends values(104,101);
 insert into tFriends values(104,103);
 insert into tFriends values(105,102);

--  inserting into tWall
insert into tWall(user_id,post) values(101,"my post");
insert into tWall(user_id,post) values(101,"my family");
insert into tWall(user_id,post) values(102,"trending");
insert into tWall(user_id,post) values(103,"#first");
insert into tWall(user_id,post) values(104,"vacation");

--1 Write a query to fetch all information for a person given his name.
select * from tUser where Name="Bharath";

--2 Write a query to fetch all posts of a person given his name
SELECT w.* FROM tUser u LEFT JOIN tWall w ON u.user_id = w.user_id  WHERE u.Name = 'Bharath';

--3 Write a query to fetch all posts of a particular friend of a person, given his name and the friends name.


SELECT p.*
FROM tWall p
LEFT OUTER JOIN tFriends f
    ON f.friend_id = p.user_id
LEFT OUTER JOIN tUser u
    ON u.user_id = f.user_id
LEFT OUTER JOIN tUser b
    ON b.user_id = f.friend_id
WHERE u.Name = 'Sharath'
  AND b.Name = 'Bharath';

--4 Write a query to fetch all friends of a particular friend of a person, given the persons name and friend's name.
SELECT friend2.*
FROM tUser person
LEFT OUTER JOIN tFriends f1
    ON person.user_id = f1.user_id
LEFT OUTER JOIN tUser friend
    ON friend.user_id = f1.friend_id
LEFT OUTER JOIN tFriends f2
    ON friend.user_id = f2.user_id
LEFT OUTER JOIN tUser friend2
    ON friend2.user_id = f2.friend_id
WHERE person.Name = 'Bharath'
  AND friend.Name = 'Sharath';


--5 Write a query to remove a particular friend from a persons list, given the persons name


DELETE f
FROM tFriends f
LEFT OUTER JOIN tUser u1
    ON u1.user_id = f.user_id
LEFT OUTER JOIN tUser u2
    ON u2.user_id = f.friend_id
WHERE u1.Name = 'harsha'
  AND u2.Name = 'Sharath';

--6 Write a query to post something on his wall

INSERT INTO tWall (user_id, post)
VALUES (
    (SELECT user_id
     FROM tUser
     WHERE Name = 'Bharath'),
    'Hello Bharath!'
);

