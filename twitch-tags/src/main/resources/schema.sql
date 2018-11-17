DROP TABLE IF EXISTS channel CASCADE;
CREATE TABLE IF NOT EXISTS channel (
  id serial primary key,
  avatar character varying(255),
  status integer,
  followers bigint,
  language character varying(255),
  name character varying(255),
  url character varying(255)
);

DROP TABLE IF EXISTS tag CASCADE;
CREATE TABLE IF NOT EXISTS tag (
  id serial primary key,
  name character varying(255)
);

DROP TABLE IF EXISTS website_user CASCADE;
CREATE TABLE IF NOT EXISTS website_user (
  id serial primary key,
  role integer,
  email character varying(255),
  password character varying(255),
  username character varying(255)
);

DROP TABLE IF EXISTS channel_tag_user_link;
CREATE TABLE IF NOT EXISTS channel_tag_user_link (
  id serial primary key,
  channel_id bigint REFERENCES channel(id) ON DELETE CASCADE,
  tag_id bigint REFERENCES tag(id) ON DELETE CASCADE,
  user_id bigint REFERENCES website_user(id) ON DELETE CASCADE
);
