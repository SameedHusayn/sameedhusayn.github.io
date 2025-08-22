import React, { useState, useEffect, useContext } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
    const { theme } = useContext(ThemeContext);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const hasMultipleImages = project.screenshots && project.screenshots.length > 1;
    
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);
    
    const nextImage = () => {
        if (hasMultipleImages) {
            setCurrentImgIndex((prev) => 
                prev === project.screenshots.length - 1 ? 0 : prev + 1
            );
        }
    };
    
    const prevImage = () => {
        if (hasMultipleImages) {
            setCurrentImgIndex((prev) => 
                prev === 0 ? project.screenshots.length - 1 : prev - 1
            );
        }
    };
    
    const showCarousel = hasMultipleImages;
    const currentImage = showCarousel ? 
        project.screenshots[currentImgIndex]?.image : 
        ((project.screenshots && project.screenshots[0]?.image) || project.image);
    
    const renderDescription = () => {
        if (!project.projectDetailedDesc) return null;
        
        const paragraphs = project.projectDetailedDesc.split('\n\n');
        
        return paragraphs.map((paragraph, index) => (
            <p key={index} className="modal-desc-paragraph" style={{ color: theme.tertiary }}>
                {paragraph}
            </p>
        ));
    };
    
    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div 
                className="project-modal" 
                style={{ backgroundColor: theme.secondary }}
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="modal-close-btn"
                    style={{ color: theme.tertiary }}
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                
                <h2 style={{ color: theme.primary }}>{project.projectName}</h2>
                
                <div className="modal-image-container">
                    <div className="image-wrapper">
                        <img 
                            src={currentImage} 
                            alt={project.projectName}
                            className="project-image"
                        />
                        
                        {showCarousel && (
                            <>
                                <button 
                                    className="carousel-btn prev"
                                    onClick={prevImage}
                                    style={{ 
                                        backgroundColor: theme.primary,
                                        color: theme.secondary
                                    }}
                                >
                                    <MdNavigateBefore />
                                </button>
                                <button 
                                    className="carousel-btn next"
                                    onClick={nextImage}
                                    style={{ 
                                        backgroundColor: theme.primary,
                                        color: theme.secondary
                                    }}
                                >
                                    <MdNavigateNext />
                                </button>
                                
                                <div className="carousel-dots">
                                    {project.screenshots.map((_, index) => (
                                        <span 
                                            key={index}
                                            className={`dot ${index === currentImgIndex ? 'active' : ''}`}
                                            style={{ 
                                                backgroundColor: index === currentImgIndex 
                                                    ? theme.primary 
                                                    : theme.primary50
                                            }}
                                            onClick={() => setCurrentImgIndex(index)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        
                        {showCarousel && project.screenshots[currentImgIndex]?.caption && (
                            <p className="image-caption" style={{ color: theme.tertiary }}>
                                {project.screenshots[currentImgIndex].caption}
                            </p>
                        )}
                    </div>
                </div>
                
                <div className="modal-content">
                    <div className="modal-desc-container">
                        {renderDescription()}
                    </div>
                    
                    {project.tags && project.tags.length > 0 && (
                        <div className="tech-stack">
                            <h3 style={{ color: theme.primary }}>Technologies:</h3>
                            <p className="tech-list" style={{ color: theme.tertiary }}>
                                {project.tags.join(', ')}
                            </p>
                        </div>
                    )}
                    
                    <div className="project-links">
                        {project.code && (
                            <a 
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                                className="code-btn"
                                style={{ 
                                    backgroundColor: theme.secondary,
                                    color: theme.tertiary,
                                    border: `2px solid ${theme.tertiary}`
                                }}
                            >
                                <FaGithub /> View Code
                            </a>
                        )}
                        {project.demo && (
                            <a 
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="demo-btn"
                                style={{ 
                                    backgroundColor: theme.primary,
                                    color: theme.secondary
                                }}
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;