PGDMP     #    6            	    {           NewDB    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    NewDB    DATABASE     z   CREATE DATABASE "NewDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
    DROP DATABASE "NewDB";
                postgres    false            �            1259    16422    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying,
    card_number character varying,
    cvv character varying
);
    DROP TABLE public."user";
       public         heap    postgres    false                       0    16422    user 
   TABLE DATA           <   COPY public."user" (id, name, card_number, cvv) FROM stdin;
    public          postgres    false    216   F       q           2606    16428    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    216                :   x�3���/-�4426�453�2B���CDL,͍@�0R�eh�O� ����)W� �6     