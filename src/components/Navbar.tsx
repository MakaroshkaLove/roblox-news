import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text);
  text-decoration: none;
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--accent)' : 'var(--text)'};
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent);
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--accent);

    &::after {
      transform: scaleX(1);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 5rem 2rem;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav style={{ 
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}>
        <Container>
          <Logo to="/">🎮 Roblox News</Logo>
          <NavLinks>
            <NavLink to="/" $isActive={location.pathname === '/'}>
              Главная
            </NavLink>
            <NavLink to="/steel" $isActive={location.pathname === '/steel'}>
              Steel
            </NavLink>
            <NavLink to="/levon" $isActive={location.pathname === '/levon'}>
              Levon4ik
            </NavLink>
          </NavLinks>
          <MobileMenuButton onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </Container>
        {isOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavLink to="/" $isActive={location.pathname === '/'} onClick={closeMenu}>
              Главная
            </MobileNavLink>
            <MobileNavLink to="/steel" $isActive={location.pathname === '/steel'} onClick={closeMenu}>
              Steel
            </MobileNavLink>
            <MobileNavLink to="/levon" $isActive={location.pathname === '/levon'} onClick={closeMenu}>
              Levon4ik
            </MobileNavLink>
          </MobileMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;