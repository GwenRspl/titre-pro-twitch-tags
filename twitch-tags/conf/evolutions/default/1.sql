# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table book (
  id                            serial not null,
  title                         varchar(255),
  price                         integer,
  author                        varchar(255),
  constraint pk_book primary key (id)
);

create table channel (
  id                            serial not null,
  channel_name                  varchar(255),
  url                           varchar(255),
  channel_language              varchar(255),
  logo                          varchar(255),
  follower_count                bigint,
  partner                       boolean,
  constraint pk_channel primary key (id)
);

create table website_user (
  id                            serial not null,
  username                      varchar(255),
  email                         varchar(255),
  password                      varchar(255),
  constraint pk_website_user primary key (id)
);


# --- !Downs

drop table if exists book cascade;

drop table if exists channel cascade;

drop table if exists website_user cascade;

