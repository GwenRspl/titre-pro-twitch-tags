INSERT INTO public.channel(affiliate, avatar, followers, language, name, partner, url)
	VALUES (true , 'https://static-cdn.jtvnw.net/jtv_user_pictures/e1d1c7bf-7e51-4e55-ba08-98451a3f9fc2-profile_image-300x300.png', 327, 'fr', 'Naevyah', false, 'https://twitch.tv/naevyah'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/redfanny_-profile_image-25848107b59dae96-300x300.jpeg', 4432, 'fr', 'RedFanny', false, 'https://twitch.tv/redfanny_'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/zerator-profile_image-48eee9de24a47e53-300x300.png', 493724, 'fr', 'ZeratoR', true, 'https://www.twitch.tv/zerator'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/ed72b641-83ea-4ee6-81fd-aa195759c512-profile_image-300x300.png', 995847, 'en', 'CohhCarnage', true, 'https://www.twitch.tv/cohhcarnage'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/646dfb23762feb9a-profile_image-300x300.jpeg', 126244, 'en', 'Elspeth', true, 'https://www.twitch.tv/elspeth'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-300x300.jpeg', 2384853, 'en', 'imaqtpie', false, 'https://www.twitch.tv/imaqtpie'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/djboucherie-profile_image-9a33001bfd9322ec-300x300.png', 46686, 'fr', 'DJboucherie', true, 'https://www.twitch.tv/djboucherie'),
        (true , 'https://static-cdn.jtvnw.net/jtv_user_pictures/48a47244-0884-415d-87bc-9db2671e3334-profile_image-300x300.jpg', 4432, 'fr', 'JehlahdFR', false, 'https://twitch.tv/jehlahdfr'),
        (false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/83f7ac2b8a6813e6-profile_image-300x300.png', 12116, 'FR', 'Nat_Ali', true, 'https://www.twitch.tv/nat_ali');

INSERT INTO public.website_user(admin, email, password, username)
	VALUES (TRUE, 'admin@admin.fr', 'admin', 'admin'),
	      (FALSE, 'user1@user.fr', 'user1', 'user1'),
	      (FALSE, 'user2@user.fr', 'user2', 'user2'),
	      (FALSE, 'user3@user.fr', 'user3', 'user3'),
	      (FALSE, 'user4@user.fr', 'user4', 'user4'),
	      (FALSE, 'user5@user.fr', 'user5', 'user5');

INSERT INTO public.tag(name)
	VALUES ('humor'),
	      ('positivity'),
	      ('MMORPG'),
	      ('kid-friendly'),
	      ('FPS'),
	      ('LGBTQ+-friendly'),
	      ('chill');

INSERT INTO public.channel_tag_user_link(channel_id, tag_id, user_id)
	VALUES (1, 1, 1),
      (2, 1, 2),
      (3, 1, 2),
      (3, 2, 2),
      (3, 3, 2),
      (3, 4, 2),
      (3, 5, 2),
      (3, 6, 2),
      (3, 1, 1),
      (3, 1, 3),
      (3, 1, 4);