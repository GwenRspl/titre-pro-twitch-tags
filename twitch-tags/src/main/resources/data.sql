INSERT INTO public.channel(id, affiliate, avatar, followers, language, name, partner, url)
	VALUES (1, true , 'https://static-cdn.jtvnw.net/jtv_user_pictures/e1d1c7bf-7e51-4e55-ba08-98451a3f9fc2-profile_image-300x300.png', 327, 'FR', 'Naevyah', false, 'https://twitch.tv/naevyah'),
        (2, false , 'https://static-cdn.jtvnw.net/jtv_user_pictures/redfanny_-profile_image-25848107b59dae96-300x300.jpeg', 4432, 'FR', 'RedFanny', false, 'https://twitch.tv/redfanny_');

INSERT INTO public.website_user(id, admin, email, password, username)
	VALUES (1, TRUE, 'admin@admin.fr', 'admin', 'admin'),
	      (2, FALSE, 'user@user.fr', 'user1', 'user1');

INSERT INTO public.tag(id, name)
	VALUES (1, 'humor'),
	      (2, 'positivity');

INSERT INTO public.channel_tag_user_link(id, channel_id, tag_id, user_id)
	VALUES (1, 1, 1, 1),
      (2, 2, 1, 2);