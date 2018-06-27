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
  channel_id                    bigserial not null,
  channel_name                  varchar(255),
  url                           varchar(255),
  channel_language              varchar(255),
  logo                          varchar(255),
  follower_count                bigint,
  partner                       boolean,
  constraint pk_channel primary key (channel_id)
);

create table channel_tag_user_link (
  id                            serial not null,
  channel_id                    bigint,
  website_user_id               bigint,
  tag_id                        bigint,
  constraint pk_channel_tag_user_link primary key (id)
);

create table tag (
  tag_id                        bigserial not null,
  tag_name                      varchar(255),
  constraint pk_tag primary key (tag_id)
);

create table website_user (
  website_user_id               bigserial not null,
  username                      varchar(255),
  email                         varchar(255),
  password                      varchar(255),
  constraint pk_website_user primary key (website_user_id)
);

alter table channel_tag_user_link add constraint fk_channel_tag_user_link_channel_id foreign key (channel_id) references channel (channel_id) on delete restrict on update restrict;
create index ix_channel_tag_user_link_channel_id on channel_tag_user_link (channel_id);

alter table channel_tag_user_link add constraint fk_channel_tag_user_link_website_user_id foreign key (website_user_id) references website_user (website_user_id) on delete restrict on update restrict;
create index ix_channel_tag_user_link_website_user_id on channel_tag_user_link (website_user_id);

alter table channel_tag_user_link add constraint fk_channel_tag_user_link_tag_id foreign key (tag_id) references tag (tag_id) on delete restrict on update restrict;
create index ix_channel_tag_user_link_tag_id on channel_tag_user_link (tag_id);


# --- !Downs

alter table if exists channel_tag_user_link drop constraint if exists fk_channel_tag_user_link_channel_id;
drop index if exists ix_channel_tag_user_link_channel_id;

alter table if exists channel_tag_user_link drop constraint if exists fk_channel_tag_user_link_website_user_id;
drop index if exists ix_channel_tag_user_link_website_user_id;

alter table if exists channel_tag_user_link drop constraint if exists fk_channel_tag_user_link_tag_id;
drop index if exists ix_channel_tag_user_link_tag_id;

drop table if exists book cascade;

drop table if exists channel cascade;

drop table if exists channel_tag_user_link cascade;

drop table if exists tag cascade;

drop table if exists website_user cascade;

