import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';

import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, theme, onClick }) {
  const useStyles = makeStyles(() => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: '1.1rem',
      transition: 'all 0.2s',
    },
  }));

  const classes = useStyles();
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  const btnContainerClass = (!demo || !code) ? 'project--showcaseBtn single-btn' : 'project--showcaseBtn';
  
  return (
    <Slide direction="up" triggerOnce>
      <Fade triggerOnce>
        <div
          key={id}
          className="singleProject"
          style={{ backgroundColor: theme.primary400 }}
          onClick={onClick}
        >
          <div className="projectContent">
            <div className="project-name-container">
              <h2 id={slug} style={{ color: theme.tertiary }}>
                {name}
              </h2>
            </div>
          </div>

          <div className={btnContainerClass} onClick={e => e.stopPropagation()}>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-labelledby={`${slug} ${slug}-demo`}
              >
                <FaPlay id={`${slug}-demo`} className={classes.icon} aria-label="Demo" />
              </a>
            )}

            {code && (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
                aria-labelledby={`${slug} ${slug}-code`}
              >
                <FaCode id={`${slug}-code`} className={classes.icon} aria-label="Code" />
              </a>
            )}
          </div>

          <p
            className="project--desc"
            style={{ background: theme.secondary, color: theme.tertiary }}
          >
            {desc}
          </p>
        </div>
      </Fade>
    </Slide>
  );
}

export default SingleProject;