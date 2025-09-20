import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BioContainer = styled.div`
  background: var(--bg);
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
`;

const BioCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 3rem;
  margin: 0 auto;
  max-width: 1000px;
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
    background: linear-gradient(45deg, var(--accent), #ff1493);
  }
`;

const BioTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, var(--accent), #ff1493);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BioContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
`;

const BioText = styled(motion.p)`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const StatItem = styled(motion.div)`
  background: rgba(255, 0, 128, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 2px solid rgba(255, 0, 128, 0.2);
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent);
  display: block;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const SectionTitle = styled(motion.h2)`
  color: var(--text);
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--accent);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(45deg, var(--accent), #ff1493);
  }
`;

const AchievementsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const AchievementItem = styled(motion.li)`
  background: rgba(255, 0, 128, 0.1);
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--accent);
  position: relative;

  &::before {
    content: '⚡';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--accent);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(255, 0, 128, 0.1);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 2px solid rgba(255, 0, 128, 0.2);
`;

const ContactTitle = styled.h3`
  color: var(--accent);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(45deg, var(--accent), #ff1493);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 0, 128, 0.3);
  text-align: center;
  margin: 2rem auto;
  display: block;
  max-width: 200px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 0, 128, 0.4);
  }
`;

const SteelBio: React.FC = () => {
  return (
    <BioContainer>
      <BioCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BioTitle
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ⚡ Steel - Ловитель бреинротов
        </BioTitle>
        
        <BioContent>
          <BioText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <strong>Steel</strong> - легендарная фигура в Steal a Brainrot, известный своими 
            навыками ловить бреинротов и  стратегиями и способностью предвидеть следующий шаг. 
            Его подход к ловле и принятию решений сделал его одним из самых 
            уважаемых ловителей в Roblox.
          </BioText>

          <BioText
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Начав свой путь как обычный игрок, Steel быстро понял потенциал 
            FUNPAY и начал разрабатывать собственные 
            стратегии ловли.
          </BioText>

          <StatsGrid
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>$50+</StatValue>
              <StatLabel>Поднято денег</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>0+</StatValue>
              <StatLabel>Успешных проектов</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>0%</StatValue>
              <StatLabel>Успешность сделок</StatLabel>
            </StatItem>
            <StatItem
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400,
                damping: 25
              }}
            >
              <StatValue>15+</StatValue>
              <StatLabel>Лет опыта</StatLabel>
            </StatItem>
          </StatsGrid>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            🎯 Философия
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Steel верит в силу людей и их способности к развитию, поэтому он всегда помогает другим игрокам, а они ему руинять бляди.
          </BioText>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            🚀 Ключевые достижения
          </SectionTitle>
          <AchievementsList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <AchievementItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(255, 0, 128, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 1.8,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Наебало его 3 доксера
            </AchievementItem>
            <AchievementItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(255, 0, 128, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.0,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Никто не дает ему в долг
            </AchievementItem>
            <AchievementItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(255, 0, 128, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Спизжено более 1000 бреинротов
            </AchievementItem>
            <AchievementItem
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                x: 10,
                backgroundColor: "rgba(255, 0, 128, 0.2)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.4,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              Кричит когда не дают забрать бреинрота
            </AchievementItem>
          </AchievementsList>

          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            💡 Видение будущего
          </SectionTitle>
          <BioText
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
          >
            Steel видит будущее Roblox как платформу, где каждый талантливый 
            бреинротер может найти лишние 150$ и начать пиздить бреинротов вместе с ним. 
          </BioText>

          <ContactInfo
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            <ContactTitle>📞 Контакты</ContactTitle>
            <BioText>
              Steel всегда открыт для общения с доксерами и 
              другими людьми. Его двери открыты для всех, 
              кто разделяет желание наебать на бреинрота.
            </BioText>
          </ContactInfo>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BackButton to="/">
              ← Вернуться к новостям
            </BackButton>
          </motion.div>
        </BioContent>
      </BioCard>
    </BioContainer>
  );
};

export default SteelBio;