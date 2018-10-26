drop table if exists users;
drop table if exists posts;

create table users (
   id serial primary key,
   username varchar(20),
   password varchar(20),
   profile_pic text
);

create table posts (
   id serial primary key,
   author_id int references users (id),
   title varchar (45),
   img text,
   content text
);

select u.username, p.content
from users u 
join posts p on u.id = p.id

alter table users
add birthday text;

insert into users (username, password, profile_pic) values
('user1', 'abc', 'https://robohash.org/86.125.239.86.png
https://robohash.org/86.125.239.86.png
');

insert into posts (author_id, title, img, content) values
(1, 'title2', 'https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2018/10/GettyImages-1052493466.jpg', 'Content2');

select * from users;
select * from posts;