PGDMP     9    6            	    {           NewDB    15.4    15.4 	               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    NewDB    DATABASE     z   CREATE DATABASE "NewDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
    DROP DATABASE "NewDB";
                postgres    false            �            1259    16436    user_sub    TABLE     �   CREATE TABLE public.user_sub (
    id integer NOT NULL,
    renew boolean,
    creation_date date,
    end_date date,
    user_id integer,
    sub_id integer
);
    DROP TABLE public.user_sub;
       public         heap    postgres    false                      0    16436    user_sub 
   TABLE DATA           W   COPY public.user_sub (id, renew, creation_date, end_date, user_id, sub_id) FROM stdin;
    public          postgres    false    218   	       q           2606    16440    user_sub user_sub_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.user_sub
    ADD CONSTRAINT user_sub_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.user_sub DROP CONSTRAINT user_sub_pkey;
       public            postgres    false    218            r           2606    16446    user_sub sub_id    FK CONSTRAINT     t   ALTER TABLE ONLY public.user_sub
    ADD CONSTRAINT sub_id FOREIGN KEY (sub_id) REFERENCES public.subscription(id);
 9   ALTER TABLE ONLY public.user_sub DROP CONSTRAINT sub_id;
       public          postgres    false    218            s           2606    16441    user_sub user_id    FK CONSTRAINT     p   ALTER TABLE ONLY public.user_sub
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(id);
 :   ALTER TABLE ONLY public.user_sub DROP CONSTRAINT user_id;
       public          postgres    false    218               .   x�3�,�4202�54�52�2ALCNC.#����eA����c���� o�B     