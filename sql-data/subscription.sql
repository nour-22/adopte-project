PGDMP         6            	    {           NewDB    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    NewDB    DATABASE     z   CREATE DATABASE "NewDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
    DROP DATABASE "NewDB";
                postgres    false            �            1259    16429    subscription    TABLE     �   CREATE TABLE public.subscription (
    id integer NOT NULL,
    engagement_period numeric,
    payment_period numeric,
    amount numeric
);
     DROP TABLE public.subscription;
       public         heap    postgres    false                       0    16429    subscription 
   TABLE DATA           U   COPY public.subscription (id, engagement_period, payment_period, amount) FROM stdin;
    public          postgres    false    217   �       q           2606    16435    subscription subscription_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.subscription DROP CONSTRAINT subscription_pkey;
       public            postgres    false    217                   x�3�4�46�4����� E�     