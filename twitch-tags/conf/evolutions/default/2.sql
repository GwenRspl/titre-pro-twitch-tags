# --- Sample dataset

# --- !Ups

insert into channel (id,channel_name,url,channel_language,logo,follower_count,partner) values (1,'Naevyah','twitch.tv/naevyah','FR','https://static-cdn.jtvnw.net/jtv_user_pictures/e1d1c7bf-7e51-4e55-ba08-98451a3f9fc2-profile_image-70x70.png',498,false);
insert into channel (id,channel_name,url,channel_language,logo,follower_count,partner) values (2,'RedFanny','twitch.tv/redfanny_','FR','https://static-cdn.jtvnw.net/jtv_user_pictures/redfanny_-profile_image-25848107b59dae96-70x70.jpeg',4461,false);
insert into channel (id,channel_name,url,channel_language,logo,follower_count,partner) values (3,'Nat''Ali','twitch.tv/nat_ali','FR','https://static-cdn.jtvnw.net/jtv_user_pictures/83f7ac2b8a6813e6-profile_image-70x70.png',10614,true);
insert into channel (id,channel_name,url,channel_language,logo,follower_count,partner) values (4,'Elspeth','twitch.tv/elspeth','EN','https://static-cdn.jtvnw.net/jtv_user_pictures/646dfb23762feb9a-profile_image-70x70.jpeg',118974,true);
insert into channel (id,channel_name,url,channel_language,logo,follower_count,partner) values (5,'CohhCarnage','twitch.tv/cohhcarnage','EN','https://static-cdn.jtvnw.net/jtv_user_pictures/cohhcarnage-profile_image-92dc409e41560047-70x70.png',962497,true);

insert into website_user (id,username,email,password) values (1,'Gwen','gwen@gmail.com','123456');


# --- !Downs

delete from channel;
delete from website_user;