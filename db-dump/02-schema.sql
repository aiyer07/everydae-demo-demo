--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7
-- Dumped by pg_dump version 10.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: answer; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.answer (
    id integer NOT NULL,
    "questionId" integer,
    "answerText" text,
    correct boolean DEFAULT false,
    "percentCorrect" numeric
);


ALTER TABLE public.answer OWNER TO username;

--
-- Name: answer_id_seq; Type: SEQUENCE; Schema: public; Owner: username
--

CREATE SEQUENCE public.answer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.answer_id_seq OWNER TO username;

--
-- Name: answer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: username
--

ALTER SEQUENCE public.answer_id_seq OWNED BY public.answer.id;


--
-- Name: question; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.question (
    id integer NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    type text,
    "primary" text,
    secondary text
);


ALTER TABLE public.question OWNER TO username;

--
-- Name: trips_id_seq; Type: SEQUENCE; Schema: public; Owner: username
--

CREATE SEQUENCE public.trips_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trips_id_seq OWNER TO username;

--
-- Name: trips_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: username
--

ALTER SEQUENCE public.trips_id_seq OWNED BY public.question.id;


--
-- Name: user_answers; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.user_answers (
    id integer NOT NULL,
    "userId" integer,
    "answerId" integer,
    "createdAt" date
);


ALTER TABLE public.user_answers OWNER TO username;

--
-- Name: user_answers_id_seq; Type: SEQUENCE; Schema: public; Owner: username
--

CREATE SEQUENCE public.user_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_answers_id_seq OWNER TO username;

--
-- Name: user_answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: username
--

ALTER SEQUENCE public.user_answers_id_seq OWNED BY public.user_answers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: username
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    name text,
    token text
);


ALTER TABLE public.users OWNER TO username;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: username
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO username;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: username
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: answer id; Type: DEFAULT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.answer ALTER COLUMN id SET DEFAULT nextval('public.answer_id_seq'::regclass);


--
-- Name: question id; Type: DEFAULT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.question ALTER COLUMN id SET DEFAULT nextval('public.trips_id_seq'::regclass);


--
-- Name: user_answers id; Type: DEFAULT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.user_answers ALTER COLUMN id SET DEFAULT nextval('public.user_answers_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: answer answer_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_pkey PRIMARY KEY (id);


--
-- Name: question trips_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT trips_pkey PRIMARY KEY (id);


--
-- Name: user_answers user_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.user_answers
    ADD CONSTRAINT user_answers_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: user_answers user_answers_answerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.user_answers
    ADD CONSTRAINT "user_answers_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES public.answer(id);


--
-- Name: user_answers user_answers_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: username
--

ALTER TABLE ONLY public.user_answers
    ADD CONSTRAINT "user_answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: username
--

GRANT USAGE ON SCHEMA public TO arjun;


--
-- Name: TABLE answer; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON TABLE public.answer TO arjun;


--
-- Name: SEQUENCE answer_id_seq; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON SEQUENCE public.answer_id_seq TO arjun;


--
-- Name: TABLE question; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON TABLE public.question TO arjun;


--
-- Name: SEQUENCE trips_id_seq; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON SEQUENCE public.trips_id_seq TO arjun;


--
-- Name: TABLE user_answers; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON TABLE public.user_answers TO arjun;


--
-- Name: SEQUENCE user_answers_id_seq; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON SEQUENCE public.user_answers_id_seq TO arjun;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON TABLE public.users TO arjun;


--
-- Name: SEQUENCE users_id_seq; Type: ACL; Schema: public; Owner: username
--

GRANT ALL ON SEQUENCE public.users_id_seq TO arjun;


--
-- PostgreSQL database dump complete
--

