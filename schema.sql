-- Table: public.user

-- DROP TABLE IF EXISTS public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL,
    name character varying COLLATE pg_catalog."default",
    card_number character varying COLLATE pg_catalog."default",
    cvv character varying COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;

-- Table: public.subscription

-- DROP TABLE IF EXISTS public.subscription;

CREATE TABLE IF NOT EXISTS public.subscription
(
    id integer NOT NULL,
    engagement_period numeric,
    payment_period numeric,
    amount numeric,
    CONSTRAINT subscription_pkey PRIMARY KEY (id)
)

-- Table: public.transaction

-- DROP TABLE IF EXISTS public.transaction;

CREATE TABLE IF NOT EXISTS public.transaction
(
    id integer NOT NULL,
    creation_date date,
    amount numeric,
    user_id integer,
    CONSTRAINT transaction_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.transaction
    OWNER to postgres;

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.subscription
    OWNER to postgres;

-- Table: public.user_sub

-- DROP TABLE IF EXISTS public.user_sub;

CREATE TABLE IF NOT EXISTS public.user_sub
(
    id integer NOT NULL,
    renew boolean,
    creation_date date,
    end_date date,
    user_id integer,
    sub_id integer,
    CONSTRAINT user_sub_pkey PRIMARY KEY (id),
    CONSTRAINT sub_id FOREIGN KEY (sub_id)
        REFERENCES public.subscription (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_sub
    OWNER to postgres;