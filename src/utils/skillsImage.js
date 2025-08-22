import pytorch from '../assets/svg/skills/pytorch.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import openai from '../assets/svg/skills/openai.svg'
import gcp from '../assets/svg/skills/gcp.svg'
import docker from '../assets/svg/skills/docker.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import python from '../assets/svg/skills/python.svg'
import aws from '../assets/svg/skills/aws.svg'
import git from '../assets/svg/skills/git.svg'
import huggingface from '../assets/svg/skills/huggingface.svg'
import cuda from '../assets/svg/skills/cuda.svg'
import fastapi from '../assets/svg/skills/fastapi.svg'
import github from '../assets/svg/skills/github.svg'
import gradio from '../assets/svg/skills/gradio.svg'
import vectordb from '../assets/svg/skills/vectordb.svg'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case 'gcp': return gcp;
    case 'docker': return docker;
    case 'pytorch': return pytorch;
    case 'torch': return pytorch;            
    case 'mongodb': return mongoDB;
    case 'python': return python;
    case 'numpy': return numpy;
    case 'aws': return aws;
    case 'git': return git;
    case 'tensorflow': return tensorflow;
    case 'openai': return openai;
    case 'hugging face':
        case 'huggingface': return huggingface;
    case 'mysql': return mysql;
    case 'postgresql': return postgresql;
    case 'cuda': return cuda;
    case 'fastapi':
    case 'fast api': return fastapi;
    case 'github': return github;
    case 'gradio': return gradio;
    case 'vectordb':
    case 'vector db':
    case 'vector dbs':
    case 'vectordbs': return vectordb;
    case 'mongodb': return mongoDB;
    case 'selenium': return selenium;
    default:
      break;
  }
}
