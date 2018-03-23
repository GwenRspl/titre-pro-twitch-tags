# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table channel (
  id                            bigserial not null,
  constraint pk_channel primary key (id)
);


# --- !Downs

drop table if exists channel cascade;

