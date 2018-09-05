SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

CREATE TABLE public.channel (
    id serial NOT NULL,
    affiliate boolean NOT NULL,
    avatar character varying(255),
    followers bigint,
    language character varying(255),
    name character varying(255),
    partner boolean NOT NULL,
    url character varying(255)
);
ALTER TABLE public.channel OWNER TO postgres;

CREATE TABLE public.channel_tag_user_link (
    id serial NOT NULL,
    channel_id bigint,
    tag_id bigint,
    user_id bigint
);
ALTER TABLE public.channel_tag_user_link OWNER TO postgres;

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.hibernate_sequence OWNER TO postgres;

CREATE TABLE public.tag (
    id serial NOT NULL,
    name character varying(255)
);
ALTER TABLE public.tag OWNER TO postgres;

CREATE TABLE public.website_user (
    id serial NOT NULL,
    admin boolean NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(255)
);
ALTER TABLE public.website_user OWNER TO postgres;

ALTER TABLE ONLY public.channel
    ADD CONSTRAINT channel_pkey PRIMARY KEY (id);


ALTER TABLE ONLY public.channel_tag_user_link
    ADD CONSTRAINT channel_tag_user_link_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.website_user
    ADD CONSTRAINT website_user_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.channel_tag_user_link
    ADD CONSTRAINT fk1qytqupc1du37dh71k9cpsk0m FOREIGN KEY (user_id) REFERENCES public.website_user(id);


ALTER TABLE ONLY public.channel_tag_user_link
    ADD CONSTRAINT fkqtf5cnq42lldeoh9r1ie3updf FOREIGN KEY (tag_id) REFERENCES public.tag(id);


ALTER TABLE ONLY public.channel_tag_user_link
    ADD CONSTRAINT fktnj4ok0hqeajn4to5a9sbobir FOREIGN KEY (channel_id) REFERENCES public.channel(id);
