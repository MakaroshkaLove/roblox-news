import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 80px;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--bg) 0%,
    var(--primary-dark) 100%
  );
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--accent);
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text);
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NewsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const NewsCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, var(--accent), var(--secondary));
  }
`;

const NewsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NewsItem = styled(motion.div)`
  background: rgba(15, 15, 15, 0.6);
  border-radius: 15px;
  padding: 2rem;
  margin: 1.5rem 0;
  border-left: 4px solid var(--accent);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(15, 15, 15, 0.8);
    transform: translateX(10px);
  }
`;

const NewsItemTitle = styled.h3`
  color: var(--text);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const NewsItemText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const Highlight = styled.span`
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled(Link)`
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  min-width: 150px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SteelButton = styled(ActionButton)`
  background: linear-gradient(45deg, var(--accent), #ff1493);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 0, 128, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 128, 0.4);
  }
`;

const LevonButton = styled(ActionButton)`
  background: linear-gradient(45deg, var(--secondary), #00bfff);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
  }
`;

const ProfileSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProfileCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, var(--accent), var(--secondary));
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 107, 0, 0.3);
  }
`;

const ProfileAvatar = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ProfileDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProfileLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(255, 107, 0, 0.4);
  }
`;

const VideoSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, var(--accent), var(--secondary));
  }
`;

const VideoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
`;

const VideoDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    var(--accent) 0%,
    transparent 70%
  );
  opacity: 0.1;
  filter: blur(100px);
  pointer-events: none;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <BackgroundGlow style={{ top: '20%', right: '-20%' }} />
        <BackgroundGlow style={{ bottom: '-20%', left: '-20%' }} />
        <ContentWrapper>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            🎮 Roblox News
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Последние ебанутые новости из мира Roblox, инвестиции и ключевые фигуры в этом деле
          </Description>
        </ContentWrapper>
      </HeroSection>

      <NewsSection>
        <NewsCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <NewsTitle>🔥 Купленный Chilli Utils - Самые успешные инвесторы подняли $50!</NewsTitle>
          
          <NewsItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <NewsItemTitle>🚀 Крупная сделка в Roblox</NewsItemTitle>
            <NewsItemText>
              В сделке, о которой узнало много людей, 
              <Highlight> Chilli Utils</Highlight> был приобретен двумя инвесторами. 
              <Highlight> Steel</Highlight> и <Highlight>Levon4ik </Highlight> 
              успешно подняли <Highlight>ЕБАНУТЫЕ $50 </Highlight> для покупки нового скрипта!
            </NewsItemText>
            <ActionButtons>
              <SteelButton to="/steel">
                Узнать о Steel →
              </SteelButton>
              <LevonButton to="/levon">
                Узнать о Levon4ik →
              </LevonButton>
            </ActionButtons>
          </NewsItem>

          <NewsItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <NewsItemTitle>💡 Новые возможности Chilli Utils</NewsItemTitle>
            <NewsItemText>
              После успешной покупки, инвесторы планируют купить новый <Highlight>Chilli Utils</Highlight> и сделать 1000$ прибыли!
            </NewsItemText>
          </NewsItem>

          <NewsItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <NewsItemTitle>💰 Инвестиционная стратегия</NewsItemTitle>
            <NewsItemText>
              Steel и Levon4ik разработали инновационную стратегию проеба денег, 
              которая позволила им быстро собрать <Highlight>ЕБАНУТЫЕ $50</Highlight>. 
              Их подход к финансированию проектов в ебаном Roblox может стать примером 
              для других проебщиков в сообществе.
            </NewsItemText>
          </NewsItem>
        </NewsCard>
      </NewsSection>

      <VideoSection>
        <VideoCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <VideoTitle>🎬 Главный момент этого дня</VideoTitle>
          <VideoContainer>
            <Video
              controls
              preload="metadata"
              poster=""
            >
              <source src="./main.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </Video>
          </VideoContainer>
          <VideoDescription>
            Эксклюзивное видео с моментом, когда Steel и Levon4ik подняли ЕБАНУТЫЕ $50! 
            Смотрите, как они радуются своей успешной сделке с Chilli Utils.
          </VideoDescription>
        </VideoCard>
      </VideoSection>

      <ProfileSection>
        <ProfileTitle>🌟 Знакомьтесь с проебщиками</ProfileTitle>
        <ProfileGrid>
          <ProfileCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProfileAvatar>⚡</ProfileAvatar>
            <ProfileName>Steel</ProfileName>
            <ProfileDescription>
              Лучший ловитель бреинротов на планете Земля
            </ProfileDescription>
            <ProfileLink to="/steel">Подробнее</ProfileLink>
          </ProfileCard>
          
          <ProfileCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ProfileAvatar>🎯</ProfileAvatar>
            <ProfileName>Levon4ik</ProfileName>
            <ProfileDescription>
              Главный человек в этой схеме и мастер проеба денег
            </ProfileDescription>
            <ProfileLink to="/levon">Подробнее</ProfileLink>
          </ProfileCard>
        </ProfileGrid>
      </ProfileSection>
    </HomeContainer>
  );
};

export default Home;