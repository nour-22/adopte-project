--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-10-22 18:53:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16451)
-- Name: transaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction (
    id integer NOT NULL,
    creation_date date,
    amount numeric,
    user_id integer
);


ALTER TABLE public.transaction OWNER TO postgres;

--
-- TOC entry 3329 (class 0 OID 16451)
-- Dependencies: 219
-- Data for Name: transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaction (id, creation_date, amount, user_id) FROM stdin;
5	2023-10-22	5	11
7	2023-10-22	5	11
\.


--
-- TOC entry 3185 (class 2606 OID 16457)
-- Name: transaction transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);


--
-- TOC entry 3186 (class 2606 OID 16458)
-- Name: transaction user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(id);


-- Completed on 2023-10-22 18:53:54

--
-- PostgreSQL database dump complete
--

